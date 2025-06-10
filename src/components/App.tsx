import React, { useState, useEffect } from 'react';
import { Box, Text, useApp } from 'ink';
import figlet from 'figlet';
import Prompt from './Prompt.js';
import commands from '../commands/index.js';
import Suggestions from './Suggestions.js';

interface HistoryItem {
  id: number;
  command: string;
  output: string;
}

/**
 * The main application component.
 * It orchestrates the entire UI, including the welcome message,
 * command history, command suggestions, and the input prompt.
 */
const App = () => {
  const { exit } = useApp();
  /** The ASCII art welcome message. */
  const [welcomeMessage, setWelcomeMessage] = useState('');
  /** The current user input in the prompt. */
  const [query, setQuery] = useState('');
  /** A list of all previously executed commands and their outputs. */
  const [history, setHistory] = useState<HistoryItem[]>([]);

  useEffect(() => {
    figlet.text('Interactive CLI', { font: 'Standard' }, (err, data) => {
      if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
      }
      if (data) {
        setWelcomeMessage(data);
      }
    });
  }, []);

  const handleSubmit = async (userInput: string) => {
    if (userInput.toLowerCase() === 'exit' || userInput.toLowerCase() === '.exit' || userInput.toLowerCase() === 'quit') {
      exit();
      return;
    }

    const [input, ...args] = userInput.trim().split(' ');
    const commandName = input.startsWith('/') ? input.substring(1) : input;

    const command = commands.get(commandName);
    let output = `Command not found: ${commandName}`;

    if (command) {
      const result = await command.execute(args);
      output = result || '';
    }

    const newHistoryItem: HistoryItem = {
      id: history.length,
      command: userInput,
      output,
    };

    setHistory(prevHistory => [...prevHistory, newHistoryItem]);
    setQuery('');
  };

  return (
    <Box flexDirection="column">
      <Text color="green">{welcomeMessage}</Text>
      <Text>Welcome to the interactive CLI template. Type / to see commands.</Text>
      
      {history.map(item => (
        <Box flexDirection="column" key={item.id}>
          <Text>{'> '}{item.command}</Text>
          <Text color="gray">{item.output}</Text>
        </Box>
      ))}

      <Prompt query={query} setQuery={setQuery} onSubmit={handleSubmit} />

      {query.startsWith('/') && <Suggestions commands={commands} />}
    </Box>
  );
};

export default App; 
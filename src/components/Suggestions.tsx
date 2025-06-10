import React from 'react';
import { Box, Text } from 'ink';
import { Command } from '../types/index.js';

interface SuggestionsProps {
  /** A map of all available commands to be displayed. */
  commands: Map<string, Command>;
}

/**
 * A component that displays a list of available commands.
 */
const Suggestions = ({ commands }: SuggestionsProps) => {
  return (
    <Box flexDirection="column" paddingX={1}>
      <Text bold>COMMANDS</Text>
      {Array.from(commands.values()).map(command => (
        <Box key={command.name}>
          <Text color="cyan">/{command.name}</Text>
          <Text> - {command.description}</Text>
        </Box>
      ))}
    </Box>
  );
};

export default Suggestions; 
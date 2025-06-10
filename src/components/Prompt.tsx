import React from 'react';
import { Box, Text } from 'ink';
import TextInput from 'ink-text-input';

interface PromptProps {
  /** The current value of the input query. */
  query: string;
  /** A setter function to update the query state. */
  setQuery: (query: string) => void;
  /** The function to call when the user submits the input. */
  onSubmit: (query: string) => void;
}

/**
 * A component that renders a bordered text input prompt.
 */
const Prompt = ({ query, setQuery, onSubmit }: PromptProps) => {
  return (
    <Box borderStyle="round" paddingX={1}>
      <Box marginRight={1}>
        <Text>{'>'}</Text>
      </Box>
      <TextInput
        value={query}
        onChange={setQuery}
        onSubmit={onSubmit}
        placeholder="Type / to see commands or 'exit' to quit..."
      />
    </Box>
  );
};

export default Prompt; 
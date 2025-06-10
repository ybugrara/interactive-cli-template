import { Command } from '../types/index.js';

const greet: Command = {
  name: 'greet',
  description: 'Greets the user',
  execute: async (args: string[]) => {
    const name = args[0] || 'World';
    return `Hello, ${name}!`;
  },
};

export default greet; 
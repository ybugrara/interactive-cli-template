import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { Command } from '../types/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const commands = new Map<string, Command>();

const loadCommands = async () => {
  const commandFiles = fs.readdirSync(__dirname).filter(file => file.endsWith('.ts') && file !== 'index.ts');

  for (const file of commandFiles) {
    const commandModule = await import(`./${file}`);
    const command: Command = commandModule.default;
    commands.set(command.name, command);
  }
};

loadCommands();

export default commands; 
/**
 * Represents a command that can be executed by the CLI.
 */
export interface Command {
  /** The name of the command, used to invoke it (e.g., "greet"). */
  name: string;
  /** A brief description of what the command does, shown in the suggestion list. */
  description: string;
  /**
   * The function to execute when the command is called.
   * @param args An array of string arguments passed to the command.
   * @returns A promise that resolves to a string to be displayed as output, or void.
   */
  execute: (args: string[]) => Promise<string | void>;
} 
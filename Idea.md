An interactive CLI template

Tech stack:

Main language: typescript

## Project Plan: Interactive CLI Template

### 1. Project Goals

- **Interactive & User-Friendly:** Create a REPL-like (Read-Eval-Print-Loop) interface that is more engaging than a traditional CLI.
- **Beautiful UI:** Use modern libraries to create a visually appealing interface with colors, spinners, and well-structured text.
- **Slash Commands:** Implement a core feature where typing `/` reveals a list of available commands, similar to modern chat applications.
- **Modularity & Extensibility:** Design an architecture that makes it simple to add new commands and features over time.
- **TypeScript First:** Leverage TypeScript for a robust and maintainable codebase.
- **Template for Future Projects:** This project will serve as a starting point for building other powerful CLIs.

### 2. Core Technologies

- **[Node.js](https://nodejs.org/):** The runtime environment.
- **[TypeScript](https://www.typescriptlang.org/):** For type safety and modern JavaScript features.
- **[React](https://reactjs.org/):** The UI library that powers Ink.
- **[Ink](https://github.com/vadimdemedes/ink):** To build the entire interactive UI with React components.
- **[ink-text-input](https://github.com/vadimdemedes/ink-text-input):** A component for text input, which we'll use for our prompt.
- **[Commander.js](https://github.com/tj/commander.js) or [Yargs](https://yargs.js.org/):** For robust command-line argument parsing if we need to support traditional CLI flags and commands alongside the interactive mode.
- **[Inquirer.js](https://github.com/SBoudrias/Inquirer.js):** For complex, multi-step prompts that can be triggered by commands.
- **[Chalk](https://github.com/chalk/chalk):** To add color and style to terminal output, making it more readable and beautiful.
- **[ink-spinner](https://github.com/vadimdemedes/ink-spinner):** An Ink component for elegant spinners.
- **[Figlet](https://github.com/patorjk/figlet.js):** To create ASCII art for welcome messages or banners.

### 3. Proposed Project Structure

A modular structure to keep commands, components, and concerns separated.

```
/
├── src/
│   ├── components/        # React components for the UI (using Ink)
│   │   ├── App.tsx          # Main application component
│   │   └── Prompt.tsx       # The bordered prompt component
│   ├── commands/
│   │   ├── index.ts         # Command loader/registry
│   │   ├── greet.ts         # Example command
│   │   └── ...              # Other commands
│   ├── utils/
│   │   ├── logger.ts        # Utility for styled console logging
│   │   └── theme.ts         # Centralized styling and theme definitions
│   ├── types/
│   │   └── index.ts         # Shared TypeScript types and interfaces
│   ├── index.ts             # Main application entry point (will render the Ink app)
├── package.json
├── tsconfig.json
└── README.md
```

### 4. Core Features & Architecture

#### a. Interactive UI with Ink

- The entire CLI interface will be a tree of **React components** rendered by Ink.
- The main entry point will render the top-level `<App />` component.
- State, such as the current user input and command history, will be managed within our React components using hooks (`useState`, `useEffect`).
- The prompt will be a dedicated component (`<Prompt />`) that uses Ink's `<Box>` component to draw a border around an `<TextInput>` component. This directly addresses the bordered prompt requirement.
- This architecture replaces the simpler `readline` loop with a more powerful, declarative UI model.

#### b. Command Handling & Slash Commands

- When the user types `/`, we can trigger an autocomplete/suggestion feature.
- We will maintain a **command registry**. This will be an object or a Map in `src/commands/index.ts` that holds all available command definitions.
- Each command will be a module in the `src/commands/` directory.
- A command module will export an object conforming to an interface, for example:
  ```typescript
  // src/types/index.ts
  export interface Command {
    name: string;
    description: string;
    execute: (args: string[]) => Promise<string | void>; // Can return output to be displayed
  }
  ```
- The main application will dynamically import all modules from the `commands` directory and register them.

#### c. Modularity and Extensibility

- **Adding a new command** will be as simple as creating a new file in `src/commands/`.
- The `index.ts` in `src/commands/` will use `fs.readdirSync` to automatically find and export all command files. This means no manual registration is needed for new commands.

#### d. Centralized Theming

- All colors and styles will be defined in `src/utils/theme.ts` using `chalk`.
- Components will import styles from this file to ensure a consistent look and feel.
- This makes the CLI easily "skinnable" by changing this single file.

### 5. Development Setup

- **`tsconfig.json`:** Configure the TypeScript compiler.
- **`package.json` scripts:**
  - `start`: To run the compiled JavaScript.
  - `dev`: To run the CLI in development mode with `ts-node-dev` for live-reloading of the Ink app.
  - `build`: To compile TypeScript to JavaScript.
- **Linting and Formatting:** Use ESLint and Prettier to maintain code quality and consistency, with rules for React and JSX.

### 6. Next Steps (Initial Roadmap)

1.  **Project Setup:** Initialize a new Node.js project, add TypeScript, and configure `tsconfig.json` and `package.json`.
2.  **Install Dependencies:** Install the core packages listed above.
3.  **Basic REPL:** Implement the basic interactive loop in `src/cli.ts`.
4.  **Command Loader:** Create the dynamic command loader in `src/commands/index.ts`.
5.  **First Command:** Implement a simple `greet` command.
6.  **Slash Command Suggester:** Implement the logic to suggest commands when `/` is typed.
7.  **UI Polish:** Add colors, a welcome banner, and spinners.


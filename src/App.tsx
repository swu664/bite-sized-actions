import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/core";
import "./App.css";

import TaskList from "./TaskList";
import type { Task } from "./type.ts"

// sample data
const tasks: Task[] = [
  {
    id: 1,
    title: "Build app",
    deadline: null,
    complete: false,
    completedAt: null,
    recurrance: null,
    children: [
      {
        id: 2,
        title: "Design UI",
        deadline: null,
        complete: false,
        completedAt: null,
        recurrance: null,
        children: [
          {
            id: 4, title: "Wireframes",
            deadline: null,
            complete: false,
            completedAt: null,
            recurrance: null,
          },
          {
            id: 5, title: "Pick colours",
            deadline: null,
            complete: false,
            completedAt: null,
            recurrance: null,
          },
        ],
      },
      {
        id: 3, title: "Set up DB",
        deadline: null,
        complete: false,
        completedAt: null,
        recurrance: null,
      },
    ],
  },
];

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <main className="container">

      {/* render TaskList (sample data) */}
      {tasks.map((task) =>
        <TaskList task={task} />
      )}

      <h1>Welcome to Tauri + React</h1>

      <div className="row">
        <a href="https://vite.dev" target="_blank">
          <img src="/vite.svg" className="logo vite" alt="Vite logo" />
        </a>
        <a href="https://tauri.app" target="_blank">
          <img src="/tauri.svg" className="logo tauri" alt="Tauri logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <p>Click on the Tauri, Vite, and React logos to learn more.</p>

      <form
        className="row"
        onSubmit={(e) => {
          e.preventDefault();
          greet();
        }}
      >
        <input
          id="greet-input"
          onChange={(e) => setName(e.currentTarget.value)}
          placeholder="Enter a name..."
        />
        <button type="submit">Greet</button>
      </form>
      <p>{greetMsg}</p>
    </main>
  );
}

export default App;

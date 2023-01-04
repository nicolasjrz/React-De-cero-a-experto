import React from "react";
import ReactDOM from "react-dom/client";
//import { MultipleCustomHooks } from "./03-examples/MultipleCustomHooks";
import "./index.css";
//import { HooksApp } from "./HooksApp";
//import { CounterWithCustomHook } from "./CounterWithCustomHook";
//import { SimpleForm } from "./useEfect/SimpleForm";
//import { FormWithCustomHook } from "./useEfect/FormWithCustomHook";
//import { FocusScreen } from "./04-useRef/FocusScreen";
//import { MemoHook } from "./06-memos/MemoHook";
//import { CallbackHook } from "./07-Callbacks/CallbackHook";
//import { Padre } from "./07-tarea-memo/Padre";
import { TodoApp } from "./09-useReducer/TodoApp";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //<React.StrictMode>
  <TodoApp />
  //</React.StrictMode>
);

import { Tab, Task } from "@/components/TodoApp";
import React, { createContext } from "react";

type TasksState = {
	tasks: Task[];
	activeTab: "todo" | "in-progress" | "done" | "all";
};

type TasksAction =
	| { type: "added"; task: Task }
	| { type: "changed"; task: Task }
	| { type: "deleted"; id: string }
	| { type: "tab_changed"; tab: Tab };

export const TasksContext = createContext<TasksState | null>(null);
export const TasksDispatchContext =
	createContext<React.Dispatch<TasksAction> | null>(null);

import { TasksContext, TasksDispatchContext } from "@/context/tasksContext";
import { useReducer } from "react";
import { TabNavigation } from "./TabNavigation";
import TaskForm from "./TaskForm";
import { TaskList } from "./TaskList";

export type Tab = "all" | "todo" | "in-progress" | "done";
export type Task = {
	id: string;
	title: string;
	description: string;
	status: "todo" | "in-progress" | "done";
	createdAt: Date;
};

export type AddTaskParams = {
	title: string;
	description: string;
	status: Task["status"];
};

type TasksAction =
	| { type: "added"; task: Task }
	| { type: "changed"; task: Task }
	| { type: "deleted"; id: string }
	| { type: "tab_changed"; tab: "todo" | "in-progress" | "done" | "all" };

type TasksState = {
	tasks: Task[];
	activeTab: Tab;
};

const initialState: TasksState = {
	tasks: [],
	activeTab: "all",
};

const tasksReducer = (state: TasksState, action: TasksAction): TasksState => {
	switch (action.type) {
		case "added":
			return {
				...state,
				tasks: [...state.tasks, action.task],
			};
		case "deleted":
			return {
				...state,
				tasks: state.tasks.filter((task) => task.id !== action.id),
			};
		case "changed":
			return {
				...state,
				tasks: state.tasks.map((task) =>
					task.id === action.task.id ? action.task : task
				),
			};
		case "tab_changed":
			return {
				...state,
				activeTab: action.tab,
			};
		default:
			return state;
	}
};

export const TodoApp = () => {
	const [state, dispatch] = useReducer(tasksReducer, initialState);

	const visibleTasks =
		state.activeTab === "all"
			? state.tasks
			: state.tasks.filter((task) => task.status === state.activeTab);

	return (
		<TasksContext.Provider value={state}>
			<TasksDispatchContext.Provider value={dispatch}>
				<div className="max-w-4xl mx-auto">
					<h1 className="text-2xl font-bold text-center mb-6">Task Manager</h1>
					<div className="bg-white rounded-xl shadow-md overflow-hidden">
						<section className="p-6">
							<TaskForm />
							<section className="mt-8">
								<TabNavigation
									activeTab={state.activeTab}
									onTabChange={(tab) => dispatch({ type: "tab_changed", tab })}
								/>

								<TaskList tasks={visibleTasks} />
							</section>
						</section>
					</div>
				</div>
			</TasksDispatchContext.Provider>
		</TasksContext.Provider>
	);
};

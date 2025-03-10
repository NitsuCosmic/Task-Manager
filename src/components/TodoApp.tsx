import { useState } from "react";
import { TabNavigation } from "./TabNavigation";
import { TaskForm } from "./TaskForm";
import { TaskList } from "./TaskList";

export type Tab = "all" | "todo" | "in-progress" | "done";
export type Task = {
	id: string;
	title: string;
	description: string;
	status: "todo" | "in-progress" | "done";
	createdAt: Date;
};

export const TodoApp = () => {
	const [tab, setTab] = useState<Tab>("all");
	const [tasks, setTasks] = useState<Task[]>([
		{
			title: "task title",
			description: "description 1",
			status: "todo",
			id: "kdafjkfsdg",
			createdAt: new Date(),
		},
		{
			title: "task title 2",
			description: "task description 2",
			status: "todo",
			id: "kfdjasklghai",
			createdAt: new Date(),
		},
	]);

	const changeTab = (value: Tab) => {
		setTab(value);
	};

	return (
		<div className="max-w-4xl mx-auto">
			<h1 className="text-2xl font-bold text-center mb-6">Task Manager</h1>
			<div className="bg-white rounded-xl shadow-md overflow-hidden">
				<section className="p-6">
					<TaskForm />
					<section className="mt-8">
						<TabNavigation tab={tab} changeTab={changeTab} />

						<TaskList tasks={tasks} />
					</section>
				</section>
			</div>
		</div>
	);
};

import { useState } from "react";
import { TabNavigation } from "./TabNavigation";
import { TaskForm } from "./TaskForm";

export type Tab = "all" | "todo" | "in-progress" | "done";

export const TodoApp = () => {
	const [tab, setTab] = useState<Tab>("all");

	const changeTab = (value: Tab) => {
		setTab(value);
	};

	return (
		<div className="max-w-4xl mx-auto">
			<h1 className="text-2xl font-bold text-center mb-6">Task Manager</h1>
			<div className="bg-white rounded-xl shadow-md overflow-hidden">
				<section className="p-6">
					<TaskForm />
				</section>
				<section className="p-6">
					<TabNavigation tab={tab} changeTab={changeTab} />
				</section>
			</div>
		</div>
	);
};

import { Check, Clock, LayoutGrid, ListTodo } from "lucide-react";
import { Tab } from "./TodoApp";
import { Button } from "./ui/button";

type TabNavigationProps = {
	activeTab: string;
	onTabChange: (value: Tab) => void;
};

export const TabNavigation = ({
	activeTab,
	onTabChange,
}: TabNavigationProps) => {
	const handleClick = (value: Tab) => {
		onTabChange(value);
	};

	return (
		<div className="flex flex-wrap gap-2 mb-6">
			<Button
				className="cursor-pointer"
				variant={activeTab === "all" ? "default" : "outline"}
				onClick={() => handleClick("all")}
			>
				<LayoutGrid className="h-4 w-4 mr-2" />
				All
			</Button>
			<Button
				className="cursor-pointer"
				variant={activeTab === "todo" ? "default" : "outline"}
				onClick={() => handleClick("todo")}
			>
				<ListTodo className="h-4 w-4 mr-2" />
				Todo
			</Button>
			<Button
				className="cursor-pointer"
				variant={activeTab === "in-progress" ? "default" : "outline"}
				onClick={() => handleClick("in-progress")}
			>
				<Clock className="h-4 w-4 mr-2" />
				In Progress
			</Button>
			<Button
				className="cursor-pointer"
				variant={activeTab === "done" ? "default" : "outline"}
				onClick={() => handleClick("done")}
			>
				<Check className="h-4 w-4 mr-2" />
				Done
			</Button>
		</div>
	);
};

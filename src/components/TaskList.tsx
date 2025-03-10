import { TaskItem } from "./TaskItem";
import type { Task } from "./TodoApp";

type TaskListProps = {
	tasks: Task[];
};

export const TaskList = ({ tasks }: TaskListProps) => {
	if (tasks.length === 0) {
		return (
			<div className="py-12 text-center text-gray-500 dark:text-gray-400">
				No tasks found. Create a new task to get started.
			</div>
		);
	}

	return (
		<ul className="divide-y divide-gray-200">
			{tasks.map((task) => (
				<TaskItem key={task.id} task={task} />
			))}
		</ul>
	);
};

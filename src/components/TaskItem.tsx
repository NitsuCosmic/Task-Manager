import { useDispatchContext } from "@/hooks/useDispatchContext";
import { Check, Clock, ListTodo, PenIcon, Trash2 } from "lucide-react";
import { useState } from "react";
import TaskForm from "./TaskForm";
import { Task } from "./TodoApp";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "./ui/dropdown-menu";

type TaskItemProps = {
	task: Task;
};

export const TaskItem = ({ task }: TaskItemProps) => {
	const [isEditing, setIsEditing] = useState(false);
	const dispatch = useDispatchContext();

	const getStatusIcon = () => {
		switch (task.status) {
			case "todo":
				return <ListTodo className="h-4 w-4" />;
			case "in-progress":
				return <Clock className="h-4 w-4" />;
			case "done":
				return <Check className="h-4 w-4" />;
		}
	};

	const getStatusColor = () => {
		switch (task.status) {
			case "todo":
				return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
			case "in-progress":
				return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
			case "done":
				return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
		}
	};

	const handleDelete = () => {
		dispatch({
			type: "deleted",
			id: task.id,
		});
	};

	const handleStatusChange = (status: "todo" | "in-progress" | "done") => {
		dispatch({
			type: "changed",
			task: { ...task, status },
		});
	};

	if (isEditing) {
		return <TaskForm task={task} onCancel={() => setIsEditing(false)} />;
	}

	return (
		<li key={task.id} className="py-4">
			<div className="flex flex-col justify-between md:flex-row gap-2">
				<div>
					<h3 className="text-lg font-medium text-gray-900">{task.title}</h3>
					<p className="mt-1 text-gray-600 text-balance">
						{task.description || "No description."}
					</p>
					<div className="mt-2 flex items-center gap-2">
						<Badge variant="outline" className={getStatusColor()}>
							{getStatusIcon()}
							<span className="capitalize">{task.status}</span>
						</Badge>
						<span className="text-xs text-gray-500">
							Created: {task.createdAt.toLocaleDateString()}
						</span>
					</div>
				</div>
				<div className="flex flex-wrap md:flex-nowrap justify-end self-end gap-2 md:self-center">
					<Button
						variant={"outline"}
						size="sm"
						className="cursor-pointer"
						onClick={() => setIsEditing(!isEditing)}
					>
						<PenIcon className="mr-1" />
						Edit
					</Button>
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button variant="outline" size="sm" className="cursor-pointer">
								Status
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align="end">
							<DropdownMenuItem
								className="cursor-pointer"
								onClick={() => handleStatusChange("todo")}
							>
								<ListTodo />
								Todo
							</DropdownMenuItem>
							<DropdownMenuItem
								className="cursor-pointer"
								onClick={() => handleStatusChange("in-progress")}
							>
								<Clock />
								In progress
							</DropdownMenuItem>
							<DropdownMenuItem
								className="cursor-pointer"
								onClick={() => handleStatusChange("done")}
							>
								<Check />
								Done
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
					<Button
						variant={"destructive"}
						size="sm"
						className="cursor-pointer"
						onClick={handleDelete}
					>
						<Trash2 className="mr-1" />
						Delete
					</Button>
				</div>
			</div>
		</li>
	);
};

import { useDispatchContext } from "@/hooks/useDispatchContext";
import { PlusCircle, Save, X } from "lucide-react";
import { useState } from "react";
import { Task } from "./TodoApp";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";

type TaskFormProps = {
	task?: Task;
	onCancel?: () => void;
};

export default function TaskForm({ task, onCancel }: TaskFormProps) {
	const [title, setTitle] = useState(task?.title || "");
	const [description, setDescription] = useState(task?.description || "");
	const [status, setStatus] = useState<"todo" | "in-progress" | "done">(
		task?.status || "todo"
	);
	const dispatch = useDispatchContext();

	if (!dispatch) {
		throw new Error(
			"TaskForm must be used within a TasksDispatchContext provider"
		);
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		if (title.trim() === "") return;

		if (task) {
			dispatch({
				type: "changed",
				task: {
					...task,
					title,
					description,
					status,
				},
			});
		} else {
			dispatch({
				type: "added",
				task: {
					id: crypto.randomUUID(),
					title,
					description,
					status,
					createdAt: new Date(),
				},
			});
		}

		// Reset form if it's a new task
		if (!task) {
			setTitle("");
			setDescription("");
			setStatus("todo");
		}

		// Call onCancel if provided (for editing mode)
		if (onCancel) {
			onCancel();
		}
	};

	return (
		<form onSubmit={handleSubmit} className="space-y-4">
			<div className="space-y-2">
				<Input
					placeholder="Task title"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					required
					className="w-full"
				/>

				<Textarea
					placeholder="Task description"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
					className="w-full resize-none"
					rows={3}
				/>

				<Select
					value={status}
					onValueChange={(value) =>
						setStatus(value as "todo" | "in-progress" | "done")
					}
				>
					<SelectTrigger>
						<SelectValue placeholder="Select status" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="todo">Todo</SelectItem>
						<SelectItem value="in-progress">In Progress</SelectItem>
						<SelectItem value="done">Done</SelectItem>
					</SelectContent>
				</Select>
			</div>

			<div className="flex justify-end gap-2 mb-4">
				{onCancel && (
					<Button
						type="button"
						variant="outline"
						onClick={onCancel}
						className="cursor-pointer"
					>
						<X className="h-4 w-4 mr-1" />
						Cancel
					</Button>
				)}

				<Button
					type="submit"
					className="cursor-pointer"
					disabled={title ? false : true}
				>
					{task ? (
						<>
							<Save className="h-4 w-4 mr-1" />
							Update Task
						</>
					) : (
						<>
							<PlusCircle className="h-4 w-4 mr-1" />
							Add Task
						</>
					)}
				</Button>
			</div>
		</form>
	);
}

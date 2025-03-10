import { PlusCircle } from "lucide-react";
import { useState } from "react";
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

export const TaskForm = () => {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [status, setStatus] = useState<"todo" | "in-progress" | "done">("todo");
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
	};

	return (
		<form className="space-y-4" onSubmit={handleSubmit}>
			<div className="space-y-2">
				<Input
					placeholder="Task title"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<Textarea
					rows={3}
					className="resize-none"
					placeholder="Task description"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				/>
				<Select
					value={status}
					onValueChange={(value) =>
						setStatus(value as "todo" | "in-progress" | "done")
					}
				>
					<SelectTrigger className="w-full cursor-pointer">
						<SelectValue placeholder="Select status" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="todo" className="cursor-pointer">
							Todo
						</SelectItem>
						<SelectItem value="in-progress" className="cursor-pointer">
							In progress
						</SelectItem>
						<SelectItem value="done" className="cursor-pointer">
							Done
						</SelectItem>
					</SelectContent>
				</Select>
			</div>
			<div className="flex justify-end">
				<Button type="submit" className="cursor-pointer">
					<PlusCircle />
					Add task
				</Button>
			</div>
		</form>
	);
};

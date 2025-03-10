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
	return (
		<form className="space-y-4">
			<div className="space-y-2">
				<Input placeholder="Task title" />
				<Textarea
					rows={3}
					className="resize-none"
					placeholder="Task description"
				/>
				<Select>
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
		</form>
	);
};

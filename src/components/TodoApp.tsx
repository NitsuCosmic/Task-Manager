import { TaskForm } from "./TaskForm";

export const TodoApp = () => {
	return (
		<div className="max-w-4xl mx-auto">
			<h1 className="text-2xl font-bold text-center mb-6">Task Manager</h1>
			<div className="bg-white rounded-xl shadow-md overflow-hidden">
				<section className="p-6">
					<TaskForm />
				</section>
        
			</div>
		</div>
	);
};

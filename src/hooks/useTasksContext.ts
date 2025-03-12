
import { TasksContext } from "@/context/tasksContext"
import { useContext } from "react"
export const useTasksContext = () => {
  const tasksState = useContext(TasksContext)

  if (!tasksState) throw new Error("useTasksContext must be used within a TasksContextProvider")
  return tasksState
}

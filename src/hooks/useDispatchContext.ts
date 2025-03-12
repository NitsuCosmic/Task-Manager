
import { TasksDispatchContext } from "@/context/tasksContext"
import { useContext } from "react"
export const useDispatchContext = () => {
  const dispatchContext = useContext(TasksDispatchContext)

  if (!dispatchContext) throw new Error("useTasksContext must be used within a TasksContext provider")
  return dispatchContext
}

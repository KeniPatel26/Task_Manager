import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import {
  fetchTasks,
  addTask,
  toggleTask,
  deleteTask
} from '../api/tasks.api'

export const useTasks = () => {
  const queryClient = useQueryClient()

  const tasksQuery = useQuery({
    queryKey: ['tasks'],
    queryFn: fetchTasks
  })

  const addTaskMutation = useMutation({
    mutationFn: addTask,
    onSuccess: () => {
      queryClient.invalidateQueries(['tasks'])
    }
  })

  const toggleTaskMutation = useMutation({
    mutationFn: toggleTask,
    onSuccess: () => {
      queryClient.invalidateQueries(['tasks'])
    }
  })

  const deleteTaskMutation = useMutation({
    mutationFn: deleteTask,
    onSuccess: () => {
      queryClient.invalidateQueries(['tasks'])
    }
  })

  return {
    ...tasksQuery,
    addTask: addTaskMutation.mutate,
    toggleTask: toggleTaskMutation.mutate,
    deleteTask: deleteTaskMutation.mutate
  }
}

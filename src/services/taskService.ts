import axios from 'axios'
import type { NewTaskBody, Task, UpdatedTask } from '../types/task'

axios.defaults.baseURL = 'https://64689aefe99f0ba0a8286f54.mockapi.io'

export const getTasks = async (searchQuery: string) => {
  const res = await axios.get<Task[]>('/tasks', {
    params: {
      search: searchQuery,
      sortBy: 'createdAt',
      order: 'desc',
    },
  })
  return res.data
}

export const addNewTask = async (newTask: NewTaskBody) => {
  const res = await axios.post<Task>('/tasks', newTask)
  return res.data
}

export const deleteTask = async (taskId: string) => {
  const res = await axios.delete<Task>(`/tasks/${taskId}`)
  return res.data
}

export const updateTask = async (updatedTask: UpdatedTask) => {
  const res = await axios.put<Task>(`/tasks/${updatedTask.id}`, {
    completed: updatedTask.completed,
  })
  return res.data
}
// export const updateTask = async (completed: boolean, id: string) => {
//   const res = await axios.put<Task>(`/tasks/${id}`, {
//     completed,
//   })
//   return res.data
// }

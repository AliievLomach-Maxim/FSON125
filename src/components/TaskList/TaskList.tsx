import { useMutation, useQueryClient } from '@tanstack/react-query'
import type { Task, UpdatedTask } from '../../types/task'
import css from './TaskList.module.css'
import { deleteTask, updateTask } from '../../services/taskService'
import { useState } from 'react'

interface TaskListProps {
  tasks: Task[]
}

export default function TaskList({ tasks }: TaskListProps) {
  const [deletingId, setDeletingId] = useState<string | null>(null)

  const queryClient = useQueryClient()
  // deleteTask
  const mutationDelete = useMutation({
    mutationFn: (id: string) => deleteTask(id),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['tasks'] })
      setDeletingId(null)
    },
  })

  const handleDelete = (id: string) => {
    mutationDelete.mutate(id)
    setDeletingId(id)
  }

  const mutationUpdate = useMutation({
    mutationFn: (updatedTask: UpdatedTask) => updateTask(updatedTask),
    onSuccess: () => {
      // onSuccess: (newTask) => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] })
      // queryClient.setQueryData<Task[]>(['tasks'], (currentTasks) => {
      //   console.log('setQueryData')

      //   if (!currentTasks) return []

      //   return currentTasks.map((currentTask) =>
      //     currentTask.id === newTask.id ? newTask : currentTask,
      //   )
      // })
    },
  })

  // const [users, setUsers] = useState([])

  // const handleUpdateUser = (newUser: any) => {
  //   setUsers(users.map((user) => (user.id === newUser.id ? newUser : user)))
  // }

  const handleUpdate = (checked: boolean, id: string) => {
    mutationUpdate.mutate({
      completed: checked,
      id,
    })
  }

  return (
    <ul className={css.list}>
      {tasks.map((task) => (
        <li key={task.id} className={css.item}>
          <input
            type='checkbox'
            defaultChecked={task.completed}
            className={css.checkbox}
            onChange={(e) => handleUpdate(e.target.checked, task.id)}
          />
          <span className={css.text}>{task.text}</span>
          <button type='button' className={css.button} onClick={() => handleDelete(task.id)}>
            {/* <button type='button' className={css.button} onClick={() => mutation.mutate(task.id)}> */}
            {mutationDelete.isPending && task.id === deletingId ? 'Deleting...' : 'Delete'}
          </button>
        </li>
      ))}
    </ul>
  )
}

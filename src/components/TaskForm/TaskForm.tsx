import { useMutation, useQueryClient } from '@tanstack/react-query'
import css from './TaskForm.module.css'
import { addNewTask } from '../../services/taskService'
import type { NewTaskBody } from '../../types/task'

interface TaskFormProps {
  onClose: () => void
}

export default function TaskForm({ onClose }: TaskFormProps) {
  const queryClient = useQueryClient()

  const { mutate, isPending } = useMutation({
    mutationFn: (newTask: NewTaskBody) => addNewTask(newTask),
    onSuccess: async () => {
      console.log('onSuccess')
      await queryClient.invalidateQueries({ queryKey: ['tasks'] })
      onClose()
    },
    onError: () => {
      // tost
    },
  })

  const handleSubmit = (formData: FormData) => {
    console.log(formData.get('text') as string)
    mutate({
      text: formData.get('text') as string,
    })
  }

  return (
    <form className={css.form} action={handleSubmit}>
      <label className={css.label}>
        Task text
        <textarea name='text' className={css.input} rows={5}></textarea>
      </label>

      <button type='submit' className={css.button} disabled={isPending}>
        {isPending ? 'Creating...' : 'Create'}
      </button>
    </form>
  )
}

export interface Task {
  id: string
  text: string
  completed: boolean
}

export interface NewTaskBody {
  text: string
}

export interface UpdatedTask {
  id: string
  completed: boolean
}

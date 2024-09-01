export interface TodoResponse {
  id?: string
  description: string
  title: string
  updated_at: string
  created_at: string
  created_by: {
    id: string
    username: string
  }
}

export interface TodoSanity {
  description: string
  title: string,
  date: Date
}

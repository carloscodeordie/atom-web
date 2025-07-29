export type TaskStatus = 'Pending' | 'Completed';

export interface Task {
  id: string;
  name: string;
  description: string;
  creationDate: string;
  status: TaskStatus;
}

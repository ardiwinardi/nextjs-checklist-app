export interface Checklist {
  id: string;
  name: string;
  isDone: boolean;
  createdAt: Date;
  updatedAt?: Date;
}

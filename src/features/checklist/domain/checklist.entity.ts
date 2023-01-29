export interface Checklist {
  id: string;
  name: string;
  isDone: boolean;
  createdAt: Date | null;
  updatedAt: Date | null;
}

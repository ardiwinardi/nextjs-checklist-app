export interface ChecklistDTO {
  id?: string;
  name?: string;
  isDone?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface ChecklistCreateDTO {
  name: string;
}

export interface ChecklistUpdateDTO extends ChecklistCreateDTO {
  isDone: boolean;
}

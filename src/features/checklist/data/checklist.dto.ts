export interface ChecklistDTO {
  id?: string;
  name?: string;
  isDone?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ChecklistCreateDTO {
  name: string;
}

export interface ChecklistUpdateDTO extends ChecklistCreateDTO {
  isDone: boolean;
}

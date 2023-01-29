import { Checklist } from '../domain/checklist.entity';
import { ChecklistDTO } from './checklist.dto';

export const checklistDtoToEntity = (dto: ChecklistDTO): Checklist => {
  return {
    id: dto.id ?? '',
    name: dto.name ?? '',
    isDone: dto.isDone ?? false,
    createdAt: dto.createdAt ?? new Date(),
    updatedAt: dto.updatedAt ?? new Date(),
  };
};

import { stringToDate } from '@/shared/utils/date.util';
import { Checklist } from '../domain/checklist.entity';
import { ChecklistDTO } from './checklist.dto';

export const checklistDtoToEntity = (dto: ChecklistDTO): Checklist => {
  return {
    id: dto.id ?? '',
    name: dto.name ?? '',
    isDone: dto.isDone ?? false,
    createdAt: stringToDate(dto.createdAt),
    updatedAt: stringToDate(dto.createdAt),
  };
};

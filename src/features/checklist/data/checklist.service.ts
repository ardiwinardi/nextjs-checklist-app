import api from '@/shared/data/network/axios';
import { ResponseDTO } from '@/shared/data/network/response.dto';
import { Checklist } from '../domain/checklist.entity';
import ChecklistRepository from '../domain/checklist.repository';
import {
  ChecklistCreateDTO,
  ChecklistDTO,
  ChecklistUpdateDTO,
} from './checklist.dto';
import { checklistDtoToEntity } from './checklist.mapper';

class ChecklistService implements ChecklistRepository {
  async getAll(): Promise<Checklist[]> {
    const response = await api.get<ResponseDTO<ChecklistDTO[]>>('/checklist');
    const {
      data: { data },
    } = response;

    return data.map((dto) => checklistDtoToEntity(dto));
  }

  async create(item: Checklist): Promise<void> {
    const payload: ChecklistCreateDTO = {
      name: item.name,
    };
    await api.post<void>(`/checklist`, payload);
  }

  async update(item: Checklist): Promise<void> {
    const payload: ChecklistUpdateDTO = {
      name: item.name,
      isDone: item.isDone,
    };
    await api.put<void>(`/checklist/${item.id}`, payload);
  }

  async delete(item: Checklist): Promise<void> {
    await api.delete<void>(`/checklist/${item.id}`);
  }
}

const checklistService = new ChecklistService();
export default checklistService;

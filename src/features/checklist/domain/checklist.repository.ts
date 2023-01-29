import BaseRepository from '@/shared/domain/base.respository';
import { Checklist } from './checklist.entity';

type ChecklistRepository = Omit<BaseRepository<Checklist>, 'getById'>;
export default ChecklistRepository;

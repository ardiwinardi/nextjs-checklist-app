import { cookieKeys } from '@/shared/data/constants/cookie.constant';
import Cookies from 'cookies';
import { v4 as uuidv4 } from 'uuid';
import { Checklist } from '../domain/checklist.entity';

export default class ChecklistCookieModel {
  constructor(private cookies: Cookies) {}

  getAll(): Checklist[] {
    const data = this.cookies.get(cookieKeys.CHECKLIST_ITEMS);
    let checklist: Checklist[] = [];
    if (data) {
      try {
        checklist = JSON.parse(data);
        if (!Array.isArray(checklist)) throw new Error();
      } catch (e) {
        this.cookies.set(cookieKeys.CHECKLIST_ITEMS, '[]');
      }
    }
    return checklist;
  }

  create(item: Partial<Checklist>): void {
    const checklist = this.getAll();
    this.cookies.set(
      cookieKeys.CHECKLIST_ITEMS,
      JSON.stringify([
        ...checklist,
        {
          id: uuidv4(),
          name: item.name,
          createdAt: item.createdAt,
          isDone: false,
        },
      ])
    );
  }

  findByIdAndUpdate(id: string, item: Checklist): void {
    const checklist = this.getAll();

    const findIndex = checklist.findIndex((item) => item.id === id);
    if (findIndex >= 0) {
      if (item.isDone !== undefined) checklist[findIndex].isDone = item.isDone;
      if (item.name) checklist[findIndex].name = item.name;
      checklist[findIndex].updatedAt = new Date();
    }

    this.cookies.set(cookieKeys.CHECKLIST_ITEMS, JSON.stringify(checklist));
  }

  findByIdAndDelete(id: string): void {
    const checklist = this.getAll();

    const findIndex = checklist.findIndex((item) => item.id === id);
    if (findIndex >= 0) {
      checklist.splice(findIndex, 1);
    }

    this.cookies.set(cookieKeys.CHECKLIST_ITEMS, JSON.stringify(checklist));
  }
}

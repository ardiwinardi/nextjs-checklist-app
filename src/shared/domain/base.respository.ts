export default interface BaseRepository<T> {
  getAll(item: T): Promise<T[]>;
  getById(id: string): Promise<T>;
  create(item: T): Promise<void>;
  update(item: T): Promise<void>;
  delete(item: T): Promise<void>;
}

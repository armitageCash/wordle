import localStorageService from "../services/Storage";

abstract class Repository<T> {
  db: localStorageService;

  constructor() {
    this.db = new localStorageService();
  }

  abstract find(key: string): T | null;
  abstract create(data: T): T;
  abstract update(data: T): T;
  abstract remove(key: string): void;
}

export default Repository;

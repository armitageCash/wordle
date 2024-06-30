class LocalStorageService {
  save<T>(key: string, value: T): void {
    const jsonValue = JSON.stringify(value);
    window.localStorage.setItem(key, jsonValue);
  }

  get<T>(key: string): T | null {
    const jsonValue = window.localStorage.getItem(key);
    if (!jsonValue) {
      return null;
    }
    try {
      return JSON.parse(jsonValue) as T;
    } catch (e) {
      console.error(
        `Error parsing JSON from localStorage for key "${key}":`,
        e,
      );
      return null;
    }
  }

  update<T>(key: string, value: Partial<T>): void {
    const currentValue = this.get<T>(key);
    if (!currentValue) {
      console.warn(`No existing value for key "${key}" to update.`);
      return;
    }
    const updatedValue = { ...currentValue, ...value };
    this.save(key, updatedValue);
  }

  remoce(key: string): void {
    window.localStorage.removeItem(key);
  }
}

export default LocalStorageService;

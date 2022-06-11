import { IDataCollection, IItem, IDataItem, ID } from './types';
import { getUnique } from '../utils';

class DataCollection implements IDataCollection {
  private elements: IDataItem[] = [];

  parse(object: IItem[]): ID[] {
    this.elements = [];
    return this.add(object) as ID[];
  }

  clear(): void {
    this.elements = [];
  }

  add(object: IItem | IItem[]): ID | ID[] {
    if (Array.isArray(object)) {
      return object.map((el: IItem) => this.add(el)) as ID[];
    } else {
      const id = object.id || getUnique();
      this.elements.push({ id, ...object });
      return id;
    }
  }

  get(id: ID) {
    return this.elements.find((el: IDataItem) => el.id === id);
  }

  getAll() {
    return this.elements;
  }
}

export const dataCollection = new DataCollection();

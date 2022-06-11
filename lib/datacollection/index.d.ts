import { IDataCollection, IItem, IDataItem, ID } from './types';
declare class DataCollection implements IDataCollection {
    private elements;
    parse(object: IItem[]): ID[];
    clear(): void;
    add(object: IItem | IItem[]): ID | ID[];
    get(id: ID): IDataItem | undefined;
    getAll(): IDataItem[];
}
export declare const dataCollection: DataCollection;
export {};

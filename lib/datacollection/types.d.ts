export declare type ID = string | number;
export declare type IItem = {
    id?: ID;
    [index: string]: unknown;
};
export interface IDataItem extends IItem {
    id: ID;
}
export interface IDataCollection {
    parse: (object: IItem[]) => ID[];
    clear: () => void;
    add: (object: IItem | IItem[]) => ID | ID[];
    get: (id: ID) => IDataItem | undefined;
    getAll: () => IDataItem[];
}

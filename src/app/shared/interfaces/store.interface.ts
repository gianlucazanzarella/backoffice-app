export interface IStore {
  id: string;
  data: IStoreData;
}

export interface IStoreData {
  name: string;
  category: string;
  employees: string[];
}
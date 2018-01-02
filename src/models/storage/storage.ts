export interface IStorage {
    key: string;
    value: string;
    set: Promise<string>;
    get: Promise<string>;
    ready: Promise<boolean>;
}

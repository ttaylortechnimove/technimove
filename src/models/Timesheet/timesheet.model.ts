export interface ITimesheet {
    start: string;
    end: string;
    break?: number;
    overnight?: boolean;
    cc?: boolean;
}

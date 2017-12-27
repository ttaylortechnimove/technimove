export interface Timesheet {
    start:string;
    end:string;
    break?:number;
    overnight?:boolean;
    cc?:boolean;
}
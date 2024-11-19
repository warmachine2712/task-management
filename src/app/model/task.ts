import { subTask } from "./subTask";

export interface Itask {
    id: number
    priority: string;
    date: Date;
    name: String;
    deadline: Date;
    progress: number,
    status: String,
    subTasks: subTask[];
}
export class Task {
    id: number;
    priority: string;
    date: Date;
    name: String;
    deadline: Date;
    progress: number;
    status: String;
    subTasks: subTask[];

    constructor() {
        this.priority = '';
        this.date = new Date();
        this.name = '';
        this.deadline = new Date();
        this.progress = 0,
            this.status = '',
            this.subTasks = [];
        this.id = 0;
    }
}
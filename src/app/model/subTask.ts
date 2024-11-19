export interface IsubTask {
    id: Number;
    priority: string;
    date: Date;
    name: String;
    deadline: Date;
    progress: Number,
    status: String,
    mainTask: Number
}


export class subTask {
    priority: string;
    date: Date;
    name: String;
    deadline: Date;
    progress: Number;
    status: String;
    mainTask: Number

    constructor() {
        this.priority = '';
        this.date = new Date();
        this.name = '';
        this.deadline = new Date();
        this.progress = 0,
            this.status = '',
            this.mainTask = 0
    }
}
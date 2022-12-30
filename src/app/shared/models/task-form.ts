export class TaskForm {
    public taskId: number;
    public taskImage: string;
    public taskTag: string[];
    public taskTitle: string;
    public taskDescription: string;
    public taskFormType: string;
    public taskStartDate: Date;
    public taskEndDate: Date;
    constructor(
        taskId: number,
        taskImage: string,
        taskTag: string[],
        taskTitle: string,
        taskDescription: string,
        taskFormType: string,
        taskStartDate: Date,
        taskEndDate: Date
    ){
        this.taskId = taskId;
        this.taskImage = taskImage;
        this.taskTag = taskTag;
        this.taskTitle = taskTitle;
        this.taskDescription = taskDescription;
        this.taskFormType = taskFormType;
        this.taskEndDate = taskEndDate
        this.taskStartDate = taskStartDate
        this.taskEndDate = taskEndDate
    }
}

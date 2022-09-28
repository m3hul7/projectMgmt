export class NewProject {
    public id: number;
    public projectName: string;
    public projectDescription: string;
    public projectManager: string;
    public projectStartDate: string;
    public projectEstimatedEndDate: string;
    public category: string;
    public billingType: string;
    public projectStatus: string;
    constructor(
        id:number,
        projectName: string,
        projectDescription: string,
        projectManager: string,
        projectStartDate: string,
        projectEstimatedEndDate: string,
        category: string,
        billingType: string,
        projectStatus: string
    ){
        this.id = id;
        this.projectName = projectName;
        this.projectDescription = projectDescription;
        this.projectManager = projectManager;
        this.projectStartDate = projectStartDate;
        this.projectEstimatedEndDate = projectEstimatedEndDate;
        this.category = category;
        this.billingType = billingType;
        this.projectStatus = projectStatus;
    }
}

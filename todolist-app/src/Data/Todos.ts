export interface Todos {
    id: number,
    title: string,
    description: string,
    status: string

}
export const todos: Todos[] = [
    { id: 1 , title : "play sports" , description: "regular sports routine to stay active" , status: "completed" },
    { id: 2 , title : "Do Housework" , description: "tidy up the house by completing essential chores",status: "pending" },
    { id: 3 , title : "Projects Coding" , description: "update and test projects in the resume" , status: "completed"},
    ];
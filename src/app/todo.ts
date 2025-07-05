export class ToDo{
    constructor(
       public sno: number,
       public title: string,
       public desc: string,
       public active: boolean,
       public category: string = 'Personal',
       public _id?: string 
    ){}
}
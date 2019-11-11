export class Recipe{
    public name: string;
    public description: string;
    public imaggePath: string;

    constructor(name:string, description: string, imagePath:string){
        this.name = name;
        this.description = description;
        this.imaggePath = imagePath;
    }
}
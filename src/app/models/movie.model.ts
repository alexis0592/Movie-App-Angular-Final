export class Movie{   
         
    public _id: string;
    public title: string;
    public resume: string;
    public format: string;
    public country: string;
    public duration: number;
    public __v: number;
    public created_at: Date;
    public characters: string[];
    public imagePath:string;

constructor(title:string, 
    resume: string, 
    format: string, 
    country: string, 
    duration: number,
    characters: string[],
    imagePath:string){
    
        this.title = title;
        this.resume = resume;
        this.format = format;
        this.country = country;
        this.duration = duration;
        this.characters = characters;
        this.imagePath = imagePath;
}

}
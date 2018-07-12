export class Project {
    public name: string;
    public image : string;
    public link : string;

    constructor(name: string, img: string, url: string) {
        this.name = name;
        this.image = img;
        this.link = url;
    }
}
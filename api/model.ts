export class Project {
    private _id: string;
    private _name: string;
    private _category: string;
    private _devs: Array<string>

    public constructor(id: string, name: string, category: string, devs: Array<string>) {
        this._id = id;
        this._name = name;
        this._category = category;
        this._devs = devs;
    }

    public get id(){
        return this._id;
    }

    public get name(){
        return this._name;
    }

    public get category(){
        return this._category;
    }

    public get devs(){
        return this._devs;
    }

    public set id(id: string){
        this._id = id;
    }

    public set name(name: string){
        this._name = name;
    }

    public set category(category: string){
        this._category = category;
    }

    public set devs(devs: Array<string>){
        this._devs = devs;
    }
}
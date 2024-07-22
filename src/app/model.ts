import { CoreItem } from "./coreitem";

export class Model{
    name:string;
    items: CoreItem[];

    constructor(){
        this.name = 'Berkay Core';
        this.items = [];
    }
}


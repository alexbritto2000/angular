export class custObservable{


    subscribers = [];

    constructor(sub:any){}
    subscribe(method:any){
        this.subscribers.push(method);
    }
    next(value){
        this.subscribers.forEach(x)
    }
}
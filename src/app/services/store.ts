import { Observable } from 'rxjs/Observable';
import { IData } from '../interfaces/IData';
import { Db } from './dataService';

export class Store<D extends IData> {

    provider: Db<D>;

    constructor(private name: string) {
        this.provider = new Db(name);
    }

    add(data: D): Observable<D> {
        data._id = Guid.newGuid();
        return this.provider.add(data);
    }

    get(id: string): Observable<D> {
        return this.provider.get(id);
    }    

    update(data: D): Observable<boolean> {
        return this.provider.update(data);
    }

    delete(data: D): Observable<boolean> {
        return this.provider.delete(data);
    }

}

class Guid {
    static newGuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
            return v.toString(16);
        });
    }
}
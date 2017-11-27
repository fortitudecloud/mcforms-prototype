import { Injectable } from '@angular/core';
import * as nodeDb from 'node-json-db';
import { Observable } from 'rxjs';

import { IJsonDB } from '../interfaces/IJsonDb';
import { IData } from '../interfaces/IData';

export class Db<D extends IData> {
    _db: IJsonDB;

    constructor(private name: string) {
        this._db = new nodeDb('data', true, true);
    }

    add(data: D): Observable<D> {
        return new Observable<D>(ob => {
            let path = "/" + this.name + '/' + data._id;
            this._db.push(path, data);
            ob.next(data);
            ob.complete();
        });
    }

    get(id: string): Observable<D> {
        return new Observable<D>(ob => {
            let path = "/" + this.name + '/' + id;
            var data = this._db.getData(path);
            if(data) ob.next(data);
            else ob.error();
            ob.complete();
        });
    }

    update(data: D): Observable<boolean> {
        return new Observable<boolean>(ob => {
            let path = "/" + this.name + '/' + data._id;
            this._db.push(path, data, true);
            ob.next(true);
            ob.complete();
        });
    }

    delete(data: D): Observable<boolean> {
        return new Observable<boolean>(ob => {
            let path = "/" + this.name + '/' + data._id;
            this._db.delete(path);
            ob.next(true);
            ob.complete();
        });
    }

}
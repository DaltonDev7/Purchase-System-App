import { Observable } from "rxjs";

export interface IBaseServices<T> {
    add(dto: T): Observable<any>;
    edit(dto: T): Observable<any>;
    list(): Observable<any>;
    delete(id: number): Observable<any>;
    getById(id: number): Observable<any>;
}
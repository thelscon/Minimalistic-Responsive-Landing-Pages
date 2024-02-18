import { Observable } from "rxjs";

export interface WindowServiceModel {
    width : number
    readonly resize : Observable<Event>
}
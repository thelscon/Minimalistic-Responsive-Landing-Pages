import { Observable } from "rxjs";

export interface WindowServiceModel {
    readonly resize : Observable<Event>
}
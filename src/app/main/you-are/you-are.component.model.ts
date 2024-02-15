import { WindowService } from "../../services/window/window.service";

export interface YouAreComponentModel {
    readonly windowService : WindowService
    windowSize : number
}
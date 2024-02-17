import { WindowService } from "../../services/window/window.service";

import { YouAreService } from "../../services/you-are/you-are.service";

export interface YouAreComponentModel {
    readonly windowService : WindowService
    windowSize : number

    readonly youAreService : YouAreService
}
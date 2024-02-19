import { WindowService } from "../../services/window/window.service";

import { YouAreService } from "../../services/you-are/you-are.service";

export interface YouAreComponentModel {
    readonly title : string
    readonly figureContent : string

    readonly windowSize : number
}
import { WellbeingService } from "../../services/wellbeing/wellbeing.service"
import { WindowService } from "../../services/window/window.service"

export interface WellbeingComponentModel {
    readonly title : string
    readonly spaceTitle : string
    readonly content : string

    readonly windowWidth : number
    finalTitle : string
    readonly changeTitle : () => string
}
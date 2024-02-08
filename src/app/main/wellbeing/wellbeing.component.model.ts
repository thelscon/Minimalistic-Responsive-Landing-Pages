import { WellbeingService } from "../../services/wellbeing/wellbeing.service"
import { WindowService } from "../../services/window/window.service"

export interface WellbeingComponentModel {
    readonly wellbeingService : WellbeingService
    readonly windowService : WindowService
    windowWidth : number
    title : string
    readonly changeTitle : () => string
}
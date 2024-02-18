import { WindowService } from "../../services/window/window.service"

export interface StartsComponentModel {
    readonly windowService : WindowService
    readonly getTitle : () => string

    readonly newLineStartingWithSpace : (value : string) => string
}
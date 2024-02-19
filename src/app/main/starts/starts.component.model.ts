import { WindowService } from "../../services/window/window.service"

export interface StartsComponentModel {
    readonly spaceTitle : string
    readonly title : string
    readonly content : string
    readonly buttonText : string
    readonly plantTitle : string
    readonly pathToImage :  string
    
    readonly windowWidth : number
    readonly getTitle : () => string
    readonly newLineStartingWithSpace : (value : string) => string
}
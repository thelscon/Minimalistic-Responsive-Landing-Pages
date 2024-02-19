import { TheDawnService } from "../../services/the-dawn/the-dawn.service"

export interface TheDawnComponentModel {
    readonly title : string
    readonly content : string
    readonly buttonText : string
    readonly pathToFirstImage : string
    readonly pathToSecondImage : string
}
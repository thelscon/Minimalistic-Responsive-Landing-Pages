import { LogotypeEnum } from "../services/logotype/logotype.service.model"
import { NavigationItems } from "../services/navigation/navigation.service.model"

export interface FooterComponentModel {
    readonly navigationItems : NavigationItems[]
    readonly logotypeName : LogotypeEnum.Name
}
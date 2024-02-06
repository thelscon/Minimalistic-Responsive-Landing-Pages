import { NavigationItems } from "../../services/navigation/navigation.service.model"

export interface MenuComponentModel {
    buttonMenuState : boolean
    navigationState : boolean
    navigationItems : NavigationItems[]
}
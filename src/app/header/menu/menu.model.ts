import { NavigationItems } from "../../services/navigation/navigation.model"

export interface MenuComponentModel {
    buttonMenuState : boolean
    navigationState : boolean
    navigationItems : NavigationItems[]
}
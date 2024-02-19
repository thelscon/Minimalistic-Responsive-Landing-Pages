import { NavigationItems } from "../../services/navigation/navigation.service.model"

export interface MenuComponentModel {
    menuButtonVisibility : boolean
    navigationVisibility : boolean
    navigationItems : NavigationItems[]
}
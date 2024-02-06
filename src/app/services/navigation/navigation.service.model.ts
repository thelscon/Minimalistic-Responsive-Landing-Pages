export const enum NavigationItems {
    ABOUT = 'About' ,
    SERVICES = 'Services' ,
    TEAM = 'Team' ,
    CONTACT = 'Contact'
}

export interface NavigationServiceModel {
    items : NavigationItems[]
}
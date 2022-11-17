export class BurgerService {
    
    isBurgerOpen = false

    burgerToggle() {
        this.isBurgerOpen = !this.isBurgerOpen
    }
}
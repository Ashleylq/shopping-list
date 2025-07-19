import './App.module.css'
import { Shop } from './Shop/Shop.jsx'

export function App(){
    return(
        <>
            <nav>
                <h1>ElectroStop</h1>
                <p>Shop!</p>
                <p>Your Cart</p>
            </nav>
            <Shop />
        </>
    )
}
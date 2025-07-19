import styles from './Shop.module.css'
import { useState, useEffect } from 'react'

function ItemCard({name, img}){
    return(
        <div className={styles.itemCard}>
            <img src={img}
            height="200px"/>
            <p>{name}</p>
        </div>
    )
}

export function Shop(){
    const [shopItems, setShopItems] = useState([]);
    const [err, setErr] = useState('');
    useEffect(() => {
        async function fetchItems(){
        try {
            const res = await fetch("https://fakestoreapi.com/products/category/electronics");
            if(!res.ok){
                setErr("Hmm.. there seems to be an error, please try again later.");
                return;
            }
            const items = await res.json();
            let arr = [];
            for(let item of items){
                arr.push({
                    id : crypto.randomUUID(),
                    name : item.title,
                    description : item.description,
                    img : item.image
                })
            };
            setShopItems(arr);
            setErr("");
        } catch(error){
            setErr("UHHHH... WELP ITS AN ERROR")
}}
            fetchItems();
    }, []);
    /*useEffect(()=>{
        alert(shopItems[0]);
    }, [shopItems])*/
    /*return(
        <div>
            {shopItems.map((item, i) => {
                    return (<ItemCard key={i} name={item.title} img={item.image} />)
                    return (<p>Hi</p>)
             })}
             Hello
        </div>
    )*/
    if(shopItems.length === 0){
        return <p>Loading...</p>
    }
    return(
        <div className={styles.itemContainer}>
            {shopItems.map((item) => {
                return <ItemCard name={item.name} img={item.img}/>
            })}
        </div>);
}
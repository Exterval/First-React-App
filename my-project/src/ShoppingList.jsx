import { useState } from "react"

export default function Component() {

    const [items, setItems] = useState([{name: "Milk", quantity: 4}, {name: "Eggs", quantity: 1}]);
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(0);

    /*function handleSetItems(){
        setItems(items)
    }*/

    function handleSetCurrentItem(){
        const newItem = {name: name, quantity: quantity}
        setItems(i => [...i, newItem])
    }

    function handleRemoveItem(index){
        setItems(i => i.filter((_, ind) => index !== ind))
    }

    function handleSetName(event){
        setName(event.target.value)
    }

    function handleSetQuantity(event){
        setQuantity(event.target.value)
    }

    function handleIncrementQuantity(index){
         setItems(items.map((item,ind)=> ind === index ? {...item, quantity: item.quantity + 1} : item))
    }

    function handleDecrementQuantity(index){
         setItems(items.map((item,ind)=> ind === index ? {...item, quantity: item.quantity - 1} : item))
    }

    return(
        <div className="container">
            <h1>My Shopping List</h1>
            <div className="paperUI">
                <h2>List of Things to Buy: </h2>
                <ul>
                    {items.map((elem, ind)=>
                    <li key={`${ind}-${elem}`}>{elem.name} {elem.quantity} 
                    <button onClick={()=>handleIncrementQuantity(ind)}>+</button>
                    <button onClick={()=>handleDecrementQuantity(ind)}>-</button> 
                    <button onClick={()=>handleRemoveItem(ind)}>Remove</button></li>
                    )}
                </ul>
            </div>
            <input type="text" value={name} onChange={handleSetName} placeholder="Enter product name..." required/>
            <input type="number" value={quantity} onChange={handleSetQuantity} placeholder="Enter product name..." required/>
            <button onClick={handleSetCurrentItem}>Add</button>
        </div>
    )
};

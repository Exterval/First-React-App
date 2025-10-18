import { useState } from "react"

export default function Component() {

    const [items, setItems] = useState([{name: "Milk", quantity: 4}, {name: "Eggs", quantity: 1}]);
    const [currentItem, setCurrentItem] = useState({});
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
    //DEBUG
    function handleIncrementQuantity(){
        setQuantity(q => q + 1);
    }

    function handleDecrementQuantity(){
        setQuantity(q => q - 1);
    }
    //DEBUG
    
    return(
        <div className="container">
            <h1>My Shopping List</h1>
            <div className="paperUI">
                <h2>List of Things to Buy: </h2>
                <ul>
                    {items.map((elem, ind)=>
                    <li key={`${ind}-${elem}`}>{elem.name} {elem.quantity} 
                    <button onClick={handleIncrementQuantity}>+</button>
                    <button onClick={handleDecrementQuantity}>-</button> 
                    <button onClick={()=>handleRemoveItem(ind)}>Remove</button></li>
                    )}
                </ul>
            </div>
            <input type="text" value={name} onChange={handleSetName} placeholder="Enter product name..."/>
            <input type="number" value={quantity} onChange={handleSetQuantity} placeholder="Enter product name..."/>
            <button onClick={handleSetCurrentItem}>Add</button>
        </div>
    )
};

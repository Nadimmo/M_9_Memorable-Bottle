/* eslint-disable no-undef */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import { useEffect } from "react"
import { useState } from "react"
import Bottal from "./Bottal"
import './Bottals.css'
import { saveToLS,getLocatStorage, removeToLs } from "../utilitis/locatStrorage"
import Cart from "../Cart/Cart"
export default function Bottals(){
    const [bottles, setBottles] = useState([])
    const [addCount, setAddCount] = useState([])

    useEffect(()=>{
        fetch('Bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    },[])

    useEffect(()=>{
        if(bottles.length > 0){
            const storedCart = getLocatStorage()
            // console.log(storedCart)

        const saveCart = []
        for(let id of storedCart ){
            // console.log(id)
            const bottle = bottles.find(bottle => bottle.id === id)
            if(bottle){
                saveCart.push(bottle)
            }
        }
        setAddCount(saveCart)


        }
        
    },[bottles])

    const hadlerCount = (count)=>{
        // console.log('btn click')
        const newArray = [...addCount, count]
        setAddCount(newArray)
        saveToLS(count.id)
    }

    const hadlerRemoveFromCart = (id)=>{
        const remainingCart = addCount.filter(bottals => bottals.id !== id)
        setAddCount(remainingCart)
        removeToLs(id)
    }
    return (
        <div>
            <h2>Bottle Length: {bottles.length} </h2>
             <Cart addCount = {addCount} hadlerRemoveFromCart={hadlerRemoveFromCart}></Cart>
            <ul>
               <b>Selected Item</b> 
                {
                    addCount.map(bottle => <li style={{listStyle:"none"}}> {bottle.name}</li>)
                }
            </ul>
            <div className="bottleContainer">
                {
                    bottles.map(bottle => <Bottal key={bottles.id} hadlerCount={hadlerCount} bottle= {bottle} ></Bottal>)
                }
            </div>
        </div>
    )
}
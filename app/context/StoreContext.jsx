"use client"

import { useContext,createContext,useEffect,useState, } from "react";
  
const StoreContext = createContext(null)
export function StoreProvider({children}){

const[cart,setcart]=useState([])
const[isproducts,setisproduct]=useState([])
const[isquery,setisquary]=useState("")
const[orders,setorders]=useState([])
const[hydrate,sethydrate]=useState(false)

useEffect(()=>{
    async function initStore() {
        try{
      const res = await fetch("/api/products")
      if(res.ok){
        const data = await res.json()
        setisproduct(Array.isArray(data) ? data:[]) 
      }
        }catch (err){
  console.log("failed to fetch products",err)
        }

        try{
        const savedcart = localStorage.getItem("apple-cart")
        const savedorder = localStorage.getItem("apple-order")
         if(savedcart) setcart(JSON.parse(savedcart))
             if(savedorder) setorders(JSON.parse(savedorder))
        }catch (err){
    console.log("Storage failed:",err)
        }
sethydrate(true)
    }
    initStore()
},[])

useEffect(()=>{
if(!hydrate)return
localStorage.setItem("apple-cart",JSON.stringify(cart))
},[cart,hydrate])

useEffect(()=>{
if(!hydrate)return
localStorage.setItem("apple-order",JSON.stringify(orders))
},[orders,hydrate])

const AddtoCart =(product,selectedColor )=>{
    if(!product?.id )return
    const cartkey =`${product.id}::${selectedColor}`
    setcart((prev)=>{
  const existing =prev.find((item)=> item.cartkey === cartkey)
  if(existing){
    return prev.map((item)=> item.cartkey === cartkey ? {...item, quantity: item.quantity + 1}:item )
  }

  return [
    ...prev,
    {id:product.id,
        cartkey,
     name:product.name,
     price:product.price,
     category:product.category,
     image:product.image,
     selectedColor,
     quantity:1,


    }

  ]
  
    })
    return true
}
const updateQuantity = (delta,cartkey)=>{
setcart((prev) => {
 return prev.map((item)=> item.cartkey === cartkey ? {...item,quantity : item.quantity + delta} : item)

.filter((item) => item.quantity > 0)
}
)
}
const  totalItems = cart.reduce((sum,item) => sum +(item.quality || 1),0 )
const removeCart =(cartkey)=>{
    setcart((prev)=> prev.filter((item) => item.cartkey !== cartkey))
}


const placeOrder=()=>{
    if(cart.length === 0)return null;
    const total = cart.reduce((sum,item) => sum + item.price * item.quantity,0)
    const newOrder ={
        orderId:`ORD-${Date.now().toString().slice(-6)}`,
        createdAt:new Date().toLocaleString(),
        items:cart,
        total,
    }
    setorders((prev)=>[newOrder, ...prev])
    setcart([])
    return newOrder
}
const cartCount = cart.reduce((sum,item) => sum + item.quantity, 0);
const cartTotal = cart.reduce((sum,item) => sum + item.price * item.quantity, 0);

return(
    <StoreContext
value={{
    isproducts,
    cart,
    cartCount,
    updateQuantity,
    cartTotal,
    AddtoCart,
    removeCart,
    orders,
    placeOrder,
    totalItems,


}}
>
    {children}
    </StoreContext>
)
}

const FallBackStore ={
    cart:[],
    isproducts:[],
    cartCount:0,
    cartTotal:0,
    AddtoCart:()=>{},
    updateQuantity:()=>{},
    removeCart:()=>{},
    orders:[],
    placeOrder:()=>{},
    totalItems:0,
}

export const useStore = ()=> useContext(StoreContext)?? FallBackStore
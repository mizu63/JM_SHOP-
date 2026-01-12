import React,{createContext, useState} from 'react'
 let ProductProvider = createContext()
function CardContext({children}) {
   let [cardlist,setCardlist]=useState([])
   let Card={cardlist,setCardlist}
  return (
    <ProductProvider.Provider value={Card}>
      {children}
    </ProductProvider.Provider>
  )
}
export {ProductProvider}
export default CardContext

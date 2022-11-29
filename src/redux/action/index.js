// for add item to card 

export const addCard =(product) =>{
  
  return{  type :"ADDCARD",
    payload : product }

}

// for delete item to card 

export const delCard =(product) =>{
  
    return{  type :"DELITEM",
      payload : product }
      
  }
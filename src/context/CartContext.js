import { createContext, useState } from "react"

export const CartContext = createContext();


export const CartProvider = ({ children }) => {

  const [carrito, setCarrito] = useState([]);
  console.log(carrito);


  const addToCard = (item) => {
    setCarrito([...carrito, item])

  }

  const removeItem = (itemId) => {
    const newCart = carrito.filter((i) => i.id !== itemId)
    setCarrito(newCart)
  }

  const calcularCantidad = () => {
    return carrito.reduce((a, pro) => a + pro.cantidad, 0)
  }

  const calcularTotal = () => {
    return carrito.reduce((acc, prod) => acc + prod.cantidad * prod.price, 0)
  }

  const subTotal = () => {
    return carrito.reduce((prod) => prod.price * prod.cantidad, 0)
  }

  const isInCart = (itemId) => {
    return carrito.some((pro) => pro.id === itemId)
  }


  const clear = () => {
    setCarrito([]);
  }
  return (
    <CartContext.Provider value={{
      carrito,
      addToCard,
      removeItem,
      calcularCantidad,
      clear,
      isInCart,
      calcularTotal,
      subTotal
    }}>
      {children}
    </CartContext.Provider>
  )
}
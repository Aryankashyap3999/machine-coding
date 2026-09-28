import { useState } from 'react'
import PRODUCTS from './products.json'
import './App.css'

function App() {
  
  const [cart, setCart] = useState({});
  
  const addToCart = (id) => {
    setCart((c) => ({ ...c, [id]: (c[id] || 0) + 1 }))
  }

  const removeFromCart = (id) => {
    setCart((c) => {
      const next = {...c}
      delete next[id]
      return next;
    })
  }

  const changeQty = (id, qty) => {
    if (qty <= 0) return removeFromCart(id)
    setCart((c) => ( {...c, [id]: qty}))
  }

  const total = Object.entries(cart).reduce((sum, [id, qty]) => {
    const product = PRODUCTS.find((p) => p.id === Number(id));
    return sum + product.price * qty;
  }, 0)

   return (
    <div>
      <h1>Shopping Cart</h1>

      <h2>Products</h2>
      <ul>
        {PRODUCTS.map((p) => (
          <li key={p.id}>
            {p.name} - ${p.price.toFixed(2)}{' '}
            <button onClick={() => addToCart(p.id)}>Add</button>
          </li>
        ))}
      </ul>

      <h2>Cart</h2>
      {Object.keys(cart).length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <ul>
          {Object.entries(cart).map(([id, qty]) => {
            const product = PRODUCTS.find((p) => p.id === Number(id))
            return (
              <li key={id}>
                {product.name} - ${product.price.toFixed(2)} x{' '}
                <input
                  type="number"
                  min="0"
                  value={qty}
                  onChange={(e) => changeQty(Number(id), Number(e.target.value))}
                  style={{ width: '3em' }}
                />{' '}
                = ${(product.price * qty).toFixed(2)}{' '}
                <button onClick={() => removeFromCart(id)}>Remove</button>
              </li>
            )
          })}
        </ul>
      )}

      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  )
  
  
}

export default App

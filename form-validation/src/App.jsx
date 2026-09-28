import { useState } from 'react'
import './App.css'

function App() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    const valid = e.target.checkValidity()
    setSubmitted(valid)
    if (valid) e.target.reset()
  }

  return (
    <form className="form" onSubmit={handleSubmit} noValidate={false}>
      <label>
        Name
        <input name="name" required minLength={2} />
      </label>

      <label>
        Email
        <input name="email" type="email" required />
      </label>

      <label>
        Password
        <input name="password" type="password" required minLength={8} />
      </label>

      <button type="submit">Submit</button>

      {submitted && <p className="success">Form is valid!</p>}
    </form>
  )
}

export default App

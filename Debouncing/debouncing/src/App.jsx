
// import { useEffect, useState } from 'react'
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  // const [query, setQuery] = useState('')
  // const [debouncedQuery, setDebouncedQuery] = useState('')

  // useEffect(() => {
  //   const timer = setTimeout(() => setDebouncedQuery(query), 500)
  //   return () => clearTimeout(timer)
  // }, [query])

  // useEffect(() => {
  //   if (!debouncedQuery) return
  //   // this only fires 500ms after the user stops typing
  //   console.log('searching for:', debouncedQuery)
  // }, [debouncedQuery])

  // return (
  //   <div>
  //     <h1>Debouncing</h1>
  //     <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Type to search..." />
  //     <p>Debounced value: {debouncedQuery}</p>
  //   </div>
  // )

  const [value, setValue] = useState('');
  const [debounceValue, setDebounceValue] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => setDebounceValue(value), 1000);
    return () => clearTimeout(timer);
  }, [value]);

  useEffect(() => {
    if(!debounceValue) return;

    console.log('searching for:', debounceValue)

  }, [debounceValue])

  return (
    <div>
      <h1>Debouncing</h1>
      <input type="text"  value={value} onChange={(e) => setValue(e.target.value)} placeholder='Enter you text...'/>
      <p>Debounced value: {debounceValue}</p>
    </div>
  )
}

export default App

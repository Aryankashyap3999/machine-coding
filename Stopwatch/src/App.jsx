// import { useEffect, useRef, useState } from 'react'
import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  // const [ms, setMs] = useState(0)
  // const [running, setRunning] = useState(false)
  // const startRef = useRef(0)

  // useEffect(() => {
  //   if (!running) return
  //   startRef.current = Date.now() - ms
  //   const id = setInterval(() => setMs(Date.now() - startRef.current), 10)
  //   return () => clearInterval(id)
  //   // eslint-disable-next-line react-hooks/exhaustive-deps -- ponytail: ms excluded deliberately, adding it would restart the interval every tick
  // }, [running])

  // const format = (t) => {
  //   const m = String(Math.floor(t / 60000)).padStart(2, '0')
  //   const s = String(Math.floor((t % 60000) / 1000)).padStart(2, '0')
  //   const cs = String(Math.floor((t % 1000) / 10)).padStart(2, '0')
  //   return `${m}:${s}.${cs}`
  // }

  // return (
  //   <div>
  //     <h1>Stopwatch</h1>
  //     <h2>{format(ms)}</h2>
  //     <button onClick={() => setRunning((r) => !r)}>{running ? 'Pause' : 'Start'}</button>
  //     <button onClick={() => { setRunning(false); setMs(0) }}>Reset</button>
  //   </div>
  // )

  const [running, setRunning] = useState(false);
  const [ms, setMs] = useState(0);
  const startRef = useRef(0);

  useEffect(() => {
    if(!running) return;
    startRef.current = Date.now() -  ms;
    const id = setInterval(() => setMs(Date.now() - startRef.current), 10);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- ponytail: ms excluded deliberately, adding it would restart the interval every tick
  }, [running]);

  function format (t) {
    const m = String(Math.floor(t / 60000)).padStart(2, '0');
    const s = String(Math.floor((t % 60000) /1000)).padStart(2, '0');
    const cs = String(Math.floor((t % 1000) / 10)).padStart(2, '0');
    return `${m}:${s}:${cs}`;
  }


  return (
    <div>
      <h1>Stopwatch</h1>
      <h1>{format(ms)}</h1>
      <button onClick={() => setRunning((r) => !r)}>{running ? "stop" : "start"}</button>
      <button onClick={() => { setRunning(false); setMs(0) }}>reset</button>
    </div>
  )
}

export default App

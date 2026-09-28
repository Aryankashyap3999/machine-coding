// import { useState } from 'react'
import { useState } from 'react';
import './App.css'

// const ITEMS = Array.from({ length: 53 }, (_, i) => `Item ${i + 1}`)
// const PAGE_SIZE = 5

const ITEMS = Array.from({ length: 53 }, (_, i) => `Item ${i+1}`);
const PAGE_LENGTH = 5;

function App() {
  // const [page, setPage] = useState(1)
  // const totalPages = Math.ceil(ITEMS.length / PAGE_SIZE)
  // const start = (page - 1) * PAGE_SIZE

  // return (
  //   <div>
  //     <h1>Pagination</h1>
  //     <ul>
  //       {ITEMS.slice(start, start + PAGE_SIZE).map((item) => (
  //         <li key={item}>{item}</li>
  //       ))}
  //     </ul>
  //     <div className="pagination">
  //       <button disabled={page === 1} onClick={() => setPage((p) => p - 1)}>
  //         Prev
  //       </button>
  //       {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
  //         <button
  //           key={n}
  //           className={n === page ? 'active' : ''}
  //           onClick={() => setPage(n)}
  //         >
  //           {n}
  //         </button>
  //       ))}
  //       <button disabled={page === totalPages} onClick={() => setPage((p) => p + 1)}>
  //         Next
  //       </button>
  //     </div>
  //   </div>
  // )

  const [page, setPage] = useState(1);
  const total_pages = Math.ceil(ITEMS.length / PAGE_LENGTH);
  const start = (page - 1) * PAGE_LENGTH;

  return (
    <div>
      <h1>Pagination</h1>
      <ul>
        {ITEMS.slice(start, start + PAGE_LENGTH).map((ele) => (
        <li key={ele}>{ele}</li>
      ))}
      </ul>
      <div className="pagination">
        <button disabled={page === 1 ? true : false} onClick={() => setPage((p) => p-1)}>prev</button>
        {Array.from({ length: total_pages }, (_, i) => i+1).map((ele) => (
          <button key={ele} className={ele === page ? 'active' : ''} onClick={() => setPage(ele)}>
            {ele}
          </button>
        ))}
        <button disabled={page === total_pages} onClick={() => setPage((p) => p + 1)}>
         Next
        </button>
      </div>
    </div>
  )
}

export default App

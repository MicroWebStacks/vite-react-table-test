import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from "@/components/ui/button"
import { Payment, columns } from "@/components/columns";
import { DataTable } from "@/components/data-table";


async function getData(): Promise<Payment[]> {
	// Fetch data from your API here.
	return [
		{
			id: "728ed52f",
			amount: 99,
			status: "pending",
			email: "m@example.com",
		},
		{
			id: "728ed52sf",
			amount: 101,
			status: "pending",
			email: "m@example.com",
		},
		{
			id: "728234fed52f",
			amount: 80,
			status: "pending",
			email: "m@example.com",
		},
	];
}

const data = await getData();

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Button>Click me test ui components</Button>
        <DataTable columns={columns} data={data} />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

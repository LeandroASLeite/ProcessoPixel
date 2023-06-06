import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <header>
          <label class='flex justify-center bg-slate-600 text-white'>Busca de gateways por ID</label>
        </header>
        <main class='w-90 h-screen bg-slate-400'>

          <div class="flex justify-center items-center h-screen">
            <form class="bg-slate-900 p-8 rounded shadow-lg flex flex-col">
              <label class='text-white mb-5 '> Insira o ID do Gateway</label>
              <input type="text" class='mb-3' />
              <button class='text-white bg-zinc-700 rounded-2xl hover:' > buscar</button>
            </form>
          </div>


        </main>
        <footer>

        </footer>
      </div>
    </>

  )
}

export default App

import './App.css'
import { RiSearchLine } from "react-icons/ri";


function App() {


  return (
    <>
      <div class=' font-sans text-lg font-semibold text-slate-500'>
        <header>
          <label class='flex justify-center bg-slate-600 text-white'>Busca de gateways por ID</label>
        </header>
        <main class=' bg-slate-400'>

          <div class="flex justify-center  items-center h-screen ">
            <form class="bg-slate-900 p-8 rounded shadow-lg flex flex-col items-center">
              <label class='text-white mb-5 flex justify-center'> Insira o ID do Gateway</label>
              <input required type="text" placeholder='  .  .  .' class='mb-3 mr-3 rounded-2xl ml-3' />
              <button class=' text-white max-h-max bg-zinc-700 rounded-2xl hover:bg-slate-800 flex items-center' >  Buscar  <RiSearchLine class='ml-2' /></button>
            </form>
          </div>


        </main>

      </div>
    </>

  )
}

export default App

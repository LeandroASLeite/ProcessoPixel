import React, { useState } from 'react';
import gtwsData from './gtws.json';
import { AiOutlineSearch } from "react-icons/ai";



const FormularioBusca = () => {
  const [id, setId] = useState('');
  const [resultado, setResultado] = useState(null);

  const buscarInformacoes = () => {
    const gateway = gtwsData.gateways.find(gateway => gateway._id === id);
    if (gateway) {
      setResultado(gateway);
    } else {
      setResultado(null);
      alert('ID não encontrado!');
    }
  };

  return (
    <div class='font-sans text-lg font-semibold text-slate-500'>
      <header>
        <label class='flex justify-center bg-slate-600 text-white'>Busca de gateways por ID</label>
      </header>
      <main class=' bg-slate-400 '>
        <div class="flex justify-center  items-center h-screen flex-col">
          <div class="bg-slate-900 p-8 rounded shadow-lg flex flex-col items-center">
            <label class='text-white mb-5 flex justify-center'> Insira o ID do Gateway</label>
            <input class='mb-3 mr-3 rounded-2xl ml-3' type="text" value={id} onChange={event => setId(event.target.value)} placeholder="Digite o ID" />
            <button class=' text-white max-h-max bg-zinc-700 rounded-2xl
               hover:bg-slate-800 flex items-center' onClick={buscarInformacoes}>Buscar<AiOutlineSearch class='ml-2' /></button>
          </div>
          <div>
            {resultado && (
              <div class="bg-slate-800 text-white mt-10 p-8 rounded shadow-lg flex flex-col items-center">
                <p>Gateway ID: {resultado._id}</p>
                <p>Name: {resultado.name}</p>
                {resultado.devices.map(device => (
                  <div key={device._device}>
                    <p>Device ID: {device._device}</p>
                    <p>Model ID: {device.modelId}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default FormularioBusca;

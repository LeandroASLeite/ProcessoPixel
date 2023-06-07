import React, { useState } from 'react';

const FormularioBusca = () => {
    const [id, setId] = useState('');
    const [resultado, setResultado] = useState(null);

    const buscarInformacoes = () => {
        // Faz a requisição assíncrona para o arquivo JSON ou API
        // Substitua a URL pela rota da sua API ou pelo caminho para o arquivo JSON
        fetch('gtws.json')
            .then(response => response.json())
            .then(data => {
                if (data.hasOwnProperty(id)) {
                    const info = data[id];
                    setResultado(info);
                } else {
                    setResultado(null);
                    alert('ID não encontrado!');
                }
            })
            .catch(error => {
                console.error('Ocorreu um erro:', error);
            });
    };

    return (
        <div>
            <input type="text" value={id} onChange={event => setId(event.target.value)} placeholder="Digite o ID" />
            <button onClick={buscarInformacoes}>Buscar</button>

            {resultado && (
                <div>
                    <p>Nome: {resultado.nome}</p>
                    <p>Idade: {resultado.idade}</p>
                    <p>Email: {resultado.email}</p>
                </div>
            )}
        </div>
    );
};

export default FormularioBusca;

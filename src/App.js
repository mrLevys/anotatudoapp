import React, {useEffect, useState} from 'react';
import './style.css';

// https://sujeitoprogramador.com/rn-api/?api=posts


function App() {

  const [nutri, setNutri] = useState([]);

  useEffect(() =>{
    
    function loadApi() {
      let urlApi = 'https://sujeitoprogramador.com/rn-api/?api=posts';

      fetch(urlApi)
      .then(response => response.json())
      .then((data) => {
        // console.log(data);
        setNutri(data)
      });

    }

    loadApi();

  }, []);


  return (
    <div className="container">
      <header>
        <strong>React Nutri</strong>
      </header>
      {nutri.map((item) => {
        return (
          <article key={item.id} className="post">
            <strong className='titulo'>{item.titulo}</strong>
            <img src={item.capa} alt={item.titulo} />
            <p className='subtitulo'>{item.subtitulo}</p>
            <a className='botao' href='#'>Acessar</a>
          </article>)
      })}
    </div>
  );
}

export default App;

import './favoritos.css'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Favoritos(){
    
    const [filmes,setFilmes] = useState([])
    
    useEffect(()=>{ 
        const minhaLista = localStorage.getItem('_FILMARIA')
        setFilmes(JSON.parse(minhaLista) || [])
    },[])


    function excluir(){
        // localStorage.removeItem('_FILMARIA')
    }

    return(
        <div className='meus-filmes'>
            <h2>Meus filmes</h2>

            <ul>
                {filmes.map((filme) =>{
                    return(
                        <li key={filme.id}>
                            <strong>{filme.nome}</strong>
                            <Link to={`/filmes/${filme.id}`}>ver detalhes</Link>
                            <button className='btn' onClick={excluir}>excluir</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
} 
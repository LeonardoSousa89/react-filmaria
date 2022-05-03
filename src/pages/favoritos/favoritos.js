import './favoritos.css'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Favoritos(){
    
    const [filmes,setFilmes] = useState([])
    
    useEffect(()=>{ 
        const minhaLista = localStorage.getItem('_FILMARIA')
        setFilmes(JSON.parse(minhaLista) || [])
    },[])


    function excluirFilme(filmeId){
        let filtroFilmes = filmes.filter((item)=>{
            return (item.id !== filmeId) 
        })

        setFilmes(filtroFilmes)
        localStorage.setItem('_FILMARIA',JSON.stringify(filtroFilmes))
    }

    return(
        <div className='meus-filmes'>
            <h2>Meus filmes</h2>

            {filmes.length === 0 && <span>Você nãp possui nenhum filme cadastrado!   :(</span>}

            <ul>
                {filmes.map((filme) =>{
                    return(
                        <li key={filme.id}>
                            <strong>{filme.nome}</strong>
                            <Link to={`/filmes/${filme.id}`}>ver detalhes</Link>
                            <button className='btn' onClick={() => excluirFilme(filme.id)}>excluir</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
} 
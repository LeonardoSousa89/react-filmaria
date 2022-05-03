import './filme-info.css'
import { useEffect, useState } from 'react' 
import { useParams } from 'react-router-dom'
import api from '../../services/api'


export default function Filme(){
    
    const { id } = useParams() 
    const [filme, setFilme] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        async function loadFilme(){
            const response = await api.get(`r-api/?api=filmes/${id}`)
            setFilme(response.data)
            setLoading(false)
        }

        loadFilme() 

    },[])

    if(loading){
        return(
            <div>
                <strong>Carregando a página...</strong>
            </div>
        )
    }

    function salvarFilme(){
        const minhaLista = localStorage.getItem('_FILMARIA')

        let filmeSalvos  = JSON.parse(minhaLista) || [] 

        const hasFilme = filmeSalvos.some((filmeSalvo) => filmeSalvo.id === filme.id)

        if(hasFilme){
            alert('Este filme já encontra-se na lista de filmes salvos.')
            return
        }

        filmeSalvos.push(filme)
        localStorage.setItem('_FILMARIA', JSON.stringify(filmeSalvos))
        alert('Filme salvo com sucesso.')
    }

    return(
        <div className='lista-filme'>
            <article>
                <strong>{filme.nome}</strong>
                <img src={filme.foto} alt={filme.nome} />
                <p>{filme.sinopse}</p>
                <div className='area-buttons'>
                    <button className='salvar' onClick={salvarFilme}>salvar</button>
                    <button className='trailer'>
                        <a  href={`https://youtube.com/results?search_query=${filme.nome} trailer`} 
                            target='_blank'
                            rel='external'>
                            trailer
                        </a>
                    </button>
                </div>
            </article>
        </div>
    )
}
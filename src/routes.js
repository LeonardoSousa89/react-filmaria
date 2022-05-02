import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/home/home'
import Header from './components/header/header'
import Filme from './pages/filme/filme'
import Erro from './pages/erro/erro'

const Routing = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route exact path='/'element={<Home/>}/>
                <Route exact path='/filmes/:id' element={<Filme/>}/>
                <Route exact path='*' element={<Erro/>}/>
            </Routes>
        </BrowserRouter>
    )  
}

export default Routing
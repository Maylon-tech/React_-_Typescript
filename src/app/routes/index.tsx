import { BrowserRouter, Routes, Route, Redirect } from "react-router-dom"
import About from "../pages/About"
import Dashboard from "../pages/dashboard/Dashboard"



export const Routers = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <h1>Hello World 2023</h1> } />

                <Route path="/pagina-inicial" element={ <Dashboard /> } />

                <Route path="/about" element={ <About /> } />

                <Route path="*" element={() => <Redirect to="/pagina-inicial" /> } />
            </Routes>
        </BrowserRouter>
    )
}
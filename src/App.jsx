import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../components/Navbar"
import { Home } from "../routes/Home"
import { About } from "../routes/About"
import { Contact } from "../routes/Contact"
import { UsuarioProvider } from "../context/UsuarioProvider"
import { Login } from "../routes/Login"

export const App = () => {
  return (
    <UsuarioProvider>
        <Navbar></Navbar>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/about" element={<About></About>}></Route>
            <Route path="/contact" element={<Contact></Contact>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/*" element={<Navigate to='/' />}></Route>
        </Routes>
    </UsuarioProvider>
  )
}

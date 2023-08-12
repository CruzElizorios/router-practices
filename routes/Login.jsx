import { useContext } from "react"
import { useForm } from "../Hooks/useForm"
import { UsuarioContext } from "../context/UsuarioContext"

export const Login = () => {

    const initialForn ={
        nombre: '',
        tecnologia: '',
        email: '',
        redes:''
    }

    const {formState, nombre, tecnologia, email, redes, cuandoCambiaInput} = useForm(initialForn)
    const { setUsuario } = useContext( UsuarioContext)

    const onSubmit = (e) =>{
        e.preventDefault()
        setUsuario(formState)
    }

    return (
        <>
            <form className="container" onSubmit={onSubmit}>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre:</label>
                    <input type="text" className="form-control" name="nombre" value={nombre}  onChange={cuandoCambiaInput}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="tecnologia" className="form-label">Tecnologia:</label>
                    <input type="text" className="form-control" name="tecnologia" value={tecnologia}  onChange={cuandoCambiaInput} />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input type="email" className="form-control" name="email" value={email}  onChange={cuandoCambiaInput}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="redes" className="form-label">Redes:</label>
                    <input type="text" className="form-control" name="redes" value={redes}  onChange={cuandoCambiaInput}/>
                </div>
                <button type="submit" className="btn btn-primary">Registrar Usuario</button>
            </form>
        </>
    )
}

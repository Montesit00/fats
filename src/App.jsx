/*Paginas*/
import { useReducer } from "react";
import { AuthContext } from "./context/AuthContext";
import AuthReducer from "./reducers/authReducer";
import Rutas from "./Routes/Rutas"
function App() {

  const Logeado = () => {
    return JSON.parse(localStorage.getItem('token')) || [];
  };

  const { user , dispatch } = useReducer(AuthReducer,[],Logeado)

  return (
    <>
      <AuthContext.Provider value={{
      user,
      dispatch
    }}>
    
      <Rutas/>
    
    </AuthContext.Provider>
    </>
  )
}

export default App

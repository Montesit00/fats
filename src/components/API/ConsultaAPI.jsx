import axios from "axios"; 
//biblioteca de cliente HTTP que le permite realizar solicitudes a un endpoint determinado
//creo una const de la url de nuestra api.
const baseUrl = "http://localhost:5000/login";

//Creamos la funcion de login
const buscador = async credentials => {
    const { data } = await axios.post(baseUrl, credentials)
    return data
}
export default  {buscador};
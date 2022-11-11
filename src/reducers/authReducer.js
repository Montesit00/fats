import { type } from "../types/Types"

const AuthReducer = (state, action) =>{

    switch (action.types) {
        case type.login:
            return{
                isLogged: true,
                ...action.payload
            }
        case type.logout:
            return {
                isLogged:false,
            }

        default:
            return state;
    }
}

export default AuthReducer
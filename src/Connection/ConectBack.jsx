import React from "react";

const connectBack = async () => {
        try {
            const resp = await fetch('http://localhost:5000/registro')
            const resjson = await resp.json()
    
            console.log(resjson)
    
        } catch (error) {
            console.log('Hubo un problema', error)
        }
    }

export default connectBack
import React, { useState } from 'react'
import UserContext from './context'

function ContextWrapper({children}) {
    const [value,setValue]= useState([])
    return (
        <UserContext.Provider 
        value={[value,setValue]}
        >
            {children}

        </UserContext.Provider>
    )
}

export default ContextWrapper

import React from 'react'
import practice from '../content/config.json'

const Practice = () => {
    const x =practice.footer.coppy.replace("'year'",new Date().getFullYear())
    console.log(x)
    return (
        <div>
            
        </div>
    )
}

export default Practice

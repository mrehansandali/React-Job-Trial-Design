import React from 'react'
import "./hexagon.css"


function Hexagon({ heading, para, style }) {
    return (
        <>
            <div className='hexagon p-[50px]' style={style}>
                <h1>{heading}</h1>
                <p>{para}</p>
            </div>
        </>
    )
}


export default Hexagon
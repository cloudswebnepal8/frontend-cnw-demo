import React from 'react'

function Student({ name, age }) {
    return (
        <div>
            {/* props with destructuring  */}
            <h1>Name:{name}</h1>
            <h1>Age:{age}</h1>
        </div>
    )
}

export default Student
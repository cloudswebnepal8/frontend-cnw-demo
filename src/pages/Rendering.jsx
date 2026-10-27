import React from 'react'

function Rendering() {
    const isLoggedIn = true
    return (
        <div>
            {
                isLoggedIn && <h1>Welcome user </h1>
            }

        </div>
    )
}

export default Rendering
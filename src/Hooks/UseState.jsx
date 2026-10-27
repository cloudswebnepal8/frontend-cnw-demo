import React, { useState } from 'react'

function UseState() {
    // syntax 
    // const [state, setState] = useState(initialState) 
    // count =0
    //setcount-function to update the state

    const [count, setCount] = useState(0)  //count=0
    return (
        <div>
            <h1>Count : {count}</h1>

            <button onClick={() => setCount(count + 1)}>Increase</button>

        </div>
    )
}

export default UseState 
import React, {useState} from 'react';
import {flushSync} from "react-dom";

const BatchingExample = () => {
    const [state, setState] = useState(0)
    const [value, setValue] = useState(0)

    console.log('RENDER')

    // const update = () => {
    //     setTimeout(() => {
    //         setState(prev => prev + 1)
    //         setValue(prev => prev + 1)
    //     }, 300)
    // }

    // const update = () => {
    //     Promise.resolve()
    //         .then(()=>{
    //             setState(prev => prev + 1)
    //             setValue(prev => prev + 1)
    //         })
    // }

    const update = () => {
        Promise.resolve()
            .then(() => {

                flushSync(() => {
                    setState(prev => prev + 1)
                })

                flushSync(() => {
                    setValue(prev => prev + 1)
                })
            })
    }

    return (
        <div>
            <h1>value = {state}</h1>
            <h1>value = {value}</h1>
            <button onClick={update}>UPDATE</button>
        </div>
    );
};

export default BatchingExample;
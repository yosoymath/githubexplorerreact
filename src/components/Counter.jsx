import { useState } from 'react';

export function Counter(){

    const [counter, setCounter] = useState(0);

    //* A expressão "setCounter" vai dar a possibilidade
    // de alterar o valor da primeira variável definida "counter".

    function increment(){
        setCounter(counter + 1);
    }

    return(
        <div>
            <h2>{counter}</h2>

            <button type="button" onClick={increment}>
                Increment
            </button>
        </div>
    );
}
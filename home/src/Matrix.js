import React, {useState} from 'react';
import matrixes from './data/matrix';
import { useDynamicTransition } from './hooks';

const minDelay = 10;
const minIncrement = 1;

function Matrix () {
    const [delay, setDelay] = useState(500);
    const [increment, setIncrement] = useState(5);

    const index = useDynamicTransition({
        delay, increment, length: matrixes.length
    })

    const  updateDelay = (event) => {
        const delay = Number(event.target.value);
        setDelay(delay < minDelay ? minDelay : delay);
    }

    const updateIncrement = (event) => {
        const increment = Number(event.target.value);
        setIncrement(increment < minIncrement ? minIncrement : increment);

    }

    return(
        <div className="Matrix">
            <img 
                src={matrixes[index]}
                alt="FEIL"
            />
            <div className="multiform">
                <div>
                Matrix transition delay (milliseconds):
                <input type="number" onChange={updateDelay}/>
                </div>
                <div>
                Matrix increment:
                <input type="number" onChange={updateIncrement}/>
                </div>

            </div>
        </div>
    )
}

export default Matrix
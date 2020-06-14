import React,{useState} from 'react';
export let UserInput = () => {
    let [data,update_data] = useState(''); 
    const count1 = 0;

    return(
        <div onSubmit={(e) => e.preventDefault()}>
            <form>
                <p>Value = <b>{data}</b></p>
                <button onClick={() => update_data(++data)}>Add</button>
                <button onClick={() => update_data(count1)}>Reset</button>                
            </form>
        </div>
    )
};
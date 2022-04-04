import React from 'react';
import data from './Data/data.json';

const Main = () => {

    return (
<>
        <div className="container">
{ data.map(item=>
    <section>
        <h3>{item.text}</h3>
        <div className='card-body'>
            <div>{item.image}</div>
            <div>{item.post}</div>
            <div>{item.tag}</div>
        </div>
    </section>)}
        </div>
        </>
    )

}

 
export default Main
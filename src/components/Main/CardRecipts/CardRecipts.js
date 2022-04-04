import React from "react";
import data from '../Data/data.json';
const CardRecipts = () => {

return (
    <div className="card" style={{ width: '35rem' }} >
        <img src={data.image} width={400} height={350} className="img-fluid rounded-start" alt="img" /> 
        <div className="card-body">
          <h5 className="card-title">{data.post}</h5>
         
          <div>{data.text}</div>
            <div className="tag">#{data.tags}</div>
          
           </div>
      </div>
)

}

export default CardRecipts
import { useState } from "react";
import "./RestrauntCard.css";

export default function RestrauntCard({ data }) {
  return (
    <>
     <div className='items'> 
     <div className="container">
        {data.map((x) => {
          return (
            <div className="card">
              <div className="tittle">
                <h2>{x.name}</h2>
                <h4>{x.type}</h4>
              </div>
              <img src={x.img} />

              <div className="description">{x.description}</div>
              <button> Order Now</button>
            </div>
          );
        })}
      </div>
     </div>
    </>
  );
}

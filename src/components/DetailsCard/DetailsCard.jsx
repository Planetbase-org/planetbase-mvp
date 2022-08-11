import "./DetailsCard.css";

import React from 'react'

function DetailsCard({ header, description, img }) {
    return (
        <div className="card">
            <div className="card-img">
                <img src={img} alt={img} />
            </div>
            <div className="card-details">
                <h5 className="card-title">{header}</h5>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default DetailsCard
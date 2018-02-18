import React from 'react'

const HomeCard = (props) => {

    return (
       
            <div className="col-12 col-sm-4 ">
                <div className="card" style={{ width: '18rem' }} >
                    <img className="card-img-top" src="img/card.png" alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.text}</p>
                        <a href="" className="btn btn-primary" onClick= {props.action}>Acompanhar</a>
                    </div>
                </div>
            </div>
        
    )

}

export default HomeCard
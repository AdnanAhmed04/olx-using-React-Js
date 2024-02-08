import React from 'react'
import './card.css'


function Car(props) {
    return (
        <div className='main'>
            <img className='card-img' src="https://images.pexels.com/photos/119435/pexels-photo-119435.jpeg?auto=compress&cs=tinysrgb&w=700"></img>
            <p className='card-para' >{props.price}</p>
            <p className='card-para' >Make - {props.make}</p>

            <p className='card-para'>Model - {props.description}</p>
            <p className='card-para'>City - {props.city}</p>
        </div>
    )
}

export default Car

import React from 'react'
import './card.css'


function Mobile(props) {
    return (
        <div className='main'>
            <img className='card-img' src="https://assets.hardwarezone.com/img/2022/09/iphone14-pro-vs-iphone13-pro.jpg"></img>
            <p className='card-para' >{props.price}</p>
            <p className='card-para' >{props.title}</p>

            <p className='card-para'>{props.description}</p>
            <p className='card-para'>City - {props.city}</p>
        </div>
    )
}

export default Mobile


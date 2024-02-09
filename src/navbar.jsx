import React from 'react'
import './nav.css'
function Navbar() {
    return (
        <div>
            <div className='sticky'>


                <div className='row'>
                    <img className='img1' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcrxoepm50zPgZpzg9potX1xHw-J1_hf10jz9LSytCyR_azEc_WbgqYDbjLNsRw39633o&usqp=CAU" alt='image'></img>
                    <p>MOTORS</p>
                    <p>PROPERTY</p>

                </div>
                <div className='row'>
                    <img className='img2' src='data:image/png;base64,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'></img>
                    <input className='inpt1' placeholder=" Karachi , Sindh" />
                    <input className='inpt2' placeholder="Find Cars , Mobile Phones and More . . . . ." />
                    <div className=' space'>
                        <img className='img3' src='https://www.olx.com.pk/assets/iconChat_noinline.31f5df4a6a21fc770ed6863958662677.svg'></img>
                        <img className='img4' src='https://www.olx.com.pk/assets/iconNotifications_noinline.4444f6b42acbe30d772d80ef1225f574.svg'></img>

                        <img className='img5' src='https://www.olx.com.pk/assets/iconProfilePicture.7975761176487dc62e25536d9a36a61d.png'></img>
                        <p className='downarrow'>V</p>
                        <button><b><span className='sign'>+</span>SELL</b></button>
                    </div>
                </div>
            </div>
            <div className='row '>
                <p><b>All categories</b></p>
                <p>Mobile Phones</p>
                <p>Cars</p>
                <p>Motorcycles</p>
                <p>Houses</p>
                <p>Video-Audios</p>
                <p>Tablets</p>
                <p>Land & Plots</p>
            </div>
            <hr></hr>
        </div>
    )
}
export default Navbar

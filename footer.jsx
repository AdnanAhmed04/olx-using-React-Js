import React from 'react'
import './footer.css'



function Footer() {

    return (
        <div className='footer-main-div'>
            <div className='list-in-row'>
                <div>
                    <h2>POPULAR CATEGORIES</h2>
                    <ul>
                        <li>Car</li>
                        <li>Flat for Rent</li>
                        <li>Mobile Phone</li>
                        <li>Jobs</li>
                    </ul>
                </div>
                <div>
                    <h2>TRENDING SEARCHES</h2>
                    <ul>
                        <li>Bikes</li>
                        <li>Watches</li>
                        <li>Books</li>
                        <li>Dogs</li>
                    </ul>
                </div>
                <div>
                    <h2>ABOUT US</h2>
                    <ul>
                        <li>About Dubizzle Group</li>
                        <li>OLX Blog</li>
                        <li>Contact Us</li>
                        <li>OLX for Businesses</li>
                    </ul>
                </div>
                <div>
                    <h2>POPULAR CATEGORIES</h2>
                    <ul>
                        <li>Help</li>
                        <li>Sitemap</li>
                        <li>Terms of use</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div>
                    <div>
                        <h2>FOLLOW US</h2>
                        <img className='logo-div' src="https://www.olx.com.pk/assets/iconTwitter_noinline.6037fa7d9a7b9d6408fb1b3d70524b97.svg" alt="" srcset="" />

                        <img className='logo-div' src="https://www.olx.com.pk/assets/iconFacebook_noinline.773db88c5b9ee5aaab365e61cdb750da.svg" alt="" srcset="" />

                        <img className='logo-div' src="https://www.olx.com.pk/assets/iconYoutube_noinline.c85bd6801ec83d6a3b498059550bef26.svg" alt="" srcset="" />

                        <img className='logo-div' src="https://www.olx.com.pk/assets/iconInstagram_noinline.d7d5811ebc44e03a674c8d0b5ff3f232.svg" alt="" srcset="" />
                    </div>

                    <div className='applebtn-row'>
                        <img className='app-img' src='https://www.olx.com.pk/assets/iconAppStoreEN_noinline.a731d99c8218d6faa0e83a6d038d08e8.svg'></img>
                        <img className='app-img' src='https://www.olx.com.pk/assets/iconGooglePlayEN_noinline.9892833785b26dd5896b7c70b089f684.svg'></img>
                        <img className='app-img' src='https://www.olx.com.pk/assets/iconAppGallery_noinline.6092a9d739c77147c884f1f7ab3f1771.svg'></img>

                    </div>

                </div>
            </div>
            <div className='sub-footer'>
                <p>Free Classifieds in Pakistan . © 2006-2024 OLX</p>
            </div>


        </div >
    )
}

export default Footer

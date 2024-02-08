
import './App.css'

import Navbar from './navbar'
import Slider from './slider'
import Categories from './categories'
import Mobile from './mobile'
import Car from './car'
import Olx_ad from '../olx-ad'
import Footer from '../footer'

function App() {

  return (
    <>
      <Navbar />
      <Slider />
      <Categories />
      <h1>Mobile</h1>
      <div className='card-row'>
        <Mobile title='iPhone 14 Pro Max' price='PKR - 400000/-' description='New' city='Karachi Pakistaan' />
        <Mobile title='Samsung Note 20' price='PKR - 20000/-' description='Used' city='Lahore Pakistan' />
        <Mobile title='Nokia 1100' price='PKR - 8000/-' description='Used' city='Peshawar Pakistan' />
        <Mobile title='Huawei P50' price='PKR - 100000/-' description='Used' city='Quetta Pakistan' />
      </div>
      <p className='leftalgin-para'>Veiw More</p>
      <h1>Car</h1>
      <div className='card-row'>
        <Car title='Nissan' price='PKR - 700000/-' description='2018' city='Lahore Pakistan' />
        <Car title='Ford' price='PKR - 25000000/-' description='2023' city='Karachi Pakistan' />
        <Car title='Suzuki' price='PKR - 650000/-' description='2003' city='Hyderabad Pakistan' />
        <Car title='Toyota' price='PKR - 750000/-' description='2012' city='Peshawar Pakistan' />
      </div>
      <Olx_ad />
      <Footer />



    </>
  )
}

export default App

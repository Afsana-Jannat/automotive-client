
import './App.css'
import AutomotiveCard from './components/AutomotiveCard';
import Navbar from './components/Navbar';
import Banner from './Banner';
import Footer from './Footer';
import { useLoaderData } from 'react-router-dom';


function App() {

  const automotives = useLoaderData() || [];

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <h1 className='text-6xl text-center mt-6
       text-red-800'>Automotive: {automotives.length}
      </h1>
      <div className='grid md:grid-cols-2 lg:grid-cols-3
       gap-2 lg:ml-6 mt-10 mb-6'>
        {
          automotives.map(automotive => <AutomotiveCard
            key={automotive._id}
            automotive={automotive}  >
          </AutomotiveCard>)
        }
      </div>
      <div>
        <div>
          <h2 className="text-3xl font-semibold 
          text-center mt-6 mb-6
       text-red-800">
            All the ways to find a better
            car Repair Shop</h2>
          <p className='text-center mb-8 text-red-900'>
            New Atlas keeps you up to date on new cars, concepts, EVs and the latest automotive news including test drives,
            reviews and coverage of all the major auto shows ...</p>

        </div>
        <div className='lg:flex lg:ml-28 lg:mr-28 mb-6 p-6  justify-center border-red-600 border-4'
         style={{backgroundImage:'url(https://i.ibb.co/RNhZqN8/white-silver-christmas-wedding-anniversary-snow-fall-background-or-birthday-diamond-jewelry-bling-gl.webp)'}}>
           <div className='mr-16'>
            <h2 className='mb-3 text-red-800
             font-semibold text-xl'>why choose us</h2>
            <p className='text-gray-600 font-semibold'>
              This is thanks to high demand paired with hobbled production due to global parts supply problems. But the brand with the highest average percentage markups might be the biggest surprise. It isn't some luxury or performance brand; it's Kia, the South Korean
               car brand usually thought of 
               as a value purchase.</p>
           </div>
           <div className='ml-6'>
           <h2 className='mb-3 text-red-950
             font-bold text-xl'>Quick Glance:</h2>
           <h2 className='text-red-800 font-bold'>
            
           Rank 1. Volkswagen
            Rank 2. Toyota Motors
            Rank 3. Honda Motor
            Rank 4. Hyundai
           </h2>
           
           </div>
        </div>
      </div>
      <Footer></Footer>


    </>
  )
}

export default App

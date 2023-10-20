
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
          <h2 className="text-3xl font-semibold 
          text-center mt-6 mb-6
       text-red-800">
            All the ways to find a better
            car Repair Shop</h2>
            <p className='text-center mb-8 text-red-900'>
              New Atlas keeps you up to date on new cars, concepts, EVs and the latest automotive news including test drives,
               reviews and coverage of all the major auto shows ...</p>
        </div>
       <Footer></Footer>

      
    </>
  )
}

export default App


import './App.css'
import AutomotiveCard from './components/AutomotiveCard';
import Navbar from './components/Navbar';
import { useState } from 'react';
import Banner from './Banner';
import Footer from './Footer';
import { Outlet, useLoaderData } from 'react-router-dom';


function App() {

  const loadedAutomotives = useLoaderData();
  const [automotives, setAutomotives] = useState(loadedAutomotives)

  return (
    <>
       <Navbar></Navbar>
       <Outlet></Outlet>
       <Banner></Banner>
      <h1 className='text-6xl text-center mt-6
       text-purple-400'>Automotive: {automotives.length}
       </h1>
       <div className='grid md:grid-cols-2 
       lg:grid-cols-3 gap-2 ml-6 mt-10 mb-6'>
        {
          automotives.map(automotive => <AutomotiveCard
          key={automotive._id}
          automotive={automotive}
          automotives={automotives}
          setAutomotives={setAutomotives}>
          </AutomotiveCard>)
        }
       </div>
       <Footer></Footer>

      
    </>
  )
}

export default App

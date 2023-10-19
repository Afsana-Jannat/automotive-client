
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
       text-purple-400'>Automotive: {automotives.length}
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
       <Footer></Footer>

      
    </>
  )
}

export default App

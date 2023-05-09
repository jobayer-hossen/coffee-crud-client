
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard';
import { useState } from 'react';

function App() {
  
  const userData = useLoaderData();
  const [coffees,setCoffees] = useState(userData);

  return (
    <>
  
      <h1>Vite + React</h1>

     <div className='grid grid-cols-2'>
     {
        coffees.map(coffee => <CoffeeCard
        key={coffee._id}
          coffee={coffee}
          coffees={coffees}
          setCoffees={setCoffees}
        ></CoffeeCard> )
      }
     </div>
    </>
  )
}

export default App

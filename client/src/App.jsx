import { useState } from 'react'

import {BrowserRouter,Link,Route,Routes} from 'react-router-dom';
import {logo} from './assets';
import {Home,CreatePost} from './pages';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <BrowserRouter>
   <header className=' w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]'>
    <Link to='/'>
      <img src={logo} alt="logo" className='w-28 object-contain'></img>
      <h1>Hellosasdasd</h1>
    </Link>
   </header>
   </BrowserRouter>
  )
}

export default App

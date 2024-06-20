import { useState } from 'react'
import './App.css'
import Buttons from './components/Buttons.jsx'
function App() {
  const [bgColor, setBgColor] = useState('Green');

  return (
    <div className='w-full h-screen'
      style={{ background: bgColor }}
    >
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <Buttons color="Red" />
          <Buttons color="Green"/>
          <Buttons color="Blue"/>
          <Buttons color="Olive"/>
          <Buttons color="Yellow" text="black" />
          <Buttons color="Gray"/>
          <Buttons color="Pink" text="black" />
          <Buttons color="Purple"/>
          <Buttons color="Lavender" text="black" />
          <Buttons color="White" text="black" />
          <Buttons color="Black" text="white" />
        </div>
      </div>
    </div>
  )
}

export default App

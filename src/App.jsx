import { useState } from 'react'
import './App.css'
import Buttons from './components/Buttons.jsx'
function App() {
  const [bgColor, setBgColor] = useState('white');

  return (
    <div className='w-full h-screen'
      style={{ background: bgColor }}
    >
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <Buttons color="Red" text="text-white" customClick={()=>setBgColor("Red")} />
          <Buttons color="Green" text="text-white" customClick={()=>setBgColor("Green")} />
          <Buttons color="Blue" text="text-white" customClick={()=>setBgColor("Blue")} />
          <Buttons color="Lime" text="text-white" customClick={()=>setBgColor("Lime")} />
          <Buttons color="Olive" text="text-white" customClick={()=>setBgColor("Olive")} />
          <Buttons color="Yellow" text="text-black" customClick={()=>setBgColor("Yellow")} />
          <Buttons color="Teal" text="text-white" customClick={()=>setBgColor("Teal")} />
          <Buttons color="Gray" text="text-white" customClick={()=>setBgColor("Gray")} />
          <Buttons color="Coral" text="text-white" customClick={()=>setBgColor("Coral")} />
          <Buttons color="Pink" text="text-black" customClick={()=>setBgColor("Pink")} />
          <Buttons color="Purple" text="text-white" customClick={()=>setBgColor("Purple")} />
          <Buttons color="Lavender" text="text-black" customClick={()=>setBgColor("Lavender")} />
          <Buttons color="Turquoise" text="text-black" customClick={()=>setBgColor("Turquoise")} />
          <Buttons color="Brown" text="text-white" customClick={()=>setBgColor("Brown")} />
          <Buttons color="Violet" text="text-black" customClick={()=>setBgColor("Violet")} />
          <Buttons color="White" text="text-black" customClick={()=>setBgColor("White")} />
          <Buttons color="Black" text="text-white"  customClick={()=>setBgColor("Black")} />
        </div>
      </div>
    </div>
  )
}

export default App

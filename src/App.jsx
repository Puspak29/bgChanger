import { useState } from 'react'
import './App.css'
import Buttons from './components/Buttons.jsx'

const buttonEllements =[
  {color: 'Red', text: 'text-white'},
  {color: 'Green', text: 'text-white'},
  {color: 'Blue', text: 'text-white'},
  {color: 'Lime', text: 'text-white'},
  {color: 'Olive', text: 'text-white'},
  {color: 'Yellow', text: 'text-black'},
  {color: 'Teal', text: 'text-white'},
  {color: 'Gray', text: 'text-white'},
  {color: 'Coral', text: 'text-white'},
  {color: 'Pink', text: 'text-black'},
  {color: 'Purple', text: 'text-white'},
  {color: 'Lavender', text: 'text-black'},
  {color: 'Turquoise', text: 'text-black'},
  {color: 'Brown', text: 'text-white'},
  {color: 'Violet', text: 'text-black'},
  {color: 'White', text: 'text-black'},
  {color: 'Black', text: 'text-white'}
]

function App() {
  const [bgColor, setBgColor] = useState('white');

  return (
    <div className='w-full h-screen'
      style={{ background: bgColor }}
    >
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          {
            buttonEllements.map((item)=>(
              <Buttons
              color={item.color}
              text={item.text}
              customClick={()=>setBgColor(item.color)} 
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default App

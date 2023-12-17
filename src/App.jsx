import React from 'react'
import Background from './components/background'
import Foreground from './components/Foreground'
function App() {
  return (
    <>
    <div className='w-full h-screen relative bg-zinc-800 text-zinc-900'>
    <Background />
    <Foreground />    
    </div>
    </>

  )
}

export default App

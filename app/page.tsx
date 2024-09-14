
"use client";
import './App.css'
import Snowfall from 'react-snowfall'
import Card from './components/card'
import { motion } from 'framer-motion'

function App() {

  const darkblue = "#2D3499"
  

  return (
    <>
      <div style={{
        height: '100vh',
        backgroundColor: '#DDEAFF'
      }}>
        
        <div className="title" style={{
          height: '20vh',
          background: darkblue,
          color: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
              
              <div style={{
          position: 'relative',
          height: '100%',
          width: '100%',
          overflow: 'hidden',
          
        }}>
          <Snowfall speed={[0.1, 0.3]} snowflakeCount={50}/>

        </div>
        <div
        style={{
          position: "absolute",
          zIndex: 2

        }}
        >
          <h1 className='rubik-bubbles-regular'
          style={{
            
          }}>MARKO JOVIC</h1>
        </div>   
          
        </div>

        <div style={{
          height: "75vh",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          textAlign: "center",  
        }} className="flexcontainer">
          <div className='container'> Hello THere</div>
          <Card>
            <p>This is a card</p>
          </Card>

        </div>
        
      </div>
    </>
  )
}

export default App

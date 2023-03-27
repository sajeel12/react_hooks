import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import UseState from './components/UseState'
import UseEffect from './components/UseEffect'
import UseMemo from './components/UseMemo'
import Ac from './components/UseContext/Ac'
import { createContext } from 'react'
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom'
import Nav from './components/Nav'
import UseRef from './components/UseRef'

const Name = createContext();
const Email = createContext();
const Address = createContext();

function App() {


  return (
    <BrowserRouter>
      <Name.Provider value='Masoom' >
        <Email.Provider value='masoom@mail.com'>
          <Address.Provider value='Lahore' >

            <Nav />


            <Routes>
              <Route path='/' element={
                <UseState />

              } />
              <Route path='/useeffect' element={
                <UseEffect />

              } />
              <Route path='/usecontext' element={
                <Ac />

              } />
              <Route path='/usememo' element={
                <UseMemo/>

              } />
              <Route path='/useref' element={
               <UseRef/>

              } />




            </Routes>




          </Address.Provider>
        </Email.Provider>
      </Name.Provider >
    </BrowserRouter>
  )
}

export default App
export { Name, Email, Address };
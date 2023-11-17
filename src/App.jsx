import React from 'react'
import Indexx from './components/users/Indexx.jsx'
import Create from './components/users/Create.jsx'
import { Route, Routes } from 'react-router-dom'
import Detailes from './components/users/Detailes.jsx'
import Edit from './components/users/Edit.jsx'

export default function App() {
  return (
    <>
        <Routes>
        <Route path='/' element={<Indexx/>}></Route>

          <Route path='/users/index' element={<Indexx/>}></Route>
          <Route path='/users/create' element={<Create/>}></Route>
          <Route path='/users/:id' element={<Detailes/>}></Route>
          <Route path='/users/edit/:id' element={<Edit/>}></Route>

          <Route path='*' element={<h2>page is not found</h2>}></Route>

        </Routes>

    </>
  )
}


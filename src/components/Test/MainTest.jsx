import React from 'react'
import { Route, RouterProvider, Routes } from 'react-router-dom';
import Test from './Test';
import { Test2 } from './Test2';


export const MainTest = () => {
  return(
    <Routes>
        <Route path='/' element={<Test />}/>
        <Route path='/test2' element={<Test2 />}/>
    </Routes>
  )

}

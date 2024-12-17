import React from 'react'
import TODO from "./components /component1/todo"
import TESTING from "./components /component2/testing"
import DONE from "./components /component3/done"
export default function App() {
  return (
    <>
    <div className=' bg-gray-100 flex items-center justify-center gap-6'>
    <TODO/>
    <TESTING/>
    <DONE/>
    </div>
    </>
  )
}

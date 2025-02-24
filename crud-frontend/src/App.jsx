import { useState } from 'react'
import './App.css'
import ModelForm from './components/ModelForm'
import Navbar from './components/NavBar'
import TableList from './components/TableList'


function App() {
 const[isOpen,setIsOpen] = useState(false);
 const[modalMode,setmodalMod] = useState('add');

 const handleOpen = (mode) =>{
  setIsOpen(true);
 }
 const handleSubmit =() =>{
  if(modalMode == 'add'){
    console.log('modal mode Add');
  }else{
    console.log('modal mode Edit');
  }
 }

  return (
    <>
      <Navbar onOpen={()=> handleOpen('add')}/>
      <TableList isOpen={isOpen} onClose={()=>setIsOpen(false)}/>
      <ModelForm
      isOpen={isOpen}
      onSubmit={handleSubmit}
      onClose={()=>setIsOpen(false)}
      />
    </>
  )
}

export default App

import { useState , useEffect } from 'react'
import {BrowserRouter , Routes , Route } from 'react-router-dom'
import CreateNote from './pages/CreateNote/CreateNote'
import EditNote from './pages/EditNote/EditNote'
import ReadNote from './pages/ReadNote/ReadNote'


function App() {
 
 const [note , setNote] = useState(JSON.parse(localStorage.getItem('myNotes')) || [])


 useEffect(() => {
    localStorage.setItem('myNotes', JSON.stringify(note));
  }, [note])
   
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<ReadNote note={note} />} />
    <Route path="/createNote" element={<CreateNote setNote={setNote} />} />
    <Route path="/editNote/:id" element={<EditNote note={note} setNote={setNote} />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
import './ReadNote.css'
import { useState , useEffect } from 'react'
import { BiSearchAlt } from "react-icons/bi"
import { CiCirclePlus } from "react-icons/ci"
import { IoClose } from "react-icons/io5"
import { Link } from 'react-router-dom'
import Notes from '../../components/notes/Notes'


const ReadNote = ({ note }) => {
  const [inputValue , setInputValue] = useState('')
  const [filteredData, setFilteredData] = useState([])
  const [isSearchVisible , setIsSearchVisible] = useState(false)

  useEffect(() => {
    const updateResults = () => {
      const filtered = note
      .flat()
      .filter(item => item && item.title && item.title.toLowerCase().includes(inputValue.toLowerCase()))
      setFilteredData(filtered)
    }

    updateResults()
  }, [note, inputValue])


  return (
    <>
    <header className="readNote__header">

    <div className="readNote__logo">
    <h1>NoteSphere</h1>
    </div>

    <div className="readNote__searchBar">
    {isSearchVisible &&
    <input 
    type="text"
    placeholder={filteredData.length === 0 ? "No matching notes" : "Search..."}
    value={inputValue} 
    onChange={(e) => { setInputValue(e.target.value)}}
    autoFocus
    />}
    <button onClick={() => setIsSearchVisible(prevState => !prevState)}>
    { isSearchVisible ?  <IoClose className="icon"/> : <BiSearchAlt className="icon"/> }
    </button>
    </div>
    </header>

    <main>
    {filteredData.length > 0 && <h3>My Notes</h3>}
    <div className="readNote__container" >
    {filteredData.length === 0 && <p>Your notes are empty</p>}
    {filteredData.map((note) => (
      <Notes key={note.id} note={note}/>
      ))}
    </div>
    </main>

    <Link to={"/createNote"}>
    <button className="readNote__addBtn">
    <CiCirclePlus className="readNote__addBtn-icon"/> 
    </button>
    </Link>
    </>
    )
}

export default ReadNote
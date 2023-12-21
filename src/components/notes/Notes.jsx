import './Notes.css'
import { Link } from 'react-router-dom'

const Notes = ({ note }) => {

  return (
    <Link to={`/editNote/${note.id}`}>
    <div  className="readNote__notes" style={{backgroundColor: note.color}}>
    <h3>{note.title.length > 30 ? note.title.substr(0 , 30) + "..." : note.title}</h3>
    <p  className="note">{note.text.length > 80 ? note.text.substr(0,80) + "..." : note.text}</p>
    <p className="date">{note.date}</p>
    </div>
    </Link>
    )
}

export default Notes
import '../EditNote/EditNote.css'
import { useState } from 'react'
import { FaArrowAltCircleLeft } from "react-icons/fa"
import { MdOutlineDeleteForever } from "react-icons/md"
import { Link ,useNavigate} from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import getDate from '../../components/getDate'
import NotesBackground from '../../components/notesBackground/NotesBackground'



const CreateNote = ({ setNote }) => {

	const [title , setTitle] = useState("")
	const [text , setText] = useState("")
	const [selectedColor , setSelectedColor] = useState("#faedcb")

	const navigate = useNavigate()
	const date = getDate()


	const handleSubmit = (e) => {

		e.preventDefault()
		const id = uuidv4()

		if(title && text){
			const myNotes = [{id:id, date:date, title:title, text:text , color:selectedColor}]

			setNote(prevNotes => [myNotes, ...prevNotes])
			navigate("/")
		}


	}

	return (
		<section>

		<nav>
		<Link to="/">
		<button>
		<FaArrowAltCircleLeft className="icon pink"/>
		</button>
		</Link>

		<button className="save-btn" onClick={handleSubmit}>Save</button>
		</nav>

		<form className="editNote__container" onSubmit={handleSubmit}>
		<input type="text" 
		placeholder="Add title" 
		value={title} 
		onChange={(e) => setTitle(e.target.value)} 
		/>

		<textarea placeholder="Add notes"
		rows="25" 
		value={text} 
		onChange={(e) => setText(e.target.value)}>
		</textarea>
		</form>
		<NotesBackground selectedColor={selectedColor}  setSelectedColor={setSelectedColor}/>
		</section>

		)
}

export default CreateNote
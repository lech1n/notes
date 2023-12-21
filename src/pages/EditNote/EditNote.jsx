import './EditNote.css'
import { useState , useEffect} from 'react'
import { FaArrowAltCircleLeft } from "react-icons/fa"
import { MdOutlineDeleteForever } from "react-icons/md"
import { Link , useNavigate , useParams } from 'react-router-dom'
import getDate from '../../components/getDate' 
import DeleteModal from '../../components/deleteModal/DeleteModal'
import NotesBackground from '../../components/notesBackground/NotesBackground'



const EditNote = ({ note, setNote }) => {

	const {id} = useParams()
	const notes = note.flat().find((item) => item.id === id)
	const [editedTitle , setEditedTitle] = useState(notes.title)
	const [editedText , setEditedText] = useState(notes.text)
	const [editedColor ,setEditedColor] = useState(notes.color)
	const [showModal , setShowModal] = useState(false)
	const [isNoteChanged, setIsNoteChanged] = useState(false)
	const navigate = useNavigate()
	const date = getDate()


	const moveNoteToTop = (id) => {
		const updatedNotes = note
		.flat()
		.map((notes) =>
			notes.id === id
			? { ...notes, title: editedTitle, text: editedText, date: date, color: editedColor}
			: notes
			)

		const editedNoteIndex = updatedNotes.findIndex((note) => note.id === id)
		const editedNote = updatedNotes[editedNoteIndex]
		updatedNotes.splice(editedNoteIndex, 1)
		updatedNotes.unshift(editedNote)

		setNote(updatedNotes)
	}

	const handleForm = (e) => {
		e.preventDefault();

		if (editedTitle && editedText) {
			const updatedNotes = note
			.flat()
			.map((notes) =>
				notes.id === id
				? { ...notes, title: editedTitle, text: editedText, date: date, color: editedColor}
				: notes
				)
			setNote(updatedNotes)

			moveNoteToTop(id)
		}

		navigate("/")
	}


	const handleDelete = () => {
		const filteredNotes = note.flat().filter(notes => notes.id !== id)
		setNote(filteredNotes)
		navigate("/")
	}
	

	return (
		<section className="editNote__section">
		<nav>
		<Link to="/">
		<button disabled={showModal}><FaArrowAltCircleLeft className="icon pink"/></button>
		</Link>
		<button disabled={showModal} className="save-btn" onClick={handleForm}>Save</button>
		<button disabled={showModal} onClick={() => setShowModal(true)}><MdOutlineDeleteForever className="icon red"/></button>
		</nav>

		{ showModal && <DeleteModal setShowModal={setShowModal} handleDelete={handleDelete} /> }

		<form className="editNote__container" onSubmit={handleForm}>
		<input
		type="text" 
		placeholder="Add title" 
		value={editedTitle} 
		onChange={(e) => setEditedTitle(e.target.value)}
		disabled={ showModal }
		/>
		<textarea
		placeholder="Add notes" 
		rows="25" 
		value={editedText} 
		onChange={(e) => setEditedText(e.target.value)}
		disabled={ showModal }
		/>
		</form>
		<NotesBackground editedColor={editedColor} setEditedColor={setEditedColor}/>

		
		</section>
		)
}

export default EditNote
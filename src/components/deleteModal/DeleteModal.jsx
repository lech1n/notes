import './DeleteModal.css'
import { Link } from 'react-router-dom'

const DeleteModal = ({ setShowModal , handleDelete }) => {
	return (
		<section className="deleteModal__container">
		<h2>Are you sure you want to delete?</h2>
		<div className="delete-btn-container">
		<Link to="/">
		<button className="delete-btn" onClick={handleDelete}>Yes</button>
		</Link>
		<button className="delete-btn" onClick={() => setShowModal(false)}>No</button>
		</div>
		</section>
		)
}

export default DeleteModal
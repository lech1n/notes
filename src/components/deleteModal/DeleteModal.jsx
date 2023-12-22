import './DeleteModal.css'

const DeleteModal = ({ setShowModal , handleDelete }) => {
	return (
		<section className="deleteModal__container">
		<h2>Are you sure you want to delete?</h2>
		<div className="delete-btn-container">
	  <button className="delete-btn"
    onTouchEnd={() => { handleDelete(); setShowModal(false); }}
    onClick={() => { handleDelete(); setShowModal(false); }}>
     Yes
   </button>

  <button className="delete-btn" onTouchStart={() => setShowModal(false)}>No</button>
		</div>
		</section>
		)
}

export default DeleteModal
import './DeleteModal.css';

const DeleteModal = ({ setShowModal, handleDelete }) => {
  const handleYesClick = () => {
    handleDelete();
    setShowModal(false);
  };

  return (
    <section className="deleteModal__container">
      <h2>Are you sure you want to delete?</h2>
      <div className="delete-btn-container">
        <button
          className="delete-btn"
          onClick={handleYesClick}
          onTouchStart={handleYesClick}
          onTouchEnd={() => {}}
        >
          Yes
        </button>

        <button
          className="delete-btn"
          onClick={() => setShowModal(false)}
          onTouchStart={() => setShowModal(false)}
          onTouchEnd={() => {}}
        >
          No
        </button>
      </div>
    </section>
  );
};

export default DeleteModal;
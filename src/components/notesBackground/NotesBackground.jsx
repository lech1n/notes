import { useEffect }from 'react'
import './NotesBackground.css'

const NotesBackground = ({ selectedColor , setSelectedColor , editedColor , setEditedColor }) => {
  const colors = ["#faedcb", "#c9e4de", "#c6def1", "#dbcdf0", "#f2c6de"]

  
  const handleColorChange = (color) => {
   editedColor ? setEditedColor(color) : setSelectedColor(color)
 }

 return (
  <div className="colors__container">
  {colors.map((color) => (
    <button
    className="colors__btn"
    key={color}
    onClick={() => handleColorChange(color)}
    style={{
      backgroundColor: color,
      border: (editedColor || selectedColor) === color ? '2px solid #333' : 'none',
    }}
    ></button>
    ))}
  </div>
  )
}

export default NotesBackground
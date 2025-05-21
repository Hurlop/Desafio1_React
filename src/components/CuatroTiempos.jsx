import styles from './MyButton.module.css'
import { useState } from 'react'

export function CuatroTiempos() {
  const [showImage, setShowImage] = useState(false);

  const handleClick = () => {
    setShowImage(true);
  }

  const cuatroTiempos = {
    img: "https://upload.wikimedia.org/wikipedia/commons/d/dc/4StrokeEngine_Ortho_3D_Small.gif", alt: "cuatro-tiemposimg"}
  return (
    <div className='botonImagen'>
      <button onClick={handleClick}>Mostrar motor 4 tiempos</button>
      {showImage && (<img src={cuatroTiempos.img} alt={cuatroTiempos.alt} className='gif' />)}
    </div>
  )
}

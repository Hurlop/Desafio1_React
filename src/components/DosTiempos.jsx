import { useState } from 'react'
export function DosTiempos() {
  const [showImage, setShowImage] = useState(false);

  const handleClick = () => {
    setShowImage(true);
  }

  const dosTiempos = {
    img: "https://i.pinimg.com/originals/b1/20/01/b120014d1159cb14aafa1b615ed69a12.gif",
    alt: "cuatro-tiemposimg"
  }
  return (
    <div className='botonImagen'>
      <button onClick={handleClick}>Mostrar motor 2 tiempos</button>
      {showImage && (<img src={dosTiempos.img} alt={dosTiempos.alt} className='gif'/>)}
    </div>
      
    
  )
}
import { useState } from 'react'
export function MyButton ({func1,text}){
    const [pressed, setPressed] = useState(false);

    const handleClick = () => {
    const audio = new Audio(func1)
    audio.play()
    audio.addEventListener('ended', () => {
      setPressed(false);
    })
    setPressed(true);
    }
    return (
    pressed ? <button onClick={handleClick} disabled={true}>Reproduciendo...</button> : <button onClick={handleClick}>Sonido de {text}</button> 
    
    )
}
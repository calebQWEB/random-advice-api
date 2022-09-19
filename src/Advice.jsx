import React, {useState, useEffect} from 'react'
import './advice.css'
import dice from './assets/icon-dice.svg'
import desktopDivider from './assets/pattern-divider-desktop.svg'

const Advice = () => {
    const [adviceState, setAdviceState] = useState('Please wait...')
    const [idState, setIdState] = useState('Please wait...')
    
    useEffect(() => {
        fetch('	https://api.adviceslip.com/advice')
            .then(res => res.json())
            .then((data) => {
                setIdState(data.slip.id)
                setAdviceState(data.slip.advice)
            }) 
    }, [])

    const adviceToggle = () => {
        fetch('	https://api.adviceslip.com/advice')
            .then(res => res.json())
            .then((data) => {
                setIdState(data.slip.id)
                setAdviceState(data.slip.advice)
        })
    }


  return (
    <main>
        <div className='advice__container'>
            <h1 className='advice__header'>{`ADVICE #${idState}`}</h1>
            <p className='advice__main'>{`${adviceState}`}</p>
            <img src={desktopDivider} alt='Divider' className='divider'/>

            <div className='dice-background'>
                <img 
                src={dice} 
                alt='dice' 
                className='dice rotate-center' 
                onClick={adviceToggle}/>
            </div>
        </div>
    </main>
  )
}

export default Advice
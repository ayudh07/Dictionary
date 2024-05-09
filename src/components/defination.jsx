import playIcon from '../assets/images/icon-play.svg'
import {useState, useEffect} from 'react';

export default function Defination({data}){
    const [audioSource, setaudioSource] = useState('');
    
    useEffect(()=> {
        data.phonetics.map((audio)=>{
            if(audio.audio!=0){
                setaudioSource(audio.audio);
            }
        })
    })

    function playAudio(){
        console.log(audioSource);
        const audio = new Audio(audioSource);
        audio.play();
    }

    return(
        <>
            <div className="d-flex flex-row justify-content-between align-items-center">
                <div className="left-heading">
                    <h1 className="search-word">{data.word}</h1>
                    <span className="pronunciation">{data.phonetic}</span>
                </div>
                
                <img src={playIcon} alt="" onClick={playAudio}/>
            </div>
        </>
    )
}
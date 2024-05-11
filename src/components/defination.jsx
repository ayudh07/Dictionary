import playIcon from '../assets/images/icon-play.svg'
import {useState, useEffect} from 'react';
import Meaning from './meaning';
export default function Defination({data}){
    const [audioSource, setaudioSource] = useState('');
    const [phonetic, setPhonetic] = useState('');
    
    useEffect(()=> {
        data.phonetics.map((extract)=>{
            if(extract.audio!=null ){
                setaudioSource(extract.audio);
            }
            if(extract.text){
                setPhonetic(extract.text);
            }
        })
    })

    function playAudio(){
        console.log(audioSource);
        const targetAudio = document.getElementById("audioBtn");
        targetAudio.play();
    }

    return(
        <>
            <div className="d-flex flex-row justify-content-between align-items-center">
                <div className="left-heading">
                    <h1 className="search-word">{data.word}</h1>
                    <span className="pronunciation">{phonetic}</span>
                </div>         
                <img src={playIcon} alt="" onClick={playAudio}/>
                <audio id="audioBtn">
                    <source src={audioSource}></source>
                </audio>
            </div>
            {data.meanings!=null ? <Meaning data={data} />: ''} 

        </>
    )
}
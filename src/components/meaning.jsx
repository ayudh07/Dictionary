import Divider from './divider';


export default function Meaning({data}) {
    return(
        <div className=" d-flex flex-column gap-5">
            {
                data.meanings.map((meaning, index)=>{
                    return(
                        <div className="meaning-container d-flex flex-column gap-5" key={index}>
                            <Divider>{meaning.partOfSpeech}</Divider>
                            <div className='definition-container'>
                                <p className='category-title'>Meaning</p>
                                <ul className="meaning-list">
                                    {
                                        meaning.definitions.map((definition, index)=>{
                                            return(
                                                <li className="meaning-item" key={index}>
                                                    {definition.definition}
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                            {/* synonyms */}
                            {
                                meaning.synonyms!='' ? 
                                    <div className='synonyms d-flex flex-row gap-4'>
                                        <p className='category-title'>Synonyms</p>
                                        <span className='synonym d-flex flex-wrap'>
                                            {meaning.synonyms.map((synonym, index)=>{
                                                
                                                return(
                                                    <span className='synonym-item' key={index}>
                                                        {synonym}{','+ ' '}
                                                    </span>
                                                )
                                            })}
                                        </span>
                                    </div> 
                                :
                                    ''
                            }
{/* antonyms */}
                            {
                                meaning.antonyms!='' ? 
                                <div className='synonyms d-flex flex-row gap-4'>
                                    <p className='category-title'>Antonyms</p>
                                    <span className='synonym d-flex flex-wrap'>
                                        {meaning.antonyms}
                                    </span>
                                </div>
                                :
                                    ''
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}
export default function TextField({valueCallback, classes}){

    return(
        <input type="text" className={`text-field`+ classes} placeholder="Search for any word…" onChange={e => valueCallback(e.target.value)}/>
    )
}
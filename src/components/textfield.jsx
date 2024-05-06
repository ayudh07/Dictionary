export default function TextField({valueCallback}){

    return(
        <input type="text" className="text-field" placeholder="Search for any word…" onChange={e => valueCallback(e.target.value)}/>
    )
}
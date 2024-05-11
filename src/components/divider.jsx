export default function Divider({children}){
    return(
        <div className="divider d-flex flex-row w-100 gap-3">
            <h3>{children}</h3>
            <hr/>
        </div>
    )
}
export default function ToggleSwitch({label='', valueCallback}){

    function handleToggle(event){
        valueCallback(event.target.checked);
    }

    return(
        <div className="toggle">
            {
                label ? 
                <label htmlFor="toggle" className="toggle-label">
                    {label}
                </label>
                :
                ''
            }
            <input type="checkbox" name="" id="" className="toggle-btn" onChange={e => handleToggle(e)}/>    
        </div>
    )
}
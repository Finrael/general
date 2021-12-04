const ButtonComp = ({classN, value, callback, buttonIndex})=>{
    const executeCallback=()=>{
        callback(buttonIndex)
    }
    return(
        <input type="button" value={value} className={classN} onClick={executeCallback}/>
    )
}
export default ButtonComp;
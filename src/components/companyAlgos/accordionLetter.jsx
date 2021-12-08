const AccordionLetter = ({ letter, selected, changeSelected }) => {
    return (
        <div>
            <button onClick={()=>changeSelected(letter.name)}>{letter.name}</button>
            {letter.name === selected && <p>{letter.body}</p>}
        </div>
    )
};
export default AccordionLetter;
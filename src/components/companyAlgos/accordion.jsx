import { useState } from "react";
import AccordionLetter from "./accordionLetter";
const data =[
    {
        id:1,
        name:'a',
        body:'body a',
    },
    {
        id:2,
        name:'b',
        body:'body b',
    }
    , {
        id:3,
        name:'c',
        body:'body c',
    }
]
const Accordion = ()=>{
    const [accordionIndex, setAccordionIndex] = useState('a');
    return(
        <div>
        {data.map((element)=>(<AccordionLetter changeSelected={setAccordionIndex} letter={element} selected={accordionIndex}/> ))}
        {data[accordionIndex]&& <p>{data[accordionIndex].body}</p>}
        </div>
    )
}
export default Accordion
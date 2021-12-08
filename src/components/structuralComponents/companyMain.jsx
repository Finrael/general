import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import Menu from './menu';
import Algo1 from '../companyAlgos/cAlgo1';
import Algo2 from '../companyAlgos/cAlgo2';
import Algo9 from '../companyAlgos/cAlgo9';
import Accordion from '../companyAlgos/accordion'

const WalmtartMain =()=>{
    const [selectedAlgo, SetSelectedAlgo] = React.useState(0)
    const dispatch= useDispatch();
const compList = [
    {
        value: 'Comp1',
        classN:'CompButton',
        callback:SetSelectedAlgo,
        index:1,

    },
    {
        value: 'Comp2',
        classN:'CompButton',
        callback:SetSelectedAlgo,
        index:2,

    },
    {
        value: 'Comp3',
        classN:'CompButton',
        callback:SetSelectedAlgo,
        index:3,

    },
    {
        value: 'Comp4',
        classN:'CompButton',
        callback:SetSelectedAlgo,
        index:4,

    },
    {
        value: 'Comp5',
        classN:'CompButton',
        callback:SetSelectedAlgo,
        index:5,

    },
    {
        value: 'Comp6',
        classN:'CompButton',
        callback:SetSelectedAlgo,
        index:6,

    },
    {
        value: 'Comp7',
        classN:'CompButton',
        callback:SetSelectedAlgo,
        index:7,


    },
    {
        value: 'Comp8',
        classN:'CompButton',
        callback:SetSelectedAlgo,
        index:8,

    },
    {
        value: 'Comp9',
        classN:'CompButton',
        callback:SetSelectedAlgo,
        index:9,

    },
    {
        value: 'Acordion',
        classN:'CompButton',
        callback:SetSelectedAlgo,
        index:10,

    },
];
useEffect(()=>{
console.log('currently showing', selectedAlgo)
},[selectedAlgo])

    const showProperAlgo=()=>{
        switch(selectedAlgo){
            case 1:
                return <Algo1/>
            case 2:
                return <Algo2/>
            case 9:
                return <Algo9/>
            case 10:
                return <Accordion/>
            default:
                return <div>Nothing is selected</div>
        }

    }
    return(
        <div>
        <div>
            walmart
            <Menu list={compList}/>
        </div>
        <div>
            {showProperAlgo()}
        </div>
        </div>
    )
}
export default WalmtartMain;
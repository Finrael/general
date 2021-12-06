import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
// import { setCompanyAlgo } from '../../redux/selectCompanyAlgoSlice'
import Menu from './menu';

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
];
useEffect(()=>{
console.log('currently showing', selectedAlgo)
},[selectedAlgo])
    return(
        <div>
            walmart
            <Menu list={compList}/>
        </div>
    )
}
export default WalmtartMain;
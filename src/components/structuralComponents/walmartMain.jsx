import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { setWMAlgo } from '../../redux/selectWMAlgoSlice'
import Menu from './menu';

const WalmtartMain =()=>{
    const [selectedAlgo, SetSelectedAlgo] = React.useState(0)
    const dispatch= useDispatch();
const wmList = [
    {
        value: 'WM1',
        classN:'wmButton',
        callback:SetSelectedAlgo,
        index:1,

    },
    {
        value: 'WM2',
        classN:'wmButton',
        callback:SetSelectedAlgo,
        index:2,

    },
    {
        value: 'WM3',
        classN:'wmButton',
        callback:SetSelectedAlgo,
        index:3,

    },
    {
        value: 'WM4',
        classN:'wmButton',
        callback:SetSelectedAlgo,
        index:4,

    },
    {
        value: 'WM5',
        classN:'wmButton',
        callback:SetSelectedAlgo,
        index:5,

    },
    {
        value: 'WM6',
        classN:'wmButton',
        callback:SetSelectedAlgo,
        index:6,

    },
    {
        value: 'WM7',
        classN:'wmButton',
        callback:SetSelectedAlgo,
        index:7,


    },
    {
        value: 'WM8',
        classN:'wmButton',
        callback:SetSelectedAlgo,
        index:8,

    },
    {
        value: 'WM9',
        classN:'wmButton',
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
            <Menu list={wmList}/>
        </div>
    )
}
export default WalmtartMain;
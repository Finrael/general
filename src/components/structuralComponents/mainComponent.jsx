import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Walmart from './walmartMain';
import FullCouse from './fullCouseMain';
import { selectSection } from '../../redux/selectSectionSlice'

const MainComponent = () => {
    const dispatch = useDispatch();
    const currentSelected = useSelector((state) => state.section.selectedSection);
    const selectFunction = (e)=>{
        switch(e.target.value){
            case 'walmart':
                dispatch(selectSection(1));
                break;
            case 'fullCourse':
                dispatch(selectSection(2));
                break;
            default:
                dispatch(selectSection(0));
                break;
        }
    }
    const renderChosen = (selectedSection) => {
        switch(selectedSection){
            case 1:
                return <Walmart/>
            case 2:
                return <FullCouse/>
            default:
                return <div>Please select a section </div>
        };
    }
    useEffect(()=>{
        renderChosen(currentSelected)
    },[currentSelected])

    return (
        <div>
            <div>
                <p>Main menu Component</p>
                <p>Please select a type of exercise to show</p>
            </div>
            <div>
                <select id='selectSection' name="selecSection" onChange={selectFunction} defaultValue="" >
                    <option value=""  disabled hidden></option>
                    <option value="walmart">Walmtart Interview Questions</option>
                    <option value="fullCourse">Full course Questions</option>
                </select>
            </div>
            <div className="renderArea">
                {renderChosen(currentSelected)}
            </div>
        </div>
    )
}
export default MainComponent
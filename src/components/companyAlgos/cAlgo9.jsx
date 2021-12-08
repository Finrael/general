import React from 'react';
const CAlgo9 = () => {
    const [result, setResult] = React.useState([]);
    const arrayToCheck = [null, [1,2,3], [4],[5],[6,[7,[1]]]];

    function flatten(arr, result) {
        arr.forEach(element => {
            if (Array.isArray(element)){
                flatten(element, result)
            }else{
                result.push(element)
            }
        });
        return result
      }
 
   
    const activateAlgo = () => {
        setResult(flatten(arrayToCheck,[]).join())
    }
    return (
        <div>
            <div>9) Flatten the following array [null, [1,2,3], [4],[5],[6,[7,[1]]]] :</div>
            <input type='button' value="Check default Array" onClick={activateAlgo} />
            <label>The numbers are: {result}</label>
        </div>
    )
}
export default CAlgo9;
import React from 'react';
const CAlgo2 = () => {
    const [goal,setGoal] = React.useState(0);
    const [result, setResult] = React.useState([]);
    const arrayToCheck = [2,4,8,7,5];

    function findTwo(array, sum) {
        const map = {};
      
        for (let i = 0; i < array.length; i++) {
          const num = sum - array[i];
          if (map[num] !== undefined) {
            return [num, array[i]];
          }
          if (map[array[i]] === undefined) {
            map[array[i]] = 0;
          }
        }
        
        return [];
      }
 

    const bindGoal=(e)=>{
        setGoal(e.target.value)
    }
   
    const activateAlgo = () => {
        setResult(findTwo(arrayToCheck,goal).join())
    }
    return (
        <div>
            <div>2) Find the first two numbers that sums to a certain number. i.e. 9. in the array [2,4,8,7,5]  :</div>
            <input type="text" onChange={bindGoal}/> The current goal is: {goal}
            <input type='button' value="Check default Array" onClick={activateAlgo} />
            <label>The numbers are: {result}</label>
        </div>
    )
}
export default CAlgo2;
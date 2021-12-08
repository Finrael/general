import React from 'react';
const CAlgo1 = () => {
    const [inputToBalance, setInputToBalance] = React.useState('');
    const [outputState, setOutputState] = React.useState(false);
    const var1 = '{[([({))]}}';
    const var2 = '{[()]}';
    const balance = () => {
        const str = inputToBalance;
        console.log(str)
        const brackedBalance = {
            '(': ')',
            '[': ']',
            '{': '}'
        }
        const stack = [];
        for (const bracked of str) {
            if (brackedBalance[bracked]) {
                stack.push(bracked)
                continue
            }
            const popped = stack.pop();
            if (brackedBalance[popped] !== bracked) return false

        }
        return stack.length === 0;
    }

    const bindInputToBalance = (e) => {
        switch (e.target.value) {
            case 'input1':
                setInputToBalance(var1);
                break;
            case 'input2':
                setInputToBalance(var2);
                break;
            default:
                setInputToBalance('');
                break;
        }
    }
    const activateAlgo = () => {
        setOutputState(balance())
    }
    return (
        <div>
            <div>1) Write a function that determines if a string of brackets is balanced or not:</div>
            <div>Select input to check:
                <select onChange={bindInputToBalance} defaultValue="">
                    <option value="" disabled hidden></option>
                    <option value="input1">{var1}</option>
                    <option value="input2">{var2}</option>
                </select></div>
            {outputState === true ? <div>The brackets are balanced</div> : <div>The brackets are not balanced</div>}

            <input type='button' value="Balance" onClick={activateAlgo} />
        </div>
    )
}
export default CAlgo1;
import Button from './buttonComp'
const Menu = ({list})=>{
    return(
        <div>
            <ul>
                {list.map((element)=><li key={element.value}><Button key={element.value} value={element.value} 
                classN={element.classN} callback={element.callback} buttonIndex={element.index}/></li>)}
            </ul>
        </div>
    )
};
export default Menu;
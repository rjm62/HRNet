import { useState} from 'react'
import texts from '../../data/data.json'
import {useSelector, useDispatch} from 'react-redux'
import {choiceDropdownStateSelection, choiceDropdownDepartmentSelection} from '../../redux/reducers'
import chevron from '../../assets/picture/chevron.png'
import '../../style/Dropdown.css'

function Dropdown({option}) {
    const dispatch = useDispatch()
    const [isOpenCollapse, setIsOpenCollapse] = useState(false);
    const [contentClassName, setContentClassName] =useState("collapseContent");

    const selectorSelection = useSelector((state => state.choice.selection))
    const [selectionDisplay, setSelectionDisplay] = useState(selectorSelection)

    const options = texts.filter((text) => text.id === option)
    const textsDisplay = options[0].text
    
    const closeIconValidate = ()=> { 
        setIsOpenCollapse(false)
        setContentClassName("collapseContent disappearanceContent")
    }
    const choix = (event) => {
        event.preventDefault()
        setSelectionDisplay(event.target.value)
        option==="linesNumber" ? dispatch(choiceDropdownStateSelection(event.target.value)) : 
        dispatch(choiceDropdownDepartmentSelection(event.target.value))
    }
     
    return isOpenCollapse ? (   
        <div className='collapse' onClick = {closeIconValidate}>
            <div className="collapseOrder" > 
                <p className='collapseSelection'>{selectionDisplay}</p>
                <img src={chevron} alt="chevron vers le bas" />
            </div>
            <div className='collapseContent appearanceContent'>
                <ul onClick={choix}> {textsDisplay.map((detail) => {    
                    return <option className='toto' key={detail} >{detail}</option>
                    })}
                </ul>                   
            </div>
        </div>
        ):  (    
        <div className='collapse'  onClick={() => setIsOpenCollapse(true)}>
            <div className="collapseOrder"> 
                <p className='collapseSelection'>{selectionDisplay}</p>
                <img src={chevron} alt="chevron vers le bas" />
            </div>  
            <div className= {contentClassName}></div>    
         </div>          
    )
}

export default Dropdown
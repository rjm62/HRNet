import { useState} from 'react'
import texts from '../../data/data.json'
import {useSelector, useDispatch} from 'react-redux'
import {choiceDropdownSelection} from '../../redux/reducers'
import '../../style/Dropdown.css'

function Dropdown() {
    const [isOpenCollapse, setIsOpenCollapse] = useState(false);
    const [contentClassName, setContentClassName] =useState("collapseContent");
    // const [selectionDisplay, setSelectionDisplay] = useState("") 
    const [textOption, setTextOption] = useState("")
    const selectorChoice = useSelector((state) => state.choice.dropdown)
    const selectorSelection = useSelector((state => state.choice.selection))
    const dispatch = useDispatch()
    
    const [selectionDisplay, setSelectionDisplay] = useState(selectorSelection)
    
    const options = texts.filter((text) => text.id ===selectorChoice)
    const textsDisplay = options[0].text
    

    const closeIconValidate = ()=> { 
        setIsOpenCollapse(false)
        setContentClassName("collapseContent disappearanceContent")
    }

    const choix = (event) => {
        event.preventDefault()
        setSelectionDisplay(event.target.value)
        dispatch(choiceDropdownSelection(event.target.value))
    }

    return isOpenCollapse ? (   
        <div className='collapse' onClick = {closeIconValidate}>
            <div className="collapseOrder" > 
            <p className='collapseSelection'>{selectionDisplay}</p>
            <button  className="collapseIcon" ><i className="fa-solid fa-chevron-down "></i></button>
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
                <button  className="collapseIcon" aria-label='open or close dropdown' ><i className="fa-solid fa-chevron-down "></i></button> 
            </div>  
            <div className= {contentClassName}></div>    
         </div>          
    )
}
export default Dropdown
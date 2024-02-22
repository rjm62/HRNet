import {Link} from 'react-router-dom'
import '../../style/Header.css'
import { useEffect, useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {choiceHeader} from '../../redux/reducers'
import {choiceDropdown} from '../../redux/reducers'

function Header () {
    const [choice, setChoice] = useState("choice")
    const selectorChoice = useSelector((state) => state.choice.header)
    const dispatch = useDispatch()

    const displayChange = () => {
        dispatch(choiceHeader(""))
        dispatch(choiceDropdown("linesNumber"))
    }

    useEffect(() => {
        setChoice(selectorChoice)   
    }, [selectorChoice])
    
    return (
        choice === "create" ?
        <header>
            <h1 >HRNet</h1>
            <Link className='form' onClick={displayChange} to='/employee-list'>View Current Employees</Link>
            <h2>Create Employee</h2>
        </header> :
        <header>
            <h1> Current Employees</h1>
        </header>
    )
}
export default Header
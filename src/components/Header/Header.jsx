import {Link} from 'react-router-dom'
import '../../style/Header.css'
import { useState } from 'react'
function Header () {
    const [choice, setChoice]= useState("create")

    const displayChange = () => {
        setChoice('')
    }
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
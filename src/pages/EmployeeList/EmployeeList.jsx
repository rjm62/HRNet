import {Link} from 'react-router-dom'
import { useEffect, useState} from 'react'
import DataArray from '../../components/DataArray/DataArray'
import Dropdown from '../../components/Dropdown/Dropdown'
import {choiceHeader, choiceDropdownSelection} from '../../redux/reducers'
import { useDispatch, useSelector } from 'react-redux'
import '../../style/EmployeeList.css'

function EmployeeList () {
    const [roro, setRoro]= useState("")
    const selectorSelection = useSelector((state) => state.choice.selection)
    const dispatch = useDispatch()
    const createdPage = ()=> {
        dispatch(choiceHeader("create"))
    }

    useEffect(() => {
       setRoro(selectorSelection)
       console.log("HHHHHHHHHHHHHHHHHHHHHHH")
    }, [selectorSelection])

    return (
        <main className="containerEmployeeList">
            <div className="riri">
                <Dropdown /> 
                <p>lignes par tableau</p>
            </div>   
            <DataArray />
            <Link className='homeLink' onClick={createdPage} to='/'>Home </Link>
            {console.log({roro})}
        </main>
    )
}

export default EmployeeList
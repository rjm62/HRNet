import {Link} from 'react-router-dom'
import DataArray from '../../components/DataArray/DataArray'
import {choiceHeader} from '../../redux/reducers'
import { useDispatch} from 'react-redux'
import '../../style/EmployeeList.css'

function EmployeeList () {
    const dispatch = useDispatch()

    const createdPage = ()=> {
        dispatch(choiceHeader("create"))
    }

    return (
        <main className="containerEmployeeList">
            <DataArray />
            <Link className='homeLink' onClick={createdPage} to='/'>Home </Link>
        </main>
    )
}

export default EmployeeList
import  DatePicker from 's3d-react-datepicker'
import Dropdown from '../../components/Dropdown/Dropdown'
import {useSelector, useDispatch} from 'react-redux'
import '../../style/EmployeeList.css'
import '../../style/Form.css'
import { useState } from 'react'

function Form () {
    const [dropdownFirst, setDropdownFirst] = useState("un")
    const [dropdownSecond, setDropdownSecond] = useState("deux")

    const selectorChoice = useSelector((state) => state.choice.dropdown)
    const dispatch = useDispatch()

    console.log("TARZAN")
  
    return (
        <form className="containerForm">
            <div className="field">
                <label for="firstName">First Name</label>
                <input type="text" id="firstName" name="firstName" />
            </div>
            <div className="field">
                <label for="lastName">Last Name</label>
                <input type="text" id="lastName" name="lastName" />
            </div>
            <div className="field">
                <label for="dateOfBirth">Date of Birth</label>
                <DatePicker />
            </div>
            <div className="field">
                <label for="startdate">Start Date</label>
                <DatePicker />
            </div>
            <fieldset>
                <legend>Address</legend>
                <div className='field address'>
                    <label for="street">Street</label>
                    <input type="text" id="street" name="street" />
                </div>
                <div className='field address'>
                    <label for="city">City</label>
                    <input type="text" id="city" name="city" />
                </div>
                <div className='field address'>
                    <label for="state">State</label>
                   {/* {dropdownFirst!=="state" ? setDropdownFirst("state"): "" } */}
                    <div className='fifi'>
                        <Dropdown /> 
                    </div>
                </div>
                <div className='field address'>
                    <label for="zipCode">Zip Code</label>
                    <input type="text" id="zipCode" name="zipCode" />
                </div>
            </fieldset>
                <div className='field'>
                    <label for="department">Department</label>
                    {/* {dropdownSecond!=="departments" ? setDropdownSecond("departments"): ""} */}
                    <Dropdown /> 
                </div>  
            {/* <button className='saveButton'>Save</button> */}
        </form>
    )
}

export default Form
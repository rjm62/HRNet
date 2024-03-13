import  DatePicker from 's3d-react-datepicker'
import Dropdown from '../../components/Dropdown/Dropdown'
import {choiceModale, choiceNewEmployee} from '../../redux/reducers'
import '../../style/EmployeeList.css'
import '../../style/Form.css'
import { useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'

function Form () {  
const [firstName,setFirstName] = useState("")
const [lastName, setLastName] = useState("")
const [dateOfBirth, setDateOfBirth] = useState("")
const [startDate, setStartDate] = useState("")
const [street, setStreet] = useState("")
const [city, setCity] = useState("")
const [department, setDepartment] = useState("")
const [zipCode, setZipCode] = useState("")
const selectorChoiceState = useSelector((state) => state.choice.dropdownStateSelection)
const selectorChoiceDepartment = useSelector((state) => state.choice.dropdownDepartmentSelection)
const dispatch = useDispatch()
// const datea= new Date()
// const year = datea.getFullYear()
const dataEnter = (event) => {
    event.preventDefault()
    setFirstName(event.currentTarget.firstName.value)
    setLastName(event.currentTarget.lastName.value)
    setStartDate(event.currentTarget.startDate.value)
    setStreet(event.currentTarget.street.value)
    setCity(event.currentTarget.city.value)
    setZipCode(event.currentTarget.zipCode.value)
    }

const save = (event) => {
    event.preventDefault()
    const newEmployee = {
        firstName: firstName,
        lastName: lastName,
        startDate: startDate,
        department: selectorChoiceDepartment,
        dateOfBirth: dateOfBirth,
        street: street,
        city: city,
        state:selectorChoiceState,
        zipCode: zipCode
    }  
    dispatch(choiceNewEmployee(newEmployee)) 
    dispatch(choiceModale("true"))
    
}

    return (
        <form className="containerForm" onChange={(e) =>dataEnter(e)} onSubmit={(e) =>save(e)}>
            <div className="field">
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" name="firstName" />
            </div>
            <div className="field">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" name="lastName" />
            </div>
            <div className="field">
                <label htmlFor="dateOfBirth" ariel-label="calender">Date of Birth</label>
                <DatePicker  className="toto" id="dateOfBirth" name="dateOfBirth" onChange={(date) => {setDateOfBirth(date?.format('DD/MM/YYYY'));}}/>
            </div>
            <div className="field">
                <label htmlFor="startDate" ariel-label="calender">Start Date</label>
                <DatePicker id="startDate" name="startDate" onChange={(date) => {setStartDate(date?.format('DD/MM/YYYY'));}} />
            </div>
            <fieldset>
                <legend>Address</legend>
                <div className='field address'>
                    <label htmlFor="street">Street</label>
                    <input type="text" id="street" name="street" />
                </div>
                <div className='field address'>
                    <label htmlFor="city">City</label>
                    <input type="text" id="city" name="city" />
                </div>
                <div className='field address'>
                    <label htmlFor="state">State</label>
                    <div className='fifi'>
                        <Dropdown option="states" /> 
                    </div>
                </div>
                <div className='field address'>
                    <label htmlFor="zipCode">Zip Code</label>
                    <input type="text" id="zipCode" name="zipCode" />
                </div>
            </fieldset>
            <div className='field'>
                <label htmlFor="department">Department</label>
                <Dropdown  option="departments"  onChange={(date) => {setDepartment(date? "coucou":"")}}/> 
            </div>  
            <button className='saveButton' type="submit">Save</button>
           
        </form>
    )
}

export default Form
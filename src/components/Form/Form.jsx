import  DatePicker from 's3d-react-datepicker'
import '../../style/Form.css'

function Form () {
   
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
                    <input type="text" id="state" name="state" />
                </div>
                <div className='field address'>
                    <label for="zipCode">Zip Code</label>
                    <input type="text" id="zipCode" name="zipCode" />
                </div>
            </fieldset>
            <p className='collapseLabel'>Department</p>
            <select className="field address collapse" for="department">
                <option value="sales">Sales</option>
            </select>         
            <button className='saveButton'>Save</button>
        </form>
    )
}

export default Form
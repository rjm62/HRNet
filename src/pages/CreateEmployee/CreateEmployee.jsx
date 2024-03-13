import Form from '../../components/Form/Form'
import {Modal} from 'rudy-modal'
import {choiceModale} from '../../redux/reducers'
import {useState, useEffect} from 'react'
import { useSelector, useDispatch} from 'react-redux'
import '../../style/CreateEmployee.css'


function CreateEmployee () {
    const [visibility, setVisibility] = useState("false")
    const selectorModale = useSelector((state) => state.choice.modale)
    const dispatch = useDispatch()
    const text = "Employee Created!"

    const modalState = () => {
        dispatch(choiceModale("false"))
    }

 useEffect(() => {
        selectorModale==="true" ? setVisibility("true") : setVisibility("false")
    },[selectorModale])
   
    return (
        <main>
            <Form />
            {visibility === "true" ? 
            <Modal message={text} closeModal={modalState}/> 
            : ""}
        </main>
    )
}
export default CreateEmployee
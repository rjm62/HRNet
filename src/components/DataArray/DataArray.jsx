import DataTablePlugin from 'ebo-react-datatable';
import 'ebo-react-datatable/src/dataTablePlugin.css';
import { useSelector } from 'react-redux';

function DataArray () {
  const selectorData = useSelector((state) => state.choice.newEmployee)
  const columns = [
    { title: "First Name", data: "firstName" },
    { title: "Last Name", data: "lastName" },
    { title: "Start Date", data: "startDate" },
    { title: "Department", data: "department" },
    { title: "Date of Birth", data: "dateOfBirth" },
    { title: "Street", data: "street" },
    { title: "City", data: "city" },
    { title: "State", data: "state" },
    { title: "Zip Code", data: "zipCode" },
  ];

  const users = selectorData
  
  return (
  <DataTablePlugin data={users} columns={columns} dateFormat="mm/dd/yyyy" />
  )
}

export default DataArray
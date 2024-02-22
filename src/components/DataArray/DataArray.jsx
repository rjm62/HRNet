import { useEffect,useState } from "react";
import { Table } from "react-condensed";
import { useSelector } from "react-redux";
import '../../style/DataArray.css'

// const selectorChoice = useSelector((state) => state.choice.header)

const DataArray = () => {
    const selectorSelection = useSelector((state) => state.choice.selection)
    // setTiti(selectorSelection)
    const [titi, setTiti] = useState(selectorSelection)
    console.log(titi)

    useEffect(() => {
        setTiti(selectorSelection)
     }, [selectorSelection])

  const Columns = [
    {
      name: "First Name",
      accessor: (row) => row.firstName + row.lastName, 
      searchable:"true",
      sortable: "true"
    },
    {
        name: "Last Name",
        accessor: (row) => row.firstName + row.lastName, 
        searchable:"true",
        sortable: "true"
      },
    {
      name: "Start Date",
      accessor: "age",
      sortable: "true"
    },
    {
      name: "Department",
      accessor: "gender",
      sortable: "true"
    },
    {
      name: "Date of Birth",
      accessor: "email",
      sortable: "true"
    },
    {
        name: "Street",
        accessor: "ville",
        sortable: "true"
      },
      {
        name: "City",
        accessor: "pays",
        sortable: "true"
      },
      {
        name: "Sate",
        accessor: "ville",
        sortable: "true"
      },
      {
        name: "Zip Code",
        accessor: "pays",
        sortable: "true"
      }
  ];
  const data = [
    {
      id: 1,
      firstName: "Terry",
      lastName: "Medhurst",
      age: 50,
      gender: "male",
      email: "atuny0@sohu.com",
      ville: "bournonville",
      pays:"france"
    },
    {
      id: 2,
      firstName: "Sheldon",
      lastName: "Quigley",
      age: 28,
      gender: "male",
      email: "hbingley1@plala.or.jp",
      ville: "bournonville",
      pays:"france"
    },
    {
      id: 3,
      firstName: "Terrill",
      lastName: "Hills",
      age: 38,
      gender: "male",
      email: "rshawe2@51.la",
      ville: "bournonville",
      pays:"france"
    },
    {
      id: 4,
      firstName: "Miles",
      lastName: "Cummerata",
      age: 49,
      gender: "male",
      email: "yraigatt3@nature.com",
      ville: "bournonville",
      pays:"france"
    },
    {
      id: 5,
      firstName: "Mavis",
      lastName: "Schultz",
      age: 38,
      gender: "male",
      email: "kmeus4@upenn.edu",
      ville: "bournonville",
      pays:"france"
    },
  ];

  return (
    <div className="dataArrayContainer">
        <Table 
        columns={Columns}
        data={data}
        styleVariables={{"head-row-height":"50px" }}
        usePagination= "true"
        numberOfRows={titi}
        canSelectRows="true"
        uniqueDataField={2}     
        />
    </div>
  );
};
export default DataArray;
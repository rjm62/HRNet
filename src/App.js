import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import CreateEmployee from './pages/CreateEmployee/CreateEmployee'
import EmployeeList from './pages/EmployeeList/EmployeeList'
import Header from './components/Header/Header'
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<CreateEmployee />} />  
        <Route path="/employee-list" element={<EmployeeList />} /> 
      </Routes>
    </Router>
  )
}

export default App;
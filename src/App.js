import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Provider} from 'react-redux'
import {store} from './redux/store'
import CreateEmployee from './pages/CreateEmployee/CreateEmployee'
import EmployeeList from './pages/EmployeeList/EmployeeList'
import Header from './components/Header/Header'
import './App.css';
import {persistStore} from 'redux-persist'

function App() {
  return (
    <Router>
      <Provider store={store}> 
        <Header />
          <Routes>
            <Route path="/" element={<CreateEmployee />} />  
            <Route path="/employee-list" element={<EmployeeList />} /> 
          </Routes>
      </Provider>
    </Router>
  )
}

export default App;
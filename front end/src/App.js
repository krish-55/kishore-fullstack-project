import './App.css';
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import RegistrationsForm from './components/RegistrationsForm';
import Success from './components/success';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegistrationsForm/>}/>
        <Route path="/success" element={<Success />} />
      </Routes>
    </Router>
  )
}

export default App;

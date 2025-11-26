import { Link, Routes, Route } from 'react-router-dom'
import CustomersPage from './CustomersPage.jsx'
import TrainingsPage from './TrainingsPage.jsx'
import './index.css';


export default function App() {
  return (
    <div style={{ fontFamily: 'system-ui', padding: 16 }}>
      <h1>Personal Trainer UI</h1>

      <nav style={{ display: 'flex', gap: 12, marginBottom: 16 }}>
        <Link to="/customers">Customers</Link>
        <Link to="/trainings">Trainings</Link>
      </nav>

      <Routes>
        <Route path="/customers" element={<CustomersPage />} />
        <Route path="/trainings" element={<TrainingsPage />} />
        <Route path="/" element={<p>Valitse sivu ylhäältä.</p>} />
      </Routes>
    </div>
  )
}

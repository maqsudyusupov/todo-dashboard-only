import './App.css'
import Navbar from './components/Navbar/Navbar'
import DashMenu from './components/Dashboard/DashboardMenu/DashboardMenu'
import DashTasks from './components/Dashboard/DashTasks/DashTasks'

function App() {

  return (
    <>
    <div className="app-container">
      <Navbar />
      <div className="main-container">
        <DashMenu />
        <DashTasks />
      </div>
    </div>
    </>
  )
}

export default App

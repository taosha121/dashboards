import './App.css';
import DashboardHeader from './components/DashboardHeader';
import DashboardContent from './components/DashboardContent';

function App() {
  return (
    <div className="App">
      <DashboardHeader title="项目集成管理智慧运营中心" />
      <DashboardContent />
    </div>
  );
}

export default App;

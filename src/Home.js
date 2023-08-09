import logo from './logo.svg';
import './App.css';
import SectionOne from './Components/SectionOne';
import Banner from './Components/banner';
import BestSolution from './Components/BestSolution';
function App() {
    return (
        <div className="App">
            <Banner />
            <BestSolution />
            <SectionOne />

        </div>
    );
}

export default App;

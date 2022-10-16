import './App.css';
import Hero from "./components/Hero/Hero";
import Programs from "./components/Programs/Programs";
import Reasons from "./components/Reasons/Reasons";
import Plans from "./components/Plans/Plans";
import Coaches from "./components/Coaches/Coaches";
import Join from "./components/Join/Join";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
        <Hero/>
        <Programs/>
        <Reasons/>
        <Plans/>
        <Coaches/>
        <Join/>
        <Footer/>
    </div>
  );
}

export default App;

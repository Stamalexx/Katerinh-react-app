
import './App.css'
import SectionApp from "./components/SectionApp/SectionApp";
import FooterApp from "./components/FooterApp/FooterApp";
import AppBar from "./components/AppBar/AppBar";
import NavigationApp from "./components/NavigationApp/NavigationApp";
import AsideApp from "./components/AsideApp/AsideApp";
import "./index.css";

function App() {
  

  return (
    <>
      <AppBar />
      <div className="layout">
        <NavigationApp />
        <SectionApp />
        <AsideApp />
      </div>
      <FooterApp />
    </>
  );
}

export default App

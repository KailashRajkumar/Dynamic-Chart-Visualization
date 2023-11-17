import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import GlobalStyles from "./styles/Global.styled";
import Footer from "./components/Footer";

function App() {

  return (
    <>
      <NavBar />
      <Outlet />
      <GlobalStyles />
      <Footer />
    </>
  )
}

export default App;

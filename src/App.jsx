import Header from "./views/Header";
import Footer from "./views/Footer";
import ProductList from "./components/ProductList";
import Body from "./views/Body";
import { ToastContainer, toast } from 'react-toastify';


function App() {
  return (
    <>
      <Header/>
      {/* <Body/> */}
      <Footer/>
      <ToastContainer />

    </>
  );
}

export default App;

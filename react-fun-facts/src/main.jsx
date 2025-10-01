import {createRoot} from "react-dom/client"
import './index.css'
const root=createRoot(document.getElementById("root"));
import Header from "./Header"
import Facts from "./main_content"
import Footer from"./footer"
root.render(
  <>
  <Header/>
  <Facts/>
  <Footer/>
  </>

)

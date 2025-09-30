import {createRoot} from "react-dom/client"
import './index.css'
const root=createRoot(document.getElementById("root"));
root.render(
  <main>
  <img src="react-logo.jpeg" alt="react" id="reactimg"></img>
  <h1>Fun Facts About React</h1>
  <ul id="facts">
    <li>React was created by Facebook in 2011 and open-sourced in 2013.</li>
    <li>It uses a Virtual DOM for faster UI updates.</li>
    <li>React is a library, not a full framework.</li>
    <li>JSX lets you write HTML inside JavaScript.</li>
    <li>Apps are built with reusable components like LEGO blocks.</li>
    <li>Hooks let you use state and effects without classes.</li>
    <li>React Native allows building mobile apps with React.</li>
    <li>React Fiber improved rendering and animation handling.</li>
    <li>React is backward compatible, so old code keeps working.</li>
    <li>Big apps like Facebook, Instagram, and Netflix use React.</li>
  </ul>
  </main>

)

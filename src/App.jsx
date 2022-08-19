import { AiOutlineLinkedin } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import './App.css';

function App() {


  return (
    <div className="App">
      <div className="container">
        <div>

          <a href="" target="_blank">
            <img src="/aalissonaq.svg" className="logo" alt="aalissonaq logo" />
          </a>
        </div>

        <div className="card">
          <h3>Novidades em Breve...</h3>
        </div>
        <div className="icon">
          <a href="https://www.instagram.com/alisson.almeidaq" target="_blank" style={{ marginRight: "5rem", color: "#fff" }}>
            <FaInstagram size="40" />
          </a>
          <a href="https://www.linkedin.com/mwlite/in/alissonalmeidaq" target="_blank" style={{color: "#fff" }}>
            <AiOutlineLinkedin size="40" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default App

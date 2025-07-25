import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebookF } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import userImg from './assets/user-image.jpg';
import './App.css'

function App() {
  return (
    <div className="vh-100 vw-100 d-flex justify-content-center align-items-center">
      <section className="shadow-lg d-flex justify-content-center align-items-center gap-5 p-5" style={{width: "63rem", height: "33rem"}}>
        <article className="w-50">
          <h1 className="my-3">Hi, i am john wick</h1>

          <p className="text-secondary">A freelance web devloper from london. i convert custom web designs to bootstrap templates.</p>
          <p className="text-secondary">i make youtube videos and write blog</p>
          
          <button type="button" className="px-4 py-2 my-4 rounded-5 btn btn-primary">I'm available</button>

          <ul className="list-unstyled d-flex gap-3">
            <li className="px-2 py-1 rounded-circle social-link"><a className="text-dark" href="#"><FaFacebookF /></a></li>
            <li className="px-2 py-1 rounded-circle social-link"><a className="text-dark" href="#"><RiTwitterXLine /></a></li>
            <li className="px-2 py-1 rounded-circle social-link"><a className="text-dark" href="#"><FaSquareInstagram /></a></li>
            <li className="px-2 py-1 rounded-circle social-link"><a className="text-dark" href="#"><FaGithub /></a></li>
          </ul>
        </article>

        <img src={userImg} alt="user-image" style={{width: "25rem", height: "25rem"}} />
      </section>
    </div>
  )
}

export default App
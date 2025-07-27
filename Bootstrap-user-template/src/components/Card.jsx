import React from 'react'
import userImg from '../assets/user-image.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebookF } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

export default function Card() {
    return (
        <section className="shadow-lg d-flex justify-content-center align-items-center gap-5 p-5 rounded-4" style={{ width: "63rem", height: "33rem" }}>
            <article className="w-50">
                <h1 className="my-3">Hi, i am john wick</h1>

                <p className="text-secondary">A freelance web devloper from london. i convert custom web designs to bootstrap templates.</p>
                <p className="text-secondary">i make youtube videos and write blog</p>

                <button type="button" className="px-4 py-2 my-4 rounded-5 btn btn-primary fs-6 text-uppercase">I'm available</button>

                <ul className="list-unstyled d-flex items-center gap-3">
                    <li><a className="px-2 py-1 rounded-circle text-dark social-link" href="#"><FaFacebookF /></a></li>
                    <li><a className="px-2 py-1 rounded-circle text-dark social-link" href="#"><RiTwitterXLine /></a></li>
                    <li><a className="px-2 py-1 rounded-circle text-dark social-link" href="#"><FaSquareInstagram /></a></li>
                    <li><a className="px-2 py-1 rounded-circle text-dark social-link" href="#"><FaGithub /></a></li>
                </ul>
            </article>

            <User />
        </section>
    )
}

export function User(){
    return(
        <img src={userImg} alt="user-image" style={{ width: "25rem", height: "25rem" }} />
    )
}
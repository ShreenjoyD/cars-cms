import { Outlet, NavLink } from "react-router-dom";
import Topheader from "../components/Topheader";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import "./../styles/Layout.css";

const Copyr=()=> {
    return (
    <div className="copyrt">
        Copyright PSK Performance © 2024. All Rights Reserved.
    </div>
    );
}

function Layout(){

    return (<>
        <Topheader/>
        <nav>
            <ul>
                <li><NavLink to="/" className={({ isActive }) => {
   return isActive ? "active" : "";
   }}>Home</NavLink></li>
                <li><NavLink className={({ isActive }) => {
   		return isActive ? "active" : ""; }} 
		to="about">About Us</NavLink></li>
                <li><NavLink className={({ isActive }) => {
   return isActive ? "active" : "";
   }} to="whatwedo">What We Do</NavLink></li>
                <li><NavLink className={({ isActive }) => {
   return isActive ? "active" : "";
   }} to="reprogrammation">Reprogrammation</NavLink></li>
                <li><NavLink className={({ isActive }) => {
   return isActive ? "active" : "";
   }} to="project">Project</NavLink></li>
                <li><NavLink className={({ isActive }) => {
   return isActive ? "active" : "";
   }} to="motorsports">C2 Motorsports</NavLink></li>
                <li><NavLink className={({ isActive }) => {
   return isActive ? "active" : "";
   }} to="contact">Contact Us</NavLink></li>
            </ul>
        </nav>
        <Outlet/>
        <Newsletter/>
        <div className="fooparentdiv">
            <Footer/>
            <nav className="foonav">
                <ul className="foolist">
                    <li><NavLink className={({ isActive }) => {
   return isActive ? "active" : "";
   }} to="/">Home</NavLink></li>|
                    <li><NavLink className={({ isActive }) => {
   return isActive ? "active" : "";
   }} to="about">About Us</NavLink></li>|
                    <li><NavLink className={({ isActive }) => {
   return isActive ? "active" : "";
   }} to="whatwedo">What We Do</NavLink></li>|
                    <li><NavLink className={({ isActive }) => {
   return isActive ? "active" : "";
   }} to="reprogrammation">Reprogrammation</NavLink></li>|
                    <li><NavLink className={({ isActive }) => {
   return isActive ? "active" : "";
   }} to="project">Project</NavLink></li>|
                    <li><NavLink className={({ isActive }) => {
   return isActive ? "active" : "";
   }} to="motorsports">C2 Motorsports</NavLink></li>|
                    <li><NavLink className={({ isActive }) => {
   return isActive ? "active" : "";
   }} to="contact">Contact Us</NavLink></li>
                </ul>
            </nav>
        </div>
        <Copyr/>
    </>
    );
}

export default Layout;
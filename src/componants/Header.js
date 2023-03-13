//import file Header.css de su dung cho module nay
import './Header.css';
import { Route, Routes, Link } from 'react-router-dom';
//Tao 1 component trong module Header.js

function Header() {
    return (
        <header>
            <Top />
            <HeaderContent />
            <Menu />
        </header>
    )
}

function Top() {
    return (
        <div className="top">
            <a href="#">SignIn</a>
            <a href="#">SignUp</a>
        </div>
    )
}

function HeaderContent() {
    return (
        <div className="header-content">
            <h1>Welcome to React</h1>
        </div>
    )
}

function Menu() {
    return (
        <div className="menu">
            <Link to='/' href="#">Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/content'>Contact</Link>
        </div>
    )
}
//Xuat khau 1 component mac dinh la Header
export default Header;
export { Top, HeaderContent, Menu };


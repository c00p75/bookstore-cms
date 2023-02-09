import React from 'react';
import { BsPersonCircle } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import '../App.css';
import './bookStore.css';

const links = [
  {
    id: 1,
    path: '/',
    text: 'BOOKS',
  },
  {
    id: 2,
    path: '/categories',
    text: 'CATEGORIES',
  },
];

const Navbar = () => (
  <nav id="navbar" className="container-fluid d-flex justify-content-around">
    <a className="logo d-flex align-self-center text-end" href="/">Bookstore CMS</a>
    <ul className="d-flex my-2 p-0 align-items-center">
      {links.map((link) => (
        <li key={link.id} className="px-1">
          <NavLink to={link.path} exact="true">
            {link.text}
          </NavLink>
        </li>
      ))}
    </ul>
    <div className="col-7 align-self-center loginContainer">
      <button type="button" className="login">
        <BsPersonCircle
          style={{ color: 'bldodgerblueue', fontSize: '36px' }}
        />
      </button>
    </div>
  </nav>
);

export default Navbar;

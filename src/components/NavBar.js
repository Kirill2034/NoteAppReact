import React from 'react';
import {NavLink} from 'react-router-dom';

export const NavBar = () => (
    <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
        <div className="navbar-brand">
            ХЫХЫ
        </div>

        <ul className='navbar-nav'>
            <li className='nav-item'>
                <NavLink to="/" className='nav-link' exact>Главная</NavLink>
            </li>
            <li className='nav-item'>
                <NavLink to="/about" className='nav-link'>Информация</NavLink>
            </li>
        </ul>
    </nav>
);
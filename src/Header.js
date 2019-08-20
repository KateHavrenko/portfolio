import React, { Component } from 'react';
import code from './images/code.png';

export default function Header() {
    return(
        <header>
            <div className='container header-inner'>
                <img src={code} className="code" alt="code" />
                <ul>
                    <li><a href='#'>About me</a></li>
                    <li><a href='#'>Skills</a></li>
                    <li><a href='#'>Portfolio</a></li>
                    <li><a href='#'>Contact</a></li>
                </ul>
            </div>
        </header>
    )
}
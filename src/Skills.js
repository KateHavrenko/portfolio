import React, { Component } from 'react';
import html from './images/html5.png';
import css from './images/css.png';
import js from './images/js.png';
import react from './images/react.png';
import git from './images/git.png';

export default function Skills() {
    return(
        <section id='skills'>
            <h2>My skills</h2>
            <div className='container'>
                <div className='skills'>
                    <div className='html'>
                        <img src={html} />
                    </div>
                    <div className='css'>
                        <img src={css} />
                    </div>
                    <div className='js'>
                        <img src={js} />
                    </div>
                    <div className='react'>
                        <img src={react} />
                    </div>
                    <div className='git'>
                        <img src={git} />
                    </div>
                </div>
            </div>
        </section>
    )
}

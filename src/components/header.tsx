import React from 'react';
import './header.css';

function Header({ }) {
    return (
        <div id="header" className='header-container'>
            <div className='container title-container' id="title">
                <h3>Welcome!</h3>
            </div>
            <div className='container links-container' id="links">
                <ul id="linksList">
                    <li>
                        <h4><a href="https://github.com/jacob-oreilly">Github</a></h4>
                    </li>
                    <li>
                        <h4><a href="/resume_2025">Resume</a></h4>
                    </li>
                    <li>
                        <div className='projects'>
                            <h4><a href="/softsono">Softosono</a></h4>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;
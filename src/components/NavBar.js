import React from 'react'
import {Link} from 'react-router-dom';

export default function NavBar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <Link to='/'>HOME</Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                    <li class="nav-item active">
                        <Link to='/album'>Albums<span class="sr-only">(current)</span></Link>
                    </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

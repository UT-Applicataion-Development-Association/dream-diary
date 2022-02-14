import React from 'react';
import { Link } from "react-router-dom";

import "./home-page.scss";


class HomePage extends React.Component {
    render() {
        return (
            <div className="page home-page">
                <nav className='nav home-nav'>
                    HOME PAGE
                </nav>
                <main className="home-main">
                    CONTENT
                    <div>
                        <Link to="/dream/3">Link to ViewDream</Link>
                    </div>
                </main>
            </div>
        )
    }
}

export default HomePage;
import React from 'react';
import { Link } from 'react-router-dom';

export default function MainPage() {
    return (
        <div>
            <h1>Mainpage</h1>
            <Link to="/blog">Blog</Link> | <Link to="/Tech">Tech</Link>
        </div>
    )
}
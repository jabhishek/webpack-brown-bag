import {Link} from "react-router-dom";
import React from "react";

export const PageHeader = () => {
    return <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/store">Store</Link></li>
        <li><Link to="/list">List</Link></li>
    </ul>
}

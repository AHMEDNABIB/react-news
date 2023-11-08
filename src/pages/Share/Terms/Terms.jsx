import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms and Condition</h2>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, labore quos. Ratione quisquam quam commodi est ab illum explicabo exercitationem illo autem quod unde provident neque, alias ex a vero nisi accusamus, modi quae accusantium amet odio cupiditate? Hic exercitationem eaque ipsum laboriosam ratione pariatur fugit natus ad autem in.
            </p>
            <p>Go back to <Link to ="/register">Register</Link></p>
        </div>
    );
};

export default Terms;
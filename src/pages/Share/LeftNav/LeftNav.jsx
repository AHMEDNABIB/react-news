import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftNav = () => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		fetch("http://localhost:5000/categories")
			.then((res) => res.json())
			.then((data) => setCategories(data))
			.catch((error) => console.log(error));
	}, []);
	return (
		<div>
		
			<div className="space-y-6">
				<h2 className="text-2xl">All Categories</h2>
				{categories.map((category) => (
					<p key={category.id} className="text-black text-decoration-none" >
						<Link
							
							key={category.id}
							to={`/category/${category.id}`}>
							{category.name}
						</Link>
					</p>
				))}
			</div>
		</div>
	);
};

export default LeftNav;

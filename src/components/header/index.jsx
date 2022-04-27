import React from 'react';

export default Header = () => {
	return (
		<header>
			<div className="container">
				<nav>
					<ul>
						<li>
							<a href="/">Home</a>
						</li>
						<li>
							<a href="/products">Products</a>
						</li>
						<li>
							<a href="/cart">Cart</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

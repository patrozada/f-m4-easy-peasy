import React from 'react';

class Header extends React.Component {
	render() {
		const { game } = this.props;
		return (
			<React.Fragment>
				<section className="header__nav">
					<nav>
						<ul>
							<li>
								<a href="">Games</a> <a href="">Progress</a> 
								<a href="">Awards</a>             
							</li>
						</ul>
					</nav>
				</section>
				<section className="header__titles">
					<h1>{game.name}</h1>  
					<p>{game.description}</p> 
				</section>
				<section>
					<div
						className="header__image-game"
						style={{ backgroundImage: `url(${game.image_url})` }}
					/>
					<img />
				</section>
			</React.Fragment>
		);
	}
}
export default Header;

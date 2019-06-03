import React from 'react';
import imgPlay from '../images/play-white@1x.png';
import imgSettings from '../images/settings-default.png';

class Header extends React.Component {
	render() {
		const { game } = this.props;
		return (
			<React.Fragment>
				<section className="header__nav">
					<nav>
						<ul>
							<li>
								<a href="">Games</a> 
							</li>
							<li>
								<a href="">Progress</a> 
							</li>
							<li>
								<a href="">Awards</a> 
							</li>
							<li>
								<img src={imgSettings} alt="image-settings" />
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
					<img src={imgPlay} alt="image-play" />
				</section>
			</React.Fragment>
		);
	}
}
export default Header;

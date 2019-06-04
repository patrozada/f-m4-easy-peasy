import React from 'react';
import imgPlay from '../images/play-white@1x.png';
import imgSettings from '../images/settings-default.png';
import './header.scss';

class Header extends React.Component {
	render() {
		const { game } = this.props;
		return (
			<header>
				<section className="header__nav">
					<nav>
						<ul className="header__nav-list">
							<li>
								<a className="header__nav-list-link" href="#">
									Games
								</a>
							</li>
							<li>
								<a className="header__nav-list-link" href="#">
									Progress
								</a>
							</li>
							<li>
								<a className="header__nav-list-link" href="#">
									Awards
								</a>
							</li>
							<li>
								<img
									className="header__nav-settingsImage-elem"
									src={imgSettings}
									alt="image-settings"
								/>
							</li>
						</ul>
					</nav>
				</section>

				<section>
					<h1 className="header__title">{game.name}</h1>
					<p className="header__subtitle">{game.description}</p>
				</section>
				<section className="header__image-section">
					<div
						className="header__image-game"
						style={{ backgroundImage: `url(${game.image_url})` }}
					/>
					<div className="header__image-play-container">
						{' '}
						<img
							className="header__image-play"
							src={imgPlay}
							alt="image-play"
						/>
					</div>
				</section>
			</header>
		);
	}
}
export default Header;

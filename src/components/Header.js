import React from 'react';
import imgPlay from '../images/play-white@1x.png';
import imgSettings from '../images/settings-default.png';

class Header extends React.Component {
	render() {
		const { game } = this.props;
		return (
			<header>
				<section className="header__nav">
					<nav>
						<ul className="header__nav-list">
							<li>
								<p className="header__nav-list-link" href="#">
									Games
								</p>
							</li>
							<li>
								<p className="header__nav-list-link" href="#">
									Progress
								</p>
							</li>
							<li>
								<p className="header__nav-list-link" href="#">
									Awards
								</p>
							</li>
							<li>
								<img
									className="header__nav-settingsImage-elem"
									src={imgSettings}
									alt="settings"
								/>
							</li>
						</ul>
					</nav>
				</section>

				<section className="header__title--wrapper">
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
						<img className="header__image-play" src={imgPlay} alt="play" />
					</div>
				</section>
			</header>
		);
	}
}
export default Header;

import React from 'react';
import imgPlay from '../images/play-white@1x.png';
import NavigationBar from './NavigationBar';
import PropTypes from 'prop-types';

class Header extends React.Component {
	render() {
		const { game } = this.props;
		return (
			<header>
				<NavigationBar />

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

Header.propTypes = {
	game: PropTypes.object,
  };

export default Header;

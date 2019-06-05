import React from 'react';
import imgSettings from '../images/settings-default.png';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
	return (
		<section className="header__nav">
			<nav>
				<ul className="header__nav-list">
					<li>
						<Link to="/"className="header__nav-list-link" href="/">
							Games
						</Link>
					</li>
					<li>
						<a className="header__nav-list-link" href="/">
							Progress
						</a>
					</li>
					<li>
						<a
							className="header__nav-list-link"
							target="_blank"
							rel="noopener noreferrer"
							href="https://easypeasyapp.com/impact/"
						>
							Awards
						</a>
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
	);
};

export default NavigationBar;

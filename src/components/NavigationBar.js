import React from 'react';
import imgSettings from '../images/settings-default.png';


const NavigationBar = () => {
  return (
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
  );
}
 
export default NavigationBar;
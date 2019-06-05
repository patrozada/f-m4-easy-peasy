import React from "react";
import imgSettings from "../images/settings-default.png";

const NavigationBar = () => {
  return (
    <section className="header__nav">
<<<<<<< HEAD
					<nav>
						<ul className="header__nav-list">
							<li>
								<a className="header__nav-list-link" href="/home">
									Games
								</a>
							</li>
							<li>
								<a className="header__nav-list-link" href="/">
									Progress
								</a>
							</li>
							<li>
								<a className="header__nav-list-link" href="/">
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
=======
      <nav>
        <ul className="header__nav-list">
          <li>
            <a className="header__nav-list-link" href="/">
              Games
            </a>
          </li>
          <li>
            <a className="header__nav-list-link" href="/">
              Progress
            </a>
          </li>
          <li>
            <a className="header__nav-list-link" target="_blank" rel="noopener noreferrer" href="https://easypeasyapp.com/impact/">
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
>>>>>>> b7f5ec0e9fee326d98bcf6eeef0565b9129b9f95
  );
};

export default NavigationBar;

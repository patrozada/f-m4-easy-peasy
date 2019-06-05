![easy peasy logo](./src/images/201-logo@1x.png)




![adalab logo](./src/images/logo_adalab_155x61.png)

Easy-Peasy Feedback Feature.

This project is developed as a part of Adalab educational programme in cooperation with Easy Peasy. The objective was to add a functionality for users to share comments about the different games available in the EasyPeasy app with other parents and also give the developers an opinion about the game using a escale of 4 values.
This feature was developed within 4 days by a group of 4 junior front-end developers, as a last project in cooperation with a real company.

Installing / Getting started
All dependencies are saved in the package.json file included, so to get it running you only need to have node installed and then run npm install on your terminal. The run npm start to get it rendered in your browser.

Here's a list of the dependencies that you will have installed whrn running npm install:

    "dependencies": {
      "bootstrap": "^4.3.1",
      "node-sass": "^4.12.0",
      "prop-types": "^15.7.2",
      "react": "^16.8.6",
      "react-bootstrap": "^1.0.0-beta.9",
      "react-dom": "^16.8.6",
      "react-html-parser": "^2.0.2",
      "react-router-dom": "^5.0.0",
      "react-scripts": "3.0.1",
      "react-slick": "^0.24.0",
      "slick-carousel": "^1.8.1"
    },

Here are some samples of the user flow:

1-Landing page:
  Here parents can see the available games to play during that particular week:
  ![landing page](./src/images/home-page.png)
2-Game page:
  When the user clicks on play new game button all details are shown:
  ![game](./src/images/opposites-game.png)
  Here there is a carousel we have imported from the library slick-carousel where the instructions of the game are displayed and suggestions to make it more challenging.
  Below there is the button Share your idea, where the user can share comments with other parents in the following screen:
  ![comment](./src/images/comment-window.png)
  When the user sends her comment she will automatically be directed to the game page and her comment will be displayed in the comment section:
  ![comment displayed](./src/images/comment-displayed.png)
3-Finally the user can also send feedback to the app developpers using the mood buttons in the sticky bar.
  ![feedback](./src/images/feedback-bar.png)
  Once it is clicked the feedback is sent, the bar disappears and a modal is displayed so the user knows it worked:
  ![modal](./src/images/modal.png)

Initial Configuration
Some projects require initial configuration (e.g. access tokens or keys, npm i). This is the section where you would document those requirements.


"The code in this project is licensed under MIT license."


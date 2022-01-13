<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
<!-- [![Issues][issues-shield]][issues-url] -->
[![MIT License][license-shield]][license-url]
<!-- [![LinkedIn][linkedin-shield]][linkedin-url]  -->

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <!-- <a href="https://github.com/snowyPigeon/plan-my-walk">
    <img src="images/temp-logo.png" alt="Logo" width="80" height="80">
  </a> -->

<h3 align="center">Plan My Walk</h3>

  <p align="center">
    Plan My Walk is a mobile friendly web application with configurable map elements, developed for planning walking routes. Ideally, a walker could access a map and at the same time check for issues affecting the potential safety and enjoyment of a specific walking route, such as weather. Plan My Walk attempts to bring together the most commonly needed types of information not found on a map to support walk planning.
    <br />
    <a href="https://github.com/snowyPigeon/plan-my-walk"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/snowyPigeon/plan-my-walk">View Demo</a>
    ·
    <a href="https://github.com/snowyPigeon/plan-my-walk/issues">Report Bug</a>
    ·
    <a href="https://github.com/snowyPigeon/plan-my-walk/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

<p>Plan My Walk was originally built as a final year student project for a BSc Computing and IT course. The original application was written in JavaScript, HTML and CSS. This project takes the design and functionality of the original and further develops it as a modern React.js application.</p>
<p>Currently, Plan My Walk displays an interactive map centred on the United Kingdom and can use geolocation. The drawing, route matching and weather reporting used by the original application will also be features in this version. </p>

<!-- [![Product Name Screen Shot][product-screenshot]](https://example.com) -->

<!-- Here's a blank template to get started: To avoid retyping too much info. Do a search and replace with your text editor for the following: `github_username`, `repo_name`, `twitter_handle`, `linkedin_username`, `email`, `email_client`, `project_title`, `project_description` -->

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

- [Node.js](https://nodejs.org/en/)
- [React.js](https://reactjs.org/)
- [Bootstrap](https://getbootstrap.com)
- [Sass](https://sass-lang.com/dart-sass)
- [Mapbox](https://www.mapbox.com/) 

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

This is an example of how you may set up your project locally.
To get a local copy up and running follow these steps.

### Prerequisites

- Node
  Visit [Node.js](https://nodejs.org/en/download/) and select the appropriate download for your system.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/snowyPigeon/plan-my-walk.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Enter your Mapbox environment token in an env.local file.
   ```js
   REACT_APP_MAPBOX_ACCESS_TOKEN = "your-token-here"
   ```
   Remember to run `npm run start` after saving your env file, when previewing your work.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

To run a development version of this project, you will need to: 
1. Run the plan-my-walk server by navigating to that directory on your machine's CLI in a new window/tab. Checkout the appropriate branch and run `npm run`. 
2. Run the *compile:sass* script by navigating to the ggs-frontend directory on your machine's CLI in a new window/tab. Checkout the appropriate branch and run `compile:sass`. This will allow live updates to the style sheet based on instructions written in the src/scss directory.


<!-- Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources. -->

<!-- _For more examples, please refer to the [Documentation](https://example.com)_ -->

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

-  Feature 1 Route drawing
-  Feature 1 Route matching
-  Feature 3 Weather reporting

<!-- See the [open2issues](https://github.com/snowyPigeon/plan-my-walk/issues) for a full list of proposed features (and known issues). -->

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTRIBU3ING -->

<!-- ## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
1. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request2
<p align="right">(<a href="#top">back to top</a>)</p> -->

<!-- LICENSE -->
## License

Distributed under the GPL-3.0 License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Your Name - [@twitter_handle](https://twitter.com/twitter_handle) - email@email_client.com

Project Link: [https://github.com/snowyPigeon/plan-my-walk](https://github.com/snowyPigeon/plan-my-walk)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

- []()
- []()
- []()

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/snowyPigeon/plan-my-walk.svg?style=for-the-badge
[contributors-url]: https://github.com/snowyPigeon/plan-my-walk/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/snowyPigeon/plan-my-walk.svg?style=for-the-badge
[forks-url]: https://github.com/snowyPigeon/plan-my-walk/network/members
[stars-shield]: https://img.shields.io/github/stars/snowyPigeon/plan-my-walk.svg?style=for-the-badge
[stars-url]: https://github.com/snowyPigeon/plan-my-walk/stargazers
[issues-shield]: https://img.shields.io/github/issues/snowyPigeon/plan-my-walk.svg?style=for-the-badge
[issues-url]: https://github.com/snowyPigeon/plan-my-walk/issues
[license-shield]: https://img.shields.io/github/license/snowyPigeon/plan-my-walk.svg?style=for-the-badge
[license-url]: https://github.com/snowyPigeon/plan-my-walk/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png

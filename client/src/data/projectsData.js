import gitPortraitGif from "../assets/gitportrait.gif"
import devconGif from "../assets/devcon.gif";
import clothingAppGif from "../assets/clothingapp.gif";
import smartbrainGif from "../assets/smartbrain.gif";
import aircncGif from "../assets/aircnc.gif";

const projects = [
  {
    gif_src: gitPortraitGif,
    title: "GitPortrait",
    description: "Simple Next.js application to check your Github stats.",
    technologies: [
      "Next.js",
      "Chart.js",
      "Lottie Files",
    ],
    demo_link: "https://gitportrait.now.sh/",
    github_link: "https://github.com/diogofgomespinheiro/GitPortrait",
  },
  {
    gif_src: devconGif,
    title: "Devcon",
    description: "A web app to create developers profile/portfolio, share posts and get help from other developers.",
    technologies: [
      "ReactJS",
      "Redux",
      "Node.js",
      "MongoDB",
      "JWT",
      "Heroku"
    ],
    demo_link: "https://intense-reaches-17959.herokuapp.com/",
    github_link: "https://github.com/diogofgomespinheiro/devcon",
  },
  {
    gif_src: clothingAppGif,
    title: "Clothing App",
    description: "Fictional E-commerce store to buy clothes, with stripe payment integrated.",
    technologies: [
      "ReactJS",
      "Redux",
      "Redux-Saga",
      "Node.js",
      "Stripe",
      "Firebase",
      "Heroku"
    ],
    demo_link: "https://clothing-app-91219.herokuapp.com/",
    github_link: "https://github.com/diogofgomespinheiro/ClothingApp",
  },
  {
    gif_src: smartbrainGif,
    title: "FaceRecognition App",
    description: "A web app to detect faces and demographics through Clarifai API.",
    technologies: [
      "ReactJS",
      "Node.js",
      "PostgresSQL",
      "Docker",
      "Redis",
      "AWS Lambda",
      "Clarifai API"
    ],
    github_link: "https://github.com/diogofgomespinheiro/facerecognitionapp",
  },
  {
    gif_src: aircncGif,
    title: "Aircnc",
    description: "A simple web app to rent company spaces, made at Omnistack week from Rocketseat.",
    technologies: [
      "ReactJS",
      "Node.js",
      "React Native",
      "socket.io",
      "MongoDB"
    ],
    github_link: "https://github.com/diogofgomespinheiro/RocketSeatBootcamp",
  }
]

export default projects;
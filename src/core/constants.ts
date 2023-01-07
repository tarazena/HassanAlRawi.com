import {
  IHeader,
  ILink,
  ITextType,
  IWhatIdDoData,
  Technology,
} from "./interfaces";
import {
  faTwitter,
  faSoundcloud,
  faVimeo,
  faLinkedin,
  faFlickr,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export const WHAT_I_DO: IWhatIdDoData[] = [
  {
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/hassanalrawi-eb46f.appspot.com/o/Assets%2F1.png?alt=media&token=abfc3c63-3cb0-4e4a-bb28-860725105367",
    title: "Web Design",
    text: "Designing Websites/Web Apps from concepts to actual products, using Adobe Suite (Photoshop, Illustrator, etc) to implementing the code using React, Cloud, etc.",
  },
  {
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/hassanalrawi-eb46f.appspot.com/o/Assets%2F2.png?alt=media&token=146052f8-7aed-43c7-9448-3542a88db55d",
    title: "Development",
    text: "Building complex solutions for you needs, whether if you need an iOS app, Web Application, or Desktop Application, using the latest technologies.",
  },
  {
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/hassanalrawi-eb46f.appspot.com/o/Assets%2F3.png?alt=media&token=3a9056d9-0be0-42ec-a9c1-ff38ffb5a29d",
    title: "Graphic Design",
    text: "Designing Logos, Book Covers, Business Cards, Web Sites, Prototyping, using the best industry standard tools to deliver your business needs and your creative ideas!",
  },
  // {
  //   imageUrl: "https://www.hassanalrawi.com/img/service/4.png",
  //   title: "Photography",
  //   text: "Focusing on Landscape Photography, But i can take Good photos of whatever subject you need, Check my Flickr profile!",
  // },
  {
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/hassanalrawi-eb46f.appspot.com/o/Assets%2F5.png?alt=media&token=e84a043f-eb62-4bb0-b8d9-f5c86f10e41f",
    title: "Problem Solving",
    text: "Excellent debugging skills, If you have a technical problem, I can tell you whats wrong and how to fix it!",
  },
  {
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/hassanalrawi-eb46f.appspot.com/o/Assets%2F6.png?alt=media&token=64bb93c0-6dac-4f9a-8ad0-891ef1d9b89e",
    title: "Consultation",
    text: "Available for Consultation Services.",
  },
];

const FRONTEND: Technology[] = [
  {
    name: "React",
    logo: "https://firebasestorage.googleapis.com/v0/b/hassanalrawi-eb46f.appspot.com/o/Logos%2Freact.svg?alt=media&token=9ed974d5-7f8a-4553-8d8f-27bbd1c5023a",
    url: "https://reactjs.org/",
  },
  {
    name: "Vue.js",
    logo: "https://firebasestorage.googleapis.com/v0/b/hassanalrawi-eb46f.appspot.com/o/Logos%2Fvuejs-icon.svg?alt=media&token=11d13f6e-b56a-49f2-b030-3fde684e6c18",
    url: "https://vuejs.org/",
  },
  {
    name: "Angular",
    logo: "https://firebasestorage.googleapis.com/v0/b/hassanalrawi-eb46f.appspot.com/o/Logos%2Fangular.svg?alt=media&token=7faab6b9-f08f-4eeb-bd9e-41b86ac3cf51",
    url: "https://angular.io/",
  },
  {
    name: "Flutter",
    logo: "https://firebasestorage.googleapis.com/v0/b/hassanalrawi-eb46f.appspot.com/o/Logos%2FFlutter.svg?alt=media&token=9293be26-b2d4-4eac-b5a3-40cefd0b2d81",
    url: "https://flutter.dev/",
  },
  {
    name: "ASP.Net",
    logo: "https://firebasestorage.googleapis.com/v0/b/hassanalrawi-eb46f.appspot.com/o/Logos%2Fasp.net_api.svg?alt=media&token=32018791-3fb7-4003-9bc7-3167e7affc08",
    url: "https://www.asp.net",
  },
];

const BACKEND: Technology[] = [
  {
    name: "GO",
    logo: "https://firebasestorage.googleapis.com/v0/b/hassanalrawi-eb46f.appspot.com/o/Logos%2Fgolang-icon.svg?alt=media&token=55b078d1-63bd-4e9f-97ba-6f9342bb8432",
    url: "https://golang.org/",
  },
  {
    name: "C#",
    logo: "https://firebasestorage.googleapis.com/v0/b/hassanalrawi-eb46f.appspot.com/o/Logos%2Fcsharp.svg?alt=media&token=013ac874-bd01-49ab-9a78-8a023759e978",
    url: "https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/",
  },
  {
    name: "NodeJS",
    logo: "https://firebasestorage.googleapis.com/v0/b/hassanalrawi-eb46f.appspot.com/o/Logos%2FNode.js_logo.svg?alt=media&token=dc716841-5d07-4249-ab30-0416703a37e3",
    url: "https://nodejs.org/en/",
  },
  {
    name: "GraphQL",
    logo: "https://firebasestorage.googleapis.com/v0/b/hassanalrawi-eb46f.appspot.com/o/Logos%2Fgraphql-icon.svg?alt=media&token=37b45d53-43e7-40dd-b613-d777b63daa59",
    url: "https://graphql.org/",
  },
];

const LANGUAGES: Technology[] = [
  {
    name: "TypeScript",
    logo: "https://firebasestorage.googleapis.com/v0/b/hassanalrawi-eb46f.appspot.com/o/Logos%2Ftypescript.svg?alt=media&token=994d8e1f-2c20-4c80-a6da-1416a2982634",
    url: "https://www.typescriptlang.org/",
  },
  {
    name: "GO",
    logo: "https://firebasestorage.googleapis.com/v0/b/hassanalrawi-eb46f.appspot.com/o/Logos%2Fgolang-icon.svg?alt=media&token=55b078d1-63bd-4e9f-97ba-6f9342bb8432",
    url: "https://golang.org/",
  },
  {
    name: "Terraform",
    logo: "https://firebasestorage.googleapis.com/v0/b/hassanalrawi-eb46f.appspot.com/o/Logos%2Fterraformio-icon.svg?alt=media&token=be3d8807-0bb7-4efb-b1f9-c0feef878735",
    url: "https://www.terraform.io/",
  },
  {
    name: "Dart",
    logo: "https://firebasestorage.googleapis.com/v0/b/hassanalrawi-eb46f.appspot.com/o/Logos%2Fdartlang-icon.svg?alt=media&token=a69229ca-066f-4571-880e-ac50cc0659d6",
    url: "https://dart.dev/",
  },
  {
    name: "JavaScript",
    logo: "https://firebasestorage.googleapis.com/v0/b/hassanalrawi-eb46f.appspot.com/o/Logos%2Fjavascript-icon.svg?alt=media&token=6be40f0f-29c7-4978-b3b3-efa504e5a8e0",
    url: "https://www.javascript.com/",
  },
  {
    name: "SQL",
    logo: "https://firebasestorage.googleapis.com/v0/b/hassanalrawi-eb46f.appspot.com/o/Logos%2Fsql.svg?alt=media&token=22c83012-0a80-4602-817c-12ee5715ca38",
    url: "https://en.wikipedia.org/wiki/SQL",
  },
  {
    name: "Shell Script",
    logo: "https://firebasestorage.googleapis.com/v0/b/hassanalrawi-eb46f.appspot.com/o/Logos%2Fgnu_bash-icon.svg?alt=media&token=ca5cc852-6358-4125-bfb9-2bd57103b988",
    url: "https://en.wikipedia.org/wiki/Shell_script",
  },
  {
    name: "C#",
    logo: "https://firebasestorage.googleapis.com/v0/b/hassanalrawi-eb46f.appspot.com/o/Logos%2Fcsharp.svg?alt=media&token=013ac874-bd01-49ab-9a78-8a023759e978",
    url: "https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/",
  },
  {
    name: "C++",
    logo: "https://firebasestorage.googleapis.com/v0/b/hassanalrawi-eb46f.appspot.com/o/Logos%2Fc%2B%2B_Logo.svg?alt=media&token=3e6fd7bc-6d44-49b9-bc4f-e56f13a55aae",
    url: "http://www.cplusplus.com/",
  },
  {
    name: "Java",
    logo: "https://firebasestorage.googleapis.com/v0/b/hassanalrawi-eb46f.appspot.com/o/Logos%2Fjava-icon.svg?alt=media&token=eb444d0d-2452-4a3a-b0f0-f0e191c637eb",
    url: "http://www.oracle.com/technetwork/java/index.html",
  },
  {
    name: "Objective-C",
    logo: "https://firebasestorage.googleapis.com/v0/b/hassanalrawi-eb46f.appspot.com/o/Logos%2Fapple_objectivec-icon.svg?alt=media&token=f31faf9f-7a36-42e6-bf30-a1e20552c5f6",
    url: "https://developer.apple.com/library/content/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.htmlS",
  },
];

const DATABASES: Technology[] = [
  {
    name: "SQL",
    logo: "https://firebasestorage.googleapis.com/v0/b/hassanalrawi-eb46f.appspot.com/o/Logos%2Fsql.svg?alt=media&token=22c83012-0a80-4602-817c-12ee5715ca38",
    url: "https://en.wikipedia.org/wiki/SQL",
  },
  {
    name: "NoSQL",
    logo: "https://firebasestorage.googleapis.com/v0/b/hassanalrawi-eb46f.appspot.com/o/Logos%2Fdocumentdb.svg?alt=media&token=d1f97ebc-6030-4570-b88f-edc4dcf83498",
    url: "https://en.wikipedia.org/wiki/NoSQL",
  },
];

const CLOUD: Technology[] = [
  {
    name: "Azure",
    logo: "https://firebasestorage.googleapis.com/v0/b/hassanalrawi-eb46f.appspot.com/o/Logos%2Fmicrosoft_azure-icon.svg?alt=media&token=446d4b0b-f5ed-4087-8a98-22bf174c73d6",
    url: "https://azure.microsoft.com/en-us/",
  },
  {
    name: "AWS",
    logo: "https://firebasestorage.googleapis.com/v0/b/hassanalrawi-eb46f.appspot.com/o/Logos%2FAmazon_Web_Services_Logo.svg?alt=media&token=e873bcde-293c-46e3-9de2-89109f315c15",
    url: "https://aws.amazon.com/",
  },
  {
    name: "GCP",
    logo: "https://firebasestorage.googleapis.com/v0/b/hassanalrawi-eb46f.appspot.com/o/Logos%2Fgoogle-cloud-1.svg?alt=media&token=1d58b389-a2d5-45b0-9bcc-fc8207b6b46d",
    url: "https://cloud.google.com/",
  },
  {
    name: "Docker",
    logo: "https://firebasestorage.googleapis.com/v0/b/hassanalrawi-eb46f.appspot.com/o/Logos%2Fdocker-icon.svg?alt=media&token=18c10470-e455-4a71-9b37-c36368f62b8f",
    url: "https://www.docker.com/",
  },
  {
    name: "Snowflake",
    logo: "https://firebasestorage.googleapis.com/v0/b/hassanalrawi-eb46f.appspot.com/o/Logos%2Fsnowflake-icon.svg?alt=media&token=5bd77be6-5b10-42c6-b65c-18cab8f96359",
    url: "https://www.snowflake.com/",
  },
  {
    name: "Twilio",
    logo: "https://firebasestorage.googleapis.com/v0/b/hassanalrawi-eb46f.appspot.com/o/Logos%2Ftwilio-icon.svg?alt=media&token=a42c42a1-026a-4b4e-89d1-517fa94233ba",
    url: "https://www.twilio.com/",
  },
  {
    name: "PayPal",
    logo: "https://firebasestorage.googleapis.com/v0/b/hassanalrawi-eb46f.appspot.com/o/Logos%2Fpaypal-icon.svg?alt=media&token=eca9e833-1327-4c7b-92fc-1ccc02b7ea8f",
    url: "https://developer.paypal.com/home",
  },
];

const CURRENTLY_LEARNING: Technology[] = [
  {
    name: "Swift",
    logo: "https://firebasestorage.googleapis.com/v0/b/hassanalrawi-eb46f.appspot.com/o/Logos%2Fswift-icon.svg?alt=media&token=5a5ba62e-0ae8-43bc-b1f4-9a0738403ca2",
    url: "https://developer.apple.com/swift/",
  },
  {
    name: "Python",
    logo: "https://firebasestorage.googleapis.com/v0/b/hassanalrawi-eb46f.appspot.com/o/Logos%2Fpython-icon.svg?alt=media&token=ff9df326-87f2-4fd6-b570-23330668de53",
    url: "https://www.python.org/",
  },
  {
    name: "Rust",
    logo: "https://firebasestorage.googleapis.com/v0/b/hassanalrawi-eb46f.appspot.com/o/Logos%2Frust-lang-icon.svg?alt=media&token=fd534632-7bc3-4eed-9024-082495013bc1",
    url: "https://www.rust-lang.org/",
  },
];

export const HERO_TEXT: ITextType[] = [
  { text: "An Engineer", type: "text" },
  // { text: "🚀", type: "emoji" },
  { text: "A Designer", type: "text" },
  // { text: "❤️", type: "emoji" },
  { text: "A Developer", type: "text" },
  // { text: "👍", type: "emoji" },
  { text: "A Musician", type: "text" },
  // { text: "🎸", type: "emoji" },
];

export const PUBLIC_LINKS: ILink[] = [
  {
    icon: faTwitter,
    link: "https://twitter.com/hassanalrawi",
  },
  {
    icon: faSoundcloud,
    link: "https://soundcloud.com/hassan-ali-al-rawi",
  },
  {
    icon: faVimeo,
    link: "https://vimeo.com/user18375922",
  },
  {
    icon: faLinkedin,
    link: "https://www.linkedin.com/in/hassan-al-rawi-19112a87/",
  },
  {
    icon: faFlickr,
    link: "https://www.flickr.com/photos/tarazena",
  },
  {
    icon: faGithub,
    link: "https://github.com/tarazena",
  },
];

export const WHAT_I_USE: IHeader[] = [
  {
    title: "Languages",
    technologies: LANGUAGES,
  },
  {
    title: "Frontend",
    technologies: FRONTEND,
  },
  {
    title: "Backend",
    technologies: BACKEND,
  },
  {
    title: "Databases",
    technologies: DATABASES,
  },
  {
    title: "Cloud",
    technologies: CLOUD,
  },
  {
    title: "Interested in - Learning",
    technologies: CURRENTLY_LEARNING,
  },
];

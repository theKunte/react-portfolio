// Option 1: Import images directly (BEST - bundled with webpack)
// import project1Img from '../assets/images/projects/project1.png';
// import project2Img from '../assets/images/projects/project2.png';

// Option 2: Use public folder with PUBLIC_URL (your current approach)
// Option 3: Use external URLs (Firebase Storage, Imgur, Cloudinary, etc.)

const projects = [
  {
    title: 'Project One',
    desc: 'A demo project built with React and AWS.',
    tech: 'React, JSX, AWS',
    demo: 'http://example.com',
    github: 'http://github.com',
    // Use imported image: image: project1Img,
    // Or use public folder:
    image: `${process.env.PUBLIC_URL}/portfolio/project1/one.png`,
    // Or use Firebase Storage URL directly:
    // image: 'https://firebasestorage.googleapis.com/v0/b/react-portfolio-dashboar-d3461.appspot.com/o/portfolio%2Fproject1.png?alt=media&token=...',
  },
  {
    title: 'Project Two',
    desc: 'Another project showing UI work.',
    tech: 'React, CSS, Node',
    demo: 'http://example.com',
    github: 'http://github.com',
    image: `${process.env.PUBLIC_URL}/portfolio/project1/one.png`,
  },
  {
    title: 'Project Three',
    desc: 'A full-stack app using serverless services.',
    tech: 'React, Serverless, DynamoDB',
    demo: 'http://example.com',
    github: 'http://github.com',
    image: `${process.env.PUBLIC_URL}/portfolio/project1/one.png`,
  },
];

export default projects;

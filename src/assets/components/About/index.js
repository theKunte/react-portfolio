import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const About = () => {

    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    strArray={['A','b','o','u','t',' ','m','e']}
                    idx={15}/>
                </h1>
                <p>
                    Recent graduate in Application Development looking for new opportunities in Tech Companies.
                    I am very ambitious and excited to work with the latest technologies on interesting and diverse projects that improve
                    our lifes
                </p>
                <p  align="LEFT">>
                    If I need to define myself in one sentence that would be world traveler, passionate baker, adventure hiker, photography enthusiast!
                </p>
                <p>
                    Add some more.
                </p>

            </div>
        </div>
    )
}

export default About ;

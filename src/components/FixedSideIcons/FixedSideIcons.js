import'./FixedSideIcons.css';
import github_logo from '../../assets/img/github-logo.png';
import instagram_logo from '../../assets/img/instagram-logo.png';
import linkedin_logo from '../../assets/img/linkedin-logo.png';
import twitter_logo from '../../assets/img/twitter-logo.png'; 


const FixedSideIcons = () => {
    return(
        <div className='fixed-leftside'>
            <div class='fixed-side-icons'>
                <FixedSideIcon
                    link="https://github.com/ananyagarg22"
                    image={github_logo}
                    alternate="github-logo"
                />
                <FixedSideIcon
                    link="https://www.linkedin.com/in/ananyagarg2211/"
                    image={linkedin_logo}
                    alternate="linkedin-logo"
                />
                <FixedSideIcon
                    link="https://www.instagram.com/ananyagarg22/"
                    image={instagram_logo}
                    alternate="instagram-logo"
                />
                <FixedSideIcon
                    link="https://twitter.com/ananyagarg22"
                    image={twitter_logo}
                    alternate="twitter-logo"
                />
            <div class="fixed-side-line"></div>
            </div>
        </div>
    )
}
function FixedSideIcon({link,image,alternate}){
    return(
        <a className='links' href={link}>
            <img src={image} alt={alternate}/>
        </a>
    )
}
export default FixedSideIcons
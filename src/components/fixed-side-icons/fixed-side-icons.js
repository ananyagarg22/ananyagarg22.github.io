import'./Fixed-side-icons.css';
import github_logo from '../../assets/img/github-logo.png';
import instagram_logo from '../../assets/img/instagram-logo.png';
import linkedin_logo from '../../assets/img/linkedin-logo.png';
import twitter_logo from '../../assets/img/twitter-logo.png'; 


const FixedSideIcons = () => {
    return(
        <side className='side-icons'>
            <div class='fixed-side-icons'>
                <a className='links' href="https://github.com/ananyagarg22">
                <img src={github_logo} alt='github-logo'/>
                </a>
                <a className='links'href="https://www.linkedin.com/in/ananyagarg2211/">
                <img src={linkedin_logo} alt='link-logo'/>
                </a>
                <a className='links'href="https://www.instagram.com/ananyagarg22/">
                <img src={instagram_logo} alt='inst-logo'/>
                </a>
                <a className='links'href="https://twitter.com/ananyagarg22">
                <img src={twitter_logo} alt='twit-logo'/>
                </a>
            <div class="line"></div>
            </div>
        </side>
    )
}
export default FixedSideIcons

{/* <div id="body">
        <div class="fixed-side-icons">
                <a href="https://github.com/ananyagarg22"><img src="Images/github-logo.png"/></a>
                <a href="https://www.linkedin.com/in/ananyagarg2211/"><img src="Images/linkedin-logo.png"/></a>
           <a href="https://www.instagram.com/ananyagarg22/"><img src="Images/instagram-logo.png"/></a>
            <a href="https://twitter.com/ananyagarg22"><img src="Images/twitter-logo.png"/></a>
            <div class="line">
        </div>
</div> */}
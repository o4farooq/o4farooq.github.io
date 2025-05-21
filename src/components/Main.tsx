import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/o4farooq" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/o4farooq/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="mailto:o4farooq@uwaterloo.ca" target="_blank" rel="noreferrer"><MailIcon/></a>

          </div>
          <h1>Omer Farooq</h1>
          <p>Mechanical Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/o4farooq" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/o4farooq/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="mailto:o4farooq@uwaterloo.ca" target="_blank" rel="noreferrer"><MailIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
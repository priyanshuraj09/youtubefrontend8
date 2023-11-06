import "./HomePage.css";
import VideoComponent from "./videocomponent";
import logo from "./youtubelogo.jpg"


const HomePage=()=>{
    return(
    <div className="wrapper">
        <div className="header">
            <div className="logo" ><div class="h1b"><img src={logo} className="ytphoto"></img></div></div>
            <div className="search"><div class="h2a"></div><div class="h2b"></div></div>
            <div className="signin">
                <label for="signin">Signin</label>
                <input type="button" name="signin" id="signin"/></div>
        </div>
        <div className="container">
            <div className="side">
                <div className="HOME"></div>
                <div className="ABOUT"></div>
                <div className="CONTACT US"></div>
           
                <div className="HOLLYWOOD"></div>
            </div>
            <div className="main">
              
             
                <VideoComponent />
                <VideoComponent />
                <VideoComponent />
                <VideoComponent />
                <VideoComponent />
                <VideoComponent />
                <VideoComponent />
                <VideoComponent />
                <VideoComponent />
                <VideoComponent />
                <VideoComponent />
                <VideoComponent />
                <VideoComponent />
                <VideoComponent />
                <VideoComponent />
                <VideoComponent />
                <VideoComponent />


               
            </div>
        </div>
    </div>
);};
export default HomePage;

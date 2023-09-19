import React from 'react'; 
import './App.css';
import 'font-awesome/css/font-awesome.min.css'; 
import beeLogo from '/Users/richardchristandi/react-website/src/bee.jpg';
import google from '/Users/richardchristandi/react-website/src/google.png';
import bee1 from '/Users/richardchristandi/react-website/src/bee1.png';
import bee2 from '/Users/richardchristandi/react-website/src/bee2.webp';
import bee3 from '/Users/richardchristandi/react-website/src/bee3.png';
import chat from '/Users/richardchristandi/react-website/src/notification icon.jpeg';
import notification from '/Users/richardchristandi/react-website/src/bell.png';
import richard from '/Users/richardchristandi/react-website/src/richard.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={google} className="logo" alt="logo"/>
        <div className='search-container'>
          <i className="fa fa-search search-icon"></i>
          <input type="text" placeholder="  Search Company..." className="search-bar" />
        </div>
        <div className="icons"> 
          <img src={notification} alt="notifaction" className="app-image" />
          <img src={chat} alt="chat" className="app-image" />
        </div> 
      </header>

    <div className="image-box">
      <img src={bee1} alt="bee-1" className="app-image" />
    </div>
    <div className="image-box">
        <img src={bee2} alt="bee-2" className="app-image" />
    </div>
    <div className="image-box">
        <img src={bee3} alt="bee-3" className="app-image" />
    </div>


      <main className="main-content">
        <aside className="about-box"> 
        <img src={beeLogo} className="logo" alt="logo" />
        <h2>Save the Bees Community</h2>
        <p>10,203 members</p>
        <p>Description</p>
        </aside>

        <div className="profile-pic-container">
          <img src={richard} alt="profile" className="profile-pic" />
        </div>

        <div className="post-container">
          <div className="headline"> Save the Bees Topic</div>
          <textarea className="text-area" placeholder="Share your thoughts!"></textarea>

          <div className="action-buttons"> 
            <button className="add-photo"> 📷 </button>
            <button className="add-photo"> 📎 </button>
            <button className="add-photo"> 😊 </button>
          </div>

          <div className="post-button-container"> 
            <button className="draft-button"> Draft</button>
            <button> Post</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

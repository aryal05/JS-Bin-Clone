import React from 'react'

const Header = ({ visibleTabs, handleTabClick }) => {
  return (
    <>
     <header className="js-bin-head">
        <img src="images/logo.png" alt="JS Bin Logo" />
        <div className="file">
          <ul>
            <li>File</li>
            <li>Add Library</li>
            <li>Share</li>
          </ul>
        </div>
        <div className="buttons">
          <button
            id="html-tab"
            className={visibleTabs.html ? 'active' : ''}
            onClick={() => handleTabClick('html')}
          >
            HTML
          </button>
          <button
            id="css-tab"
            className={visibleTabs.css ? 'active' : ''}
            onClick={() => handleTabClick('css')}
          >
            CSS
          </button>
          <button
            id="js-tab"
            className={visibleTabs.js ? 'active' : ''}
            onClick={() => handleTabClick('js')}
          >
            JavaScript
          </button>
          <button
            id="console-tab"
            className={visibleTabs.console ? 'active' : ''}
            onClick={() => handleTabClick('console')}
          >
            Console
          </button>
          <button
            id="output-tab"
            className={visibleTabs.output ? 'active' : ''}
            onClick={() => handleTabClick('output')}
          >
            Output
          </button>
        </div>
        <div className="about">
          <button className="login">Login And Register</button>
          <ul>
            <li>Blog</li>
            <li>Help</li>
          </ul>
        </div>
      </header>
    
    
    
    
    
    </>
  )
}

export default Header
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="main">
      <div className="header">
        <div>
          <h1>Aria Store </h1>
        </div>
        <div className="headerPages">
          <h3>Home</h3>
          <h3>About</h3>
          <h3>Works</h3>
        </div>
      </div>
      <div className="threeMainBoxes">
        <div className="box1">
          <h3>Home</h3>
          <h3>Cart</h3>
          <h3>Favorites</h3>
          <h3>Settings</h3>
        </div>
        <div className="box2">
          <div className="sellerContainer">
            <h3>Top Sellers</h3>
            <div className="sellers">
              <div className="seller">1</div>
              <div className="seller">2</div>
              <div className="seller">3</div>
              <div className="seller">4</div>
              <div className="seller">5</div>
              <div className="seller">6</div>
              <div className="seller">7</div>
              <div className="seller">8</div>
            </div>
          </div>
          <div className="articles">
            <div className="article">1</div>
            <div className="article">2</div>
            <div className="article">3</div>
            <div className="article">4</div>
          </div>
        </div>
        <div className="box3">
          <div className="top3">Latest</div>
          <div className="bottom3">
            <div className="element">1</div>
            <div className="element">2</div>
            <div className="element">3</div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default App

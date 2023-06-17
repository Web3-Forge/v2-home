import React from 'react'
import earthImg from '../assets/earth.png';
import robotImg from '../assets/robot-2.png';
import rocketImg from '../assets/rocket.png';



function LandingComponent() {
  return (
    <div>
      <div class="row">
        <div class="col-12 ">
          <div class="left-content">
            <div class="content">
              <h1>Welcome to Web3Forge</h1>
              <h2>Understand Web3 technology and build Dapps collectively.</h2>
              <h3>Learn, create, and own your future</h3>
              <button>Get Started</button>
              <button>Go to Dashboard</button>
            </div>
            <div className='earth-image'>
              <img src={earthImg} alt="earthImage" />
            </div>
            <div className="rocket-image slide-in-bottom-right ">
              <img src={rocketImg} alt="rocketImg" />
            </div>
            <div className='robot-image slide-in-bottom-right'>
              <img src={robotImg} alt="robotImg" />
            </div>
          </div>
        </div>
        
      </div>


    </div>

  )
}

export default LandingComponent
import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <div>
      <div className="Home">
        <div className="HomeBG"></div>
        <div className="HomeGroupA">
          <h1>学会<br />design和code<br /><span>React apps</span></h1>
          <p>最完美的关于最佳工具和设计体系的课程。学会使用 React 和 Swift 制作原型和打造应用程序</p>
          <div className="HomeBtn"><button>播放视频</button></div>
        </div>
        <div className="HomeGroupB">
          <Link to="/"><img src={require('../images/logo-sketch.png')} width="50" /></Link>
          <Link to="/"><img src={require('../images/logo-figma.png')} width="50" /></Link>
          <Link to="/"><img src={require('../images/logo-invision.png')} width="50" /></Link>
          <Link to="/"><img src={require('../images/logo-react.png')} width="50" /></Link>
          <Link to="/"><img src={require('../images/logo-framer.png')} width="50" /></Link>
          <Link to="/"><img src={require('../images/logo-studio.png')} width="50" /></Link>
          <Link to="/"><img src={require('../images/logo-xcode.png')} width="50" /></Link>
          <Link to="/"><img src={require('../images/logo-swift.png')} width="50" /></Link>
        </div>
        <div className="HomeGroupC">
          <Link to="/page-2/"><button>获得 Pro 50% 的折扣</button></Link>
          <p id="HGC1">限时优惠</p>
          <p id="HGC2">每月 4.50 美元(按年订阅)随时可退订，不同担心。可从版本 2 免费升級。</p>
        </div>
        <svg width="100%" height="172" viewBox="0 0 100% 172" fill="none">
          <path fill="white">
            <animate repeatCount="indefinite" fill="freeze" attributeName="d" dur="10s" values="M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z;
            M0 86.3149C316 86.315 444 159.155 884 51.1554C1324 -56.8446 1320.29 34.1214 1538 70.4063C1814 116.407 2156 188.408 2560 86.315V232.317L0 232.316V86.3149Z;
            M0 53.6584C158 11.0001 213 0 363 0C513 0 855.555 115.001 1154 115.001C1440 115.001 1626 -38.0004 2560 53.6585V199.66L0 199.66V53.6584Z;
            M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z;" />
          </path>
        </svg>
      </div> 
      <div className="Card">
          <h2>14 门课程，即将推出更多</h2>
      </div>
    </div>
  </Layout>
)

export default IndexPage


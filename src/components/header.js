import React from 'react'
import { Link } from 'gatsby'
import './header.css'

const Header = ({ siteTitle }) => (
  <div>
    <div className="Header">
      <div className="HeaderGroup">
        <Link to="/index.html" id="Home"><div className="HomeIMG"></div></Link>
        <Link to="/courses" className="HeaderGroupLink"><button>课程</button></Link>
        <Link to="/downloads" className="HeaderGroupLink"><button>下载</button></Link>
        <Link to="/pricing" className="HeaderGroupLink"><button>价格</button></Link>
        <Link to="/login" className="HeaderGroupLink"><button>登录</button></Link>
        <Link to="/" id="HeaderGroupBuy"><button>免费试用</button></Link>
      </div>
    </div>
  </div>
)

export default Header

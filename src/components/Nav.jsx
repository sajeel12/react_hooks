import React from 'react'
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <div>
      <ul className='navul' style={{display: 'flex', listStyle: 'none'}} >
        <Link to="/" >  <li>useState</li></Link>
        <Link to='useeffect'>  <li>useEffect</li></Link>
        <Link to='usecontext' > <li>useContext</li></Link>
        <Link to='usememo' > <li>useMemo;</li></Link>
        <Link to='useref' > <li>useRef;</li></Link>
      </ul>
    </div>
  )
}

export default Nav
import Link from 'next/link'
import { useRouter } from 'next/router'
import { makeStyles } from '@material-ui/styles'
import { useState } from 'react'
import LoginIcon from '@material-ui/icons/VpnKey'
import RegisterIcon from '@material-ui/icons/MeetingRoom'
 
interface INavbarProps {
}

const useStyles = makeStyles({
  item: {
    padding: '1rem',
    fontWeight: 300,
    fontSize: '1.1rem'

  },
  itemActive: {
    borderBottom: '1px dashed #cccccc',
    fontWeight: 400,
  },
  logo: {
    backgroundImage: `url(/images/nike-4-logo-svg-vector.svg)`,
    width: 70,
    height: 40,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    fill: 'white',
    display: 'inline-block',
    margin: '1rem'
  },
  collapsedMenu: {
    position: 'absolute',
    fontWeight: 'normal',
    top: '3rem',
    '& li': {
      top: '5rem',
      padding: 5,
      border: '1px solid black'
    }
  }
})

const Navbar: React.FunctionComponent<INavbarProps> = (props) => {
  const classes = useStyles(props)
  const router = useRouter()
  const pathname = router.pathname 
  const [isCollapsed, setIsCollapsed] = useState(false);
  const toggleCollapsed = (e) => {
    setIsCollapsed(!isCollapsed)
  }

  const collapsedMenu = (isCollapsed ? <ul className={classes.collapsedMenu + ' top-7'}>
    <li><Link href='/login'><a><LoginIcon /> Đăng nhập</a></Link></li>
    <li><Link href='/register'><a><RegisterIcon /> Đăng ký</a></Link></li>
  </ul> : '')

  return (<nav className='flex'>
      <Link href='/'><a>
        <div className={classes.logo}></div>
      </a>
      </Link>
      <ul className='flex-grow list-none flex sticky top-0 items-center justify-end'>
          <li className={`${classes.item} ${pathname === '/' ? classes.itemActive : ''}`}><Link href='/'><a>Trang chủ</a></Link></li>
          <li className={`${classes.item} ${pathname === '/posts' ? classes.itemActive : ''}`}><Link href='/posts'><a>Bài viết</a></Link></li>
          <li className={`${classes.item} ${pathname === '/contact' ? classes.itemActive : ''}`}><Link href='/contact'><a>Liên hệ</a></Link></li>
          <li onMouseLeave={toggleCollapsed} onMouseEnter={toggleCollapsed} className={`${classes.item} + ' cursor-pointer w-36 select-none`}>
            <a>Quản lý</a>
            {collapsedMenu}
          </li>
          
      </ul>
  </nav>)
};

export default Navbar;

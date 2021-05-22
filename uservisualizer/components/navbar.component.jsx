import Link from 'next/link'
import navbarStyles from '../styles/navbar.module.css'
import { Tabs, Tab, TabPanel } from '@material-ui/core'


function Navbar(){

    return(
        <div className={navbarStyles.linkContainter}>
            <Tabs  indicatorColor="secondary" value={0} aria-label="simple tabs example">
            <Link href="/">
                <Tab label="Home" className={navbarStyles.button} />
            </Link>
            </Tabs>
        </div>
    )
}

export default Navbar;
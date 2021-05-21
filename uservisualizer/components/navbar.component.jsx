import Link from 'next/link'
import navbarStyle from '../styles/navbar.module.css'
import { Button,AppBar, Tabs, Tab, TabPanel } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";


function Navbar(){

    return(
        <div className={navbarStyle.linkContainter}>
            <Tabs  indicatorColor="secondary" value={0} aria-label="simple tabs example">
            <Link href="/">
                <Tab label="Home"/>
            </Link>
            </Tabs>
        </div>
    )
}

export default Navbar;
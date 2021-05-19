import Link from 'next/link'
import navbarStyle from '../styles/navbar.module.css'
import { Box } from '@material-ui/core'

function Navbar(){

    return(
        <Box className={navbarStyle.linkContainer}>
            <Link href="/">Home</Link>
            <Link href="/user">User</Link>
        </Box>
    )
}

export default Navbar;
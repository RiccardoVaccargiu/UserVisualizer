import Link from 'next/link'
import navbarStyle from '../styles/navbar.module.css'
import { Box, Button } from '@material-ui/core'

function Navbar(){

    return(
        <Box className={navbarStyle.linkContainter}>
            <Button><Link href="/">Home</Link></Button>
        </Box>
    )
}

export default Navbar;
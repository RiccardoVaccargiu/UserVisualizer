import { AppBar, Button, Box } from '@material-ui/core'
import LayoutStyles from '../styles/layout.module.css'

const Header = () => {

    return (
        <>
        <Box style={{height: '50px', display: 'flex', justifyContent: 'center',background: 'black', color: 'white'}}>
            welcome
        
        </Box>
        <Button>HELLO</Button>
        </>
    )
}

export default Header;
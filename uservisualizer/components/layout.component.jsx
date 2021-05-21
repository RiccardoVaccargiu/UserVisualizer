import Navbar from './navbar.component'
import Header from './header.component'

const Layout = ({ children }) => {

    return(

            <div>
                <Header />

                <Navbar />

                {children}
            </div>
    );
}

export default Layout;
import layoutStyles from '../styles/layout.module.css'
import Search from './search.component'


const Header = () => {

    return (
        <>
        <div className={layoutStyles.headerbox}>
            <div className={layoutStyles.title}>Welcome, here you can check the users</div>
            <div>
                <Search />
            </div>
        </div>
        </>
    )
}

export default Header;
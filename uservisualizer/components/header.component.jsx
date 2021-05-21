import layoutStyles from '../styles/layout.module.css'
import Search from './search.component'

const Header = () => {

    return (
        <>
        <div className={layoutStyles.headerbox}>
            welcome
        </div>
        <div classNmae={layoutStyles.search}>
            <Search />
        </div>
        </>
    )
}

export default Header;
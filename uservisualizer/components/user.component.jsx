import { Card } from '@material-ui/core'
import userStyles from '../styles/usercomponent.module.css'

//This component renders a single user of the list of users
const User = ({ user }) => {

    return(
        <div>
        <Card className={userStyles.card}>
        {user.name}<br />
        {user.email}<br />
        {user.gender}<br />
        {user.id}<br />
        {user.status}<br />
        </Card>
        </div>
    )
}

export default User;
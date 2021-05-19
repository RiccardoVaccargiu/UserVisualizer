import { Card } from '@material-ui/core'
import userStyles from '../styles/usercomponent.module.css'

//This component renders a single user of the list of users
const User = ({ user }) => {

    return(
        <Card className={userStyles.card}>
        {user.name}
        {user.email}
        {user.gender}
        {user.id}
        {user.status}
        </Card>
    )
}

export default User;
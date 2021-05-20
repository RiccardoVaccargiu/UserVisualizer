import Link from 'next/link'
import { Card, Button, CardHeader, Avatar } from '@material-ui/core';
import userStyles from '../styles/usercomponent.module.css';

//This component renders a single user of the list of users
const User = ({ user }) => {

    return(
        <div style={{margin: 'auto'}}>
        <Link href='/user/[id]' as={`/user/${user.id}`}>{/*each card is a link to user specs*/}
            <a>
            <Card className={userStyles.card}>
                <CardHeader
                avatar={
                <Avatar aria-label="recipe">
                    {user.name.charAt(0)}
                </Avatar>
                }
                />
                {user.name}<br />
                {user.email}<br />
                {user.status}<br />
            </Card>
            </a>
        </Link>
        </div>
    )
}

export default User;
import axios from 'axios';
import { Card, Typography } from '@material-ui/core';
import userspecsStyles from '../../../styles/userspecs.module.css';

const user = ({ user }) => {

    return(
    <div className={userspecsStyles.container}>
        <Card className={userspecsStyles.card} >
        <Typography variant='h3'>{user.name}</Typography>
        <Typography variant='h6'>{user.status}</Typography>
        <br />
        <br />
        <Typography>contacts:</Typography>
        <Typography variant='h6'>{user.email}</Typography>
        
        
        </Card>
    </div>
    )
}

export const getServerSideProps = async(context) => {

    let user = {};
    await axios.get(`https://gorest.co.in/public-api/users?id=${context.params.id}`)
    .then(
        res => {user = res.data.data[0]}
    )

    return{
        props: {
            user
        }
    }
}

export default user;
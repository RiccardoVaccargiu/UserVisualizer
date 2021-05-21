import axios from "axios";
import { Card, Typography } from '@material-ui/core'
import userspecsStyles from '../../../styles/userspecs.module.css'

const Username = ({ user }) => {

    return(
        <>
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
        </>
    )
}

//fetching data on each request when user triggers the search
export const getServerSideProps = async(context) => {

    let user = {};
    
    await axios.get(`https://gorest.co.in/public-api/users?name=${context.params.name}`)
    .then(res => {
        user = res.data.data[0]
        console.log("fetch: ", res)
    })
    .catch(err => console.log("ciao"))

    
    return{
        props: {
            user
        }
    }

}

export default Username;
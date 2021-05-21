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

//called at build time on server-side
export const getStaticProps = async(context) => {

    let user = {};
    await axios.get(`https://gorest.co.in/public-api/users?id=${context.params.id}`)
    .then(res => {
        user=res.data.data[0]
    })
    .catch(() => console.log("This user does not exist..."))
    
    
    return {
        //object with the props that will be received by the page component (index.js)
        props: {
            user
        }
    }
}

//called at build time on server-side.
//defines a list of paths that have to be rendered
export const getStaticPaths = async() =>  {

    let user = {};
    let ids;
    let paths;
    await axios.get(`https://gorest.co.in/public-api/users`)
    .then(res => {
        
        ids = res.data.data.map(user => 
            user.id
        )

        //saving path to pre-render
        paths = ids.map(id => (
            {params: {id: id.toString()}}
        ))

            console.log("PATH: ",paths)
        //user=res.data.data[0]
    })
    .catch(() => console.log("This user does not exist..."))
    
    return{
        paths,
        fallback: false //any page not return by getStaticPaths will resolve in a 404 page
    }
}

export default user;
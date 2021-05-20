import { useRouter } from 'next/router';
import axios from 'axios';

const user = ({ user }) => {

    return(
        <>
        this is user {user.name}
        </>
    )
}

export const getServerSideProps = async(context) => {

    let user = {};
    await axios.get(`https://gorest.co.in/public-api/users?id=${context.params.id}`)
    .then(res => {
        user=res.data.data[0]
    })
    .catch(() => console.log("This user does not exist..."))
    
    
    return {
        props: {
            user
        }
    }
}

export default user;
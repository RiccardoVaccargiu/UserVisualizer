import { useEffect, useState } from "react";
import axios from 'axios';
import User from './user.component';

const UsersList = () => {

    const USERS_URL = 'https://gorest.co.in/public-api/users?page=';
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(0)

    useEffect( async() => {

        await axios.get(USERS_URL)
        .then((response) => {
            console.log(response + `${page}`)
            
            if(response.data.meta.page <= response.data.meta.pages){
                setPage(response.data.meta.page + 1) //saving next page only if exists
            }
            setUsers(response.data.data) //saving users array
        })
        .catch(() => console.log('Request failed...'))

    }, [])

    return(
        <div>
            {users.map((user) => (

                <User user={user} />
            ))}
        </div>
    )
}

export default UsersList;
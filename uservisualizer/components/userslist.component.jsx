import { useEffect, useState } from "react";
import axios from 'axios';
import User from './user.component';
import { GridList, ListItem } from "@material-ui/core";
import usersStyles from '../styles/userslist.module.css'

const UsersList = () => {

    const BASE_URL = 'https://gorest.co.in/public-api/users?page=';
    const [page, setPage] = useState(0);
    const [usersUrl, setUsersUrl] = useState(BASE_URL);
    const [users, setUsers] = useState([]);

    useEffect( async() => {

        await axios.get(usersUrl+`${page}`)
        .then((response) => {

            /*if(response.data.meta.pagination.page <= response.data.meta.pagination.pages){
                setPage(response.data.meta.pagination.page) //saving next page only if exists
            }*/

            setUsers([...users, ...response.data.data]) //saving users array
        })
        .catch(() => console.log('Request failed...'))

    }, [usersUrl])

    useEffect(() => {

        console.log(users)
    }, [users])

    const loadMore = () => {

        console.log("PAGE: ",page)
        console.log(usersUrl+page)
        setPage(page+1)
        setUsersUrl(BASE_URL+page)
        
    }

    return(
        <div>
            <div style={{width: '100%', display: 'flex', flexWrap: 'wrap'}}>
                {users.map((user, index) => (
                    <User key={index} user={user} />
                ))}
            </div>
            <button onClick={loadMore}>Load More</button>
        </div>


    )
}

export default UsersList;
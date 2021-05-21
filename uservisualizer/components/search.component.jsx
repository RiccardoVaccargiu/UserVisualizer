import { useRouter } from 'next/router'
import Link from 'next/link'
import { useState } from 'react';
import { TextField, Button } from '@material-ui/core'

const Search = () => {

    const router = useRouter();
    const [username, setUsername] = useState('');

    const onChangeText = (e) => {
        
        setUsername(e.target.value)
    }

    return(
        <>
        <TextField type="text" onChange={onChangeText} />

        <Link href="/username/[name]" as={`/username/${username}`}><Button>Search</Button></Link>
        </>
    )
}

export default Search;
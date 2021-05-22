import Link from 'next/link'
import { useState } from 'react';
import { TextField, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

//Material-ui custom styled component
const useStyles = makeStyles({
    root: {
      borderRadius: 3,
      border: 0,
      color: 'white',
      height: 48,
      padding: '0 30px',
      '& label.Mui-focused': {
        color: '#f50057',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: '#f50057',
        },
        '&:hover fieldset': {
          borderColor: '#f50057',
        },
      },
    },

    input: {
        color: 'white',
        '&:placeholder': {
            textOverflow: 'ellipsis !important',
            color: 'white'
          }
    },
    button: {
        height: '55px',
        color: 'white',
        '&:hover': {
            color: '#f44336'
        }
    }
  });

const Search = () => {

    const classes = useStyles();
    const [username, setUsername] = useState('');
    
    const onChangeText = (e) => {
        
            setUsername(e.target.value)
            console.log(username)
    }

    return(
        <div>
        <TextField
        className={classes.root}
        InputProps={{className: classes.input}}
        variant="outlined"
        color="secondary" placeholder="Type a name to search" type="text" onChange={onChangeText} />
        
        {username.length > 0 ?
        <Button variant="outlined" color="secondary" className={classes.button}>
            <Link href="/username/[name]" as={`/username/${username}`}>Search</Link>       
        </Button>
        : ""
        } 
        </div>
    )
}

export default Search;
import { Button, List, ListItem,  ListItemAvatar, ListItemText, Modal, Box} from '@mui/material';
import db from './firebase';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

function Todo(props) {

    const [open, setOpen] = useState(false);
    const [input, setInput] = useState('');
    const handleOpen =() =>{
        setOpen(true);
    };

    const updateTodo = () =>{
        db.collection('Todos').doc(props.todo.id).set({
            todo: input
        }, {merge: true })
        setOpen(false);
    }
    return (
        <>
        <Modal
        open ={open}
        onClose={e => setOpen(false)} 
        > 
            <Box sx={style}>
                <input value={input} onChange={event => setInput(event.target.value)}/>
                <Button onClick={updateTodo} color ='success'>UPDATE TODO</Button>
            </Box>
        </Modal>
        <List>
        <ListItemAvatar>
        </ListItemAvatar>
         <ListItem>
            <ListItemText primary={props.todo.todo} secondary="Deadline: ⏳" />
         </ListItem>
         <Button onClick={e => setOpen(true)}>EDIT</Button>
         <Button onClick={event => {
             db.collection('Todos').doc(props.todo.id).delete()}}  color ='error'>DELETE</Button>
        </List>
        </>
    )
}

export default Todo

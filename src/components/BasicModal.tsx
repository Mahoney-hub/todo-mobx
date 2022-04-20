import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import SettingsIcon from '@mui/icons-material/Settings';
import IconButton from '@mui/material/IconButton';
import {TextField} from '@mui/material';
import {useState} from 'react';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

type BasicModalType = {
    changeTaskTitle: (newTitle: string) => void
}

export const BasicModal = ({changeTaskTitle}: BasicModalType) => {
    const [title, setTitle] = useState('')
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        changeTaskTitle(title)
        setOpen(false);
    }

    return (
        <div>
            <IconButton onClick={handleOpen}>
                <SettingsIcon/>
            </IconButton>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <TextField fullWidth
                               value={title}
                               onChange={(e) => setTitle(e.currentTarget.value)}
                    />
                </Box>
            </Modal>
        </div>
    );
}
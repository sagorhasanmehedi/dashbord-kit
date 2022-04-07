import React from 'react';
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Fade, MenuItem } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';


const MenuIcon = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <IconButton
                aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={{ color: '#fff' }}
            >
                <MoreVertIcon />
            </IconButton>
            <Menu
                id="fade-menu"
                MenuListProps={{
                    'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                <Link to='/editproject'>
                    <MenuItem sx={{ color: '#222', fontSize: '14px' }} onClick={handleClose}> <EditIcon sx={{ color: '#222', fontSize: '16px', mr: 1 }} /> Edit Project</MenuItem>
                </Link>
                <MenuItem sx={{ color: '#222', fontSize: '14px' }} onClick={handleClose}> <DeleteIcon sx={{ color: '#222', fontSize: '16px', mr: 1 }} /> Delete Project</MenuItem>
            </Menu>
        </div>
    );
};

export default MenuIcon;
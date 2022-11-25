import React from 'react'
import { AppBar, Toolbar, styled, Typography, Input, Badge, Avatar ,Menu, MenuItem } from '@mui/material';
import { Mail, Notifications, Pets } from '@mui/icons-material'
import { useState } from 'react';
// import Input from '@mui/material'
// import Badge from '@mui/material';



const StyledToolbar = styled(Toolbar)({ 
display:"flex",
justifyContent:"space-between"
});

const Search = styled("div")(({theme}) =>({ 
    backgroundColor: "white",
    padding: "1 10px",
    borderRadius: theme.shape.borderRadius,
    width:"40%"

}));

const Icons = styled("Box")(({theme}) =>({ 
    display: "none",
    alignitem:"center",
    gap:"20px",
 [theme.breakpoints.up("sm")]:{ 
       display:"flex"
 }
}));


const UserBox = styled("Box")(({theme}) =>({ 
    display: "flex",
    alignitem:"center",
    gap:"10px",
    [theme.breakpoints.up("sm")]:{ 
      display:"none"
}
}));

const Navbar = ()=>{ 
    const [open, setOpen] = useState(false)
    return( 
    <AppBar position= "static"> 
        <StyledToolbar> 
            <Typography vaitant="h6" sx={{display: {xs: "none", sm: "block"}}}>LAMP DEV</Typography>
            <Pets sx={{display: {xs: "block", sm: "none"}}}></Pets>

            <Search> 
                <Input placeholder='search...' />
            </Search>
            <Icons>  
                <Badge badgeContent={4} color="error">
                <Mail/>
                </Badge> 
                <Badge badgeContent={2} coloe="error"> 
                    <Notifications/>
                </Badge>
                <Avatar  sx={{width:30, height:30}} src="/static/images/avatar/3.jpg"
                onClick={e=>setOpen(true)}> 
                </Avatar>
                 </Icons> 
                 <UserBox onClick={e=>setOpen(true)}> 
                 <Avatar  sx={{width:30, height:30}} src="/static/images/avatar/3.jpg"> 
                </Avatar>
                <Typography variant="span">john</Typography>
                 </UserBox>
            </StyledToolbar> 
            <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) =>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
                 
    </AppBar>
    );
};

export default Navbar;
import { Fab, 
        Tooltip,
        Modal,
        Typography,
        styled , 
        Avatar, 
        TextField,
        ButtonGroup, 
        Stack,
        Button
    } from "@mui/material"
    
import React from "react";
import { useState } from "react";
import { Add as AddIcon, DateRange, EmojiEmotions, Image, VideoCameraBack } from "@mui/icons-material"
import { Box } from "@mui/material";

const StyledModal = styled(Modal)({ 
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
});

const UserBox = styled(Box)({ 
    display:"flex",
    alignItems:"center",
    gap:"10px",
    marginBottom:"20px"
});

const Add = () =>{ 
    const [open,setOpen] = useState(false)
    return( 
        <div> 
            <Tooltip onClick={(e) =>setOpen(true)}
            title="Delete" 
            sx={{ 
                postion:"fixed",
                bottom : 20,
                left:{ xs:"cals(50% - 25px" , md:30},
           }}
        > 
        <Fab color="primary" aria-label="Add"> 
            <AddIcon/>
        </Fab>
      </Tooltip>
      < StyledModal
        open={open}
        onClose={e =>setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={400} height={280}
         bgcolor={"background.default"}
         color={"text.primary"} 
         p={3} borderRadius={5}>
        
          <Typography variant="6" color="gray" textAlign="center">Create post</Typography>
          <UserBox> 
            <Avatar src="/static/images/avatar/3.jpg" 
            sx={{ width:30, height:30}}> 
            </Avatar>
            <Typography fontWeight={500} variant="span">john doe</Typography>
         </UserBox>

          <TextField
          sx={{width:"100"}}
          id="standard-multiline-static"
          label="Multiline"
          multiline
          rows={3}
          defaultValue="What's your mind?"
          variant="standard"
        />

        <Stack direction="row" gap={1} mt={2} mb={2}> 
        <EmojiEmotions color="primary"/> 
        <Image color="secondary"/>
        <VideoCameraBack color="success"/>
        <personAdd color="error"/>
        </Stack>

        <ButtonGroup 
        fullWidth
        varaint="contained"
        aria-label="outlined primary button group"> 
        <Button>Post</Button>
        <Button sx={{width:"100px"}}> 
       <DateRange></DateRange>
        </Button>
            
        </ButtonGroup>

        </Box>
      </StyledModal>
        </div>
    )
}

export default Add;
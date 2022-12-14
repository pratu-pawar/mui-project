import React from 'react'
import {  Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography, } from '@mui/material'
import { Favorite , Share  } from '@mui/icons-material'
import Myphoto from  "../Assets/pratu.logojpg";



const Post = () => { 
    return( 
      
        <Card sx={{ margin:5 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor:"red" }} aria-label="recipe">
            
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
        
          </IconButton>
        }
        title="John Doe"
        subheader="Novhamber 4, 2022"
      />
      <CardMedia
        component="img"
        height="194"
        image = "Myphoto"
        src = "pratu.logojpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Favorite />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
        
        
      </CardActions>
     <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
        
            peppers, and cook without stirring, until most of the liquid is absorbed,
            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
            mussels, tucking them down into the rice, and cook again without
            stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>

        <CardActions disableSpacing> 
          <IconButton aria-label='aa to favorites'> 
            
          </IconButton>

          <IconButton aria-label='aa to favorites'> 
          <Share/>
       </IconButton>55
        </CardActions>
    
    </Card>
        
    );
};

export default Post;

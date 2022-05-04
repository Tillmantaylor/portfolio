import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Project = (props) => {
  const loadTab = () => {
    window.open(props.project.link, "_blank" );
  }
    return (
        <Card 
          onClick={loadTab} 
          style={{maxWidth: 500, boxShadow: "0px 0px 2px 1px rgba(255,255,255)"}}
          sx={{
            transition: "transform 300ms ease",
            ":hover": {
              transform: "scale(1.05)",
            }
          }}
        >
          <CardActionArea style={{height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
            <CardMedia
              component="img"
              height="auto"
              image= {props.project.imagePath}
              alt= {props.project.alt}
            />
            <CardContent style={{borderStyle: "solid", borderWidth: 1}}>
              <Typography gutterBottom variant="h5" component="div" style={{fontFamily: "'PT Serif', serif"}}>
                {props.project.projectTitle}
              </Typography>
              <Typography variant="body2" color="text.secondary"> 
                {props.project.projectDescription}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
    );
}

export default Project;
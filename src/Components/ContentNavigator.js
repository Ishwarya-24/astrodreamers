import * as React from "react";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import logo from "../logo.png";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import People from "@mui/icons-material/People";
import PermMedia from "@mui/icons-material/PermMedia";
import Dns from "@mui/icons-material/Dns";
import ListItemIcon from "@mui/material/ListItemIcon";
import NavContent from "./NavContent";
import NavMUI from "./NavMUI";

const navi = [
  { icon: <People />, label: "Home", path: '/' },
  { icon: <Dns />, label: "About", path: '/about' },
  { icon: <PermMedia />, label: "Contact", path: '/contact' },

];




export default function Navigator(props) {
  const { ...other } = props;


  return (
 

    <Drawer variant="permanent" {...other} >
      <List disablePadding >
        <ListItem
          sx={{
            fontSize: 22,
            
            borderBottom: "1px solid",
            borderRight: "1px solid",
            borderColor: "#eeeeee",
            py: 0,
          }}
        >
          {/* Logo */}
          <Avatar sx={{ width: "60px", height: "60px",backgroundColor: '#fff' }} variant="square">
            <img
              className="borderBottom:1px solid borderColor: #eeeeee"
              src={logo}
              class="bi me-2 "
              alt="easy learnig with a blue dolphin logo "
              width="60"
              height="60"
            />
          </Avatar>
          {/* Title */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".048rem",
              color: "inherit",
              textDecoration: "none",
              borderLeft: "1px solid",
              borderColor: "#eeeeee",
              paddingLeft: 1,
              paddingRight: 0,
              display: { md: 'block', xl:'block',sm: 'block',xs: 'block', }
            }}
          >
            EASY LEARNING
          </Typography>
        </ListItem>
            {/* BigItems */}
        {navi.map((item) => (
              
              <ListItemButton
              component="a"
                href={item.path}
                key={item.label}
                sx={{  color: "rgba(255,255,255,.8)",display: 'flex', justifyContent: 'center',
                borderStyle: 'solid',
                borderWidth: '1px',
                borderColor: '#e0e0e0',
                borderRadius: '10px',
                mx: '10px',
                mt: '10px',
               }}  
              >
                
                <ListItemIcon sx={{ color: '#1976d2',minWidth: '0px', width: '20px' }}>
                      {item.icon}
                    </ListItemIcon>
                <ListItemText
                  sx={{ paddingLeft: 4 }}
                  primary={item.label}
                  primaryTypographyProps={{
                    fontSize: 20,
                    color: "#1a2027",
                    fontWeight: 600,
                    lineHeight: 1.5,
                    letterSpacing: 0,
                    fontFamily:
                      '"IBM Plex Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
                  }}
                /> 
              
             
              </ListItemButton>
              
            ))}
      
       <Divider sx={{mx: "13px",my:'10px'}}/>
       
       <NavMUI />

      </List>
    </Drawer>
  );
}

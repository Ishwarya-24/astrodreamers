import React from "react";
import ListItemIcon from "@mui/material/ListItemIcon";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import InboxIcon from "@mui/icons-material/Inbox";
import Collapse from "@mui/material/Collapse";
import {categories, categories2 , categories3, categories4} from './NavigatorData.js'
import List from "@mui/material/List";
import { Link as LinkComponent } from 'react-router-dom';


export default function NavContent() {
    
    const [open, setOpen] = React.useState(false);
const [open2, setOpen2] = React.useState(false);
const [open3, setOpen3] = React.useState(false);
const [open4, setOpen4] = React.useState(false);

const handleClick = () => { setOpen(!open) };
const handleClick2 = () => { setOpen2(!open2) };
const handleClick3 = () => { setOpen3(!open3) };
const handleClick4 = () => { setOpen4(!open4) };

    
    
    
    
    return(


        <React.Fragment>

            {/* MiniItems */}
        <ListItemButton
          onClick={(handleClick) }
          sx={{ borderRadius: '5px', p: 0, pl: "2px", ml: "8px" }}>
          <ListItemIcon sx={{ height: 16.5, minWidth: "16.5px", pr: "3px",mr: '5px' }}>
            <InboxIcon sx={{ height: 16.5, color: "#007FFF" }} />
          </ListItemIcon>
          <ListItemText
            primary="React.js"
            primaryTypographyProps={{
              fontSize: "0.875rem",
              color: "#1a2027",
              fontWeight: 570,
              lineHeight: 1.5,
              letterSpacing: 0,
              height: 16.5,
              fontFamily:
                '"IBM Plex Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
            }}
            sx={{ transform: 'translate(0px, -3px)',}}
          />
           <KeyboardArrowDown
                  sx={{
                    mr: -1,
                    opacity: 0.3,
                    transform: open ? 'rotate(-180deg)' : 'rotate(0)',
                    transition: '0.2s',
                    mr:'10px'
                  }}/>
        </ListItemButton>
        {/* ColapsedItems */}
        <Collapse in={open} timeout="auto" unmountOnExit>
          
              
        {categories.map(({ subTitle, children }) => (
              <List component="div" disablePadding  >

              <ListItemText
                  sx={{ paddingLeft: '41px', mt: '11px' }}
                  primary={subTitle}
                  primaryTypographyProps={{
                    fontSize: 14,
                    color: "#777474",
                    fontWeight: 700,
                    fontSize: "0.6875rem",
                    lineHeight: 1.5,
                    letterSpacing: '0.08rem',
                    fontFamily:
                      '"IBM Plex Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
                  }}
                />
            {children.map((children) => (
              
              <ListItemButton
                key={children.label}
                sx={{ py: 0, Height: "27px", color: "rgba(255,255,255,.8)", }}  
                component={LinkComponent}
                to={children.path}
              
              
              >
                <ListItemText
                  sx={{pl:'26px'}}
                  primary={children.label}
                 
                  primaryTypographyProps={{
                    fontSize: 14,
                    color: "#1a2027",
                    fontWeight: 520,
                    fontSize: "0.875rem",
                    lineHeight: 1.5,
                    letterSpacing: 0,
                    fontFamily:
                      '"IBM Plex Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
                  }}
                />
              </ListItemButton>
              
            ))}
            
         </List>
         ))}
        </Collapse>
        
         {/* MiniItems 2*/}
        <ListItemButton
          onClick={(handleClick2) }
          sx={{ borderRadius: '5px', p: 0, pl: "2px", ml: "8px",mt:'11px' }}>
          <ListItemIcon sx={{ height: 16.5, minWidth: "16.5px", pr: "3px",mr: '5px' }}>
            <InboxIcon sx={{ height: 16.5, color: "#007FFF" }} />
          </ListItemIcon>
          <ListItemText
            primary="CSS"
            primaryTypographyProps={{
              fontSize: "0.875rem",
              color: "#1a2027",
              fontWeight: 570,
              lineHeight: 1.5,
              letterSpacing: 0,
              height: 16.5,
              fontFamily:
                '"IBM Plex Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
            }}
            sx={{ transform: 'translate(0px, -3px)',}}
          />
           <KeyboardArrowDown
                  sx={{
                    mr: -1,
                    opacity: 0.3,
                    transform: open ? 'rotate(-180deg)' : 'rotate(0)',
                    transition: '0.2s',
                    mr:'10px'
                  }}/>
        </ListItemButton>
        {/* ColapsedItems */}
        <Collapse in={open2} timeout="auto" unmountOnExit>
          
              
          {categories2.map(({ subTitle, children }) => (
              <List component="div" disablePadding  >

              <ListItemText
                  sx={{ paddingLeft: '41px', mt: '11px' }}
                  primary={subTitle}
                  primaryTypographyProps={{
                    fontSize: 14,
                    color: "#777474",
                    fontWeight: 700,
                    fontSize: "0.6875rem",
                    lineHeight: 1.5,
                    letterSpacing: '0.08rem',
                    fontFamily:
                      '"IBM Plex Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
                  }}
                />
            {children.map((children) => (
              
              <ListItemButton
                key={children.label}
                sx={{ py: 0, Height: "27px", color: "rgba(255,255,255,.8)", }}
                component={LinkComponent}
                to={children.path}  
              >
                <ListItemText
                  sx={{pl:'26px'}}
                  primary={children.label}
                
                  primaryTypographyProps={{
                    fontSize: 14,
                    color: "#1a2027",
                    fontWeight: 520,
                    fontSize: "0.875rem",
                    lineHeight: 1.5,
                    letterSpacing: 0,
                    fontFamily:
                      '"IBM Plex Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
                  }}
                />
              </ListItemButton>
              
            ))}
            
         </List>
         ))}
        </Collapse>    

        {/* MiniItems 3*/}
        <ListItemButton
          onClick={(handleClick3) }
          sx={{ borderRadius: '5px', p: 0, pl: "2px", ml: "8px",mt:'11px' }}>
          <ListItemIcon sx={{ height: 16.5, minWidth: "16.5px", pr: "3px",mr: '5px' }}>
            <InboxIcon sx={{ height: 16.5, color: "#007FFF" }} />
          </ListItemIcon>
          <ListItemText
            primary="HTML"
            primaryTypographyProps={{
              fontSize: "0.875rem",
              color: "#1a2027",
              fontWeight: 570,
              lineHeight: 1.5,
              letterSpacing: 0,
              height: 16.5,
              fontFamily:
                '"IBM Plex Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
            }}
            sx={{ transform: 'translate(0px, -3px)',}}
          />
           <KeyboardArrowDown
                  sx={{
                    mr: -1,
                    opacity: 0.3,
                    transform: open ? 'rotate(-180deg)' : 'rotate(0)',
                    transition: '0.2s',
                    mr:'10px'
                  }}/>
        </ListItemButton>
        {/* ColapsedItems */}
        <Collapse in={open3} timeout="auto" unmountOnExit>
          
              
          {categories2.map(({ subTitle, children }) => (
              <List component="div" disablePadding  >

              <ListItemText
                  sx={{ paddingLeft: '41px', mt: '11px' }}
                  primary={subTitle}
                  primaryTypographyProps={{
                    fontSize: 14,
                    color: "#777474",
                    fontWeight: 700,
                    fontSize: "0.6875rem",
                    lineHeight: 1.5,
                    letterSpacing: '0.08rem',
                    fontFamily:
                      '"IBM Plex Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
                  }}
                />
            {children.map((children) => (
              
              <ListItemButton
                key={children.label}
                sx={{ py: 0, Height: "27px", color: "rgba(255,255,255,.8)", }} 
                component={LinkComponent}
                to={children.path} 
              >
                <ListItemText
                  sx={{pl:'26px'}}
                  primary={children.label}
                
                  primaryTypographyProps={{
                    fontSize: 14,
                    color: "#1a2027",
                    fontWeight: 520,
                    fontSize: "0.875rem",
                    lineHeight: 1.5,
                    letterSpacing: 0,
                    fontFamily:
                      '"IBM Plex Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
                  }}
                />
              </ListItemButton>
              
            ))}
            
         </List>
         ))}
        </Collapse>   

        {/* MiniItems 4*/}
        <ListItemButton
          onClick={(handleClick4) }
          sx={{ borderRadius: '5px', p: 0, pl: "2px", ml: "8px",mt:'11px' }}>
          <ListItemIcon sx={{ height: 16.5, minWidth: "16.5px", pr: "3px",mr: '5px' }}>
            <InboxIcon sx={{ height: 16.5, color: "#007FFF" }} />
          </ListItemIcon>
          <ListItemText
            primary="Python"
            primaryTypographyProps={{
              fontSize: "0.875rem",
              color: "#1a2027",
              fontWeight: 570,
              lineHeight: 1.5,
              letterSpacing: 0,
              height: 16.5,
              fontFamily:
                '"IBM Plex Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
            }}
            sx={{ transform: 'translate(0px, -3px)',}}
          />
           <KeyboardArrowDown
                  sx={{
                    mr: -1,
                    opacity: 0.3,
                    transform: open ? 'rotate(-180deg)' : 'rotate(0)',
                    transition: '0.2s',
                    mr:'10px'
                  }}/>
        </ListItemButton>
        {/* ColapsedItems */}
        <Collapse in={open4} timeout="auto" unmountOnExit>
          
              
          {categories4.map(({ subTitle, children }) => (
              <List component="div" disablePadding  >

              <ListItemText
                  sx={{ paddingLeft: '41px', mt: '11px' }}
                  primary={subTitle}
                  primaryTypographyProps={{
                    fontSize: 14,
                    color: "#777474",
                    fontWeight: 700,
                    fontSize: "0.6875rem",
                    lineHeight: 1.5,
                    letterSpacing: '0.08rem',
                    fontFamily:
                      '"IBM Plex Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
                  }}
                />
            {children.map((children) => (
              
              <ListItemButton
                key={children.label}
                sx={{ py: 0, Height: "27px", color: "rgba(255,255,255,.8)", }} 
                component={LinkComponent}
                to={children.path} 
              >
                <ListItemText
                  sx={{pl:'26px'}}
                  primary={children.label}
                
                  primaryTypographyProps={{
                    fontSize: 14,
                    color: "#1a2027",
                    fontWeight: 520,
                    fontSize: "0.875rem",
                    lineHeight: 1.5,
                    letterSpacing: 0,
                    fontFamily:
                      '"IBM Plex Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
                  }}
                />
              </ListItemButton>
              
            ))}
            
         </List>
         ))}
        </Collapse>
        </React.Fragment>
    )
}
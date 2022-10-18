import React from "react";
import ListItemIcon from "@mui/material/ListItemIcon";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import InboxIcon from "@mui/icons-material/Inbox";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import { Link as LinkComponent } from 'react-router-dom';

export default function RightNavbar() {
  const bookmarks = [
        { label: "HTML", path: "/docs/html" },
        { label: "CSS", path: "/docs/css" },
        { label: "Python", path: "/docs/python" },
        { label: "Material", path: "/docs/material" },
      
    
  ];

  return (
    <React.Fragment>
      <List variant='permanent' component="div" disablePadding>
        <ListItemText
          sx={{ paddingLeft: "41px", mt: "11px" }}
          primary='Contents'
          primaryTypographyProps={{
            fontSize: 14,
            color: "#777474",
            fontWeight: 700,
            fontSize: "0.6875rem",
            lineHeight: 1.5,
            letterSpacing: "0.08rem",
            fontFamily:
              '"IBM Plex Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
          }}
        />
        {bookmarks.map((item) => (
          <ListItemButton
            key={item.label}
            sx={{
              py: 0,
              Height: "27px",
              color: "rgba(255,255,255,.8)",
            }}
            component={LinkComponent}
            to={bookmarks.path}
          >
            <ListItemText
              sx={{ pl: "26px" }}
              primary={item.label}
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
    </React.Fragment>
  );
}

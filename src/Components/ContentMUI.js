import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { SearchIcon, RefreshIcon, IconButton   } from '@mui/icons-material';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import CodeSnippet from './Code';
import { createTheme, ThemeProvider,  responsiveFontSizes } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import muiImg from './MUI.png'
import { textAlign } from '@mui/system';
import List from "@mui/material/List";
import Stack from '@mui/material/Stack';




let theme = createTheme();
theme = responsiveFontSizes(theme);

theme.typography.h3 = {
  fontSize: '1.5rem',
 
  [theme.breakpoints.up('md')]: {
    fontSize: '2.25rem',
    lineHeight: 1.22222,
    letterSpacing:' 0.2px',
    fontWeight: '800',
  },


};

theme.typography.h7 = {
  fontSize: '0.7rem',
 
  [theme.breakpoints.up('md')]: {
    fontSize: '1rem',
    lineHeight: 1.5,
    letterSpacing:' 0.00938em',
    fontWeight: '400',
    color:'#313131',
  },




};

theme.typography.h5 = {
  fontSize: '0.7rem',
 
  [theme.breakpoints.up('md')]: {
    fontSize: '1.5rem',
    lineHeight: 1.5,
    letterSpacing:' 0.1px',
    fontWeight: '700',
    color:'#212121',
  },




};

export default function Content() {
  return (
            <React.Fragment>
              <ThemeProvider theme={theme}>
                
              <Box component="main" sx={{ postion: 'relative',display: 'block' ,flex: 1, pt: '85px', px: '60px', bgcolor: '#fff' }}>
             
                <Typography variant='h3'>Button Group </Typography>
                <Typography variant='h6'>The ButtonGroup component can be used to group related buttons. </Typography>
                <Box 
                    sx={{border: '1px solid rgba(0, 0, 0, 0.12)',
                    padding: '12px 12px 12px 12px',
                    borderRadius: '10px',
                    display: 'flex',
                    justifyContent: 'flex-start',
                    textAlign: 'center',
                    my:'30px'}}>
                        
                        <Avatar component='a' href='https://mui.com/' variant='rounded'  src={muiImg}   sx={{ width: '150px', height: '100px', display: 'flex', border: '1px solid',borderColor: '#ebebeb',mr: '12px'}} />
                        <Typography   variant='h7'>Check Material UI page for more details. </Typography> 
                                      
                </Box>

                <Typography   variant='h7'> They are typically placed throughout your UI, in places like:</Typography>
              
                <ul >
                        <li>Modal windows</li>
                        <li>Cards</li>
                        <li>Toolbars</li>
                        <li>Forms</li>
                </ul> 

                <Typography  sx={{pt: '20px',pb: '5px'}} variant='h5'>Basic Button </Typography> 
                <Typography   variant='h7'> The button comes with three variants: text (default), contained, and outlined.</Typography>
                <Box 
                    sx={{border: '1px solid rgba(0, 0, 0, 0.12)',
                    padding: '24px 24px 24px 24px',
                    borderRadius: '10px',
                    display: 'flex',
                    justifyContent: 'center',
                    textAlign: 'center',
                    my:'20px'}}>
                        <Stack spacing={2} direction="row">
                          <Button variant="text">Text</Button>
                          <Button variant="contained">Contained</Button>
                          <Button variant="outlined">Outlined</Button>
                        </Stack>
                </Box>
                 <CodeSnippet >
{`import * as React from 'react';
   import Stack from '@mui/material/Stack';
   import Button from '@mui/material/Button';

  export default function BasicButtons() {
    return (
      <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
  );
  }`}
</CodeSnippet>

                 <Typography  sx={{pt: '20px',pb: '5px'}} variant='h5'>Text button</Typography> 
                 <Typography   variant='h7'> Text buttons are typically used for less-pronounced actions, including those located: in dialogs, in cards. In cards, text buttons help maintain an emphasis on card content.</Typography>
                 <Box 
                    sx={{border: '1px solid rgba(0, 0, 0, 0.12)',
                    padding: '24px 24px 24px 24px',
                    borderRadius: '10px',
                    display: 'flex',
                    justifyContent: 'center',
                    textAlign: 'center',
                    my:'20px'}}>
                        <Stack spacing={2} direction="row">
                          <Button>Primary</Button>
                          <Button disabled>Disabled</Button>
                          <Button href="#text-buttons">Link</Button>
                        </Stack>
                </Box>
                <CodeSnippet>
{`import * as React from 'react';
   import Button from '@mui/material/Button';
   import Stack from '@mui/material/Stack';

    export default function TextButtons() {
      return (
        <Stack direction="row" spacing={2}>
          <Button>Primary</Button>
          <Button disabled>Disabled</Button>
          <Button href="#text-buttons">Link</Button>
        </Stack>
      );
      }`} </CodeSnippet>


<Typography  sx={{pt: '20px',pb: '5px'}} variant='h5'>Contained button </Typography> 
                <Typography   variant='h7'> Contained buttons are high-emphasis, distinguished by their use of elevation and fill. They contain actions that are primary to your app.</Typography>
                <Box 
                    sx={{border: '1px solid rgba(0, 0, 0, 0.12)',
                    padding: '24px 24px 24px 24px',
                    borderRadius: '10px',
                    display: 'flex',
                    justifyContent: 'center',
                    textAlign: 'center',
                    my:'20px'}}>
                        <Stack spacing={2} direction="row">
                        <Button variant="contained">Contained</Button>
                              <Button variant="contained" disabled>
                                Disabled
                              </Button>
                              <Button variant="contained" href="#contained-buttons">
                                Link
                              </Button>
                        </Stack>
                </Box>
                 <CodeSnippet >
{` import * as React from 'react';
    import Button from '@mui/material/Button';
    import Stack from '@mui/material/Stack';

    export default function ContainedButtons() {
      return (
        <Stack direction="row" spacing={2}>
          <Button variant="contained">Contained</Button>
          <Button variant="contained" disabled>
            Disabled
          </Button>
          <Button variant="contained" href="#contained-buttons">
            Link
          </Button>
        </Stack>
      );
}`}
</CodeSnippet>


                </Box>
                </ThemeProvider>
            </React.Fragment>
   
  );
}
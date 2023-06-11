import React from "react";
import { Grid, Paper, Typography } from '@mui/material';

export default function Profilepage(props) {

    return (
        <>
            <Grid item xs={6} className='form-container'>
                <Paper elevation={1} className='form'>
                    <form noValidate>
                        <h2 style={{ textAlign: 'center' }}>Profile Page</h2>                        
                        <div className="profile-page" >
                         <Typography   variant="h5"
                                          sx={{ fontSize: "24px", 
                                                fontWeight: "bold", 
                                                padding: "10px" 
                                            }}>
                                First Name: {props.firstname}</Typography>
                                <hr/>
                            <Typography variant="h5"
                                          sx={{ fontSize: "24px", 
                                                fontWeight: "bold", 
                                                padding: "10px" 
                                            }}>
                                Last Name: {props.lastname}</Typography>
                                <hr/>  
                            <Typography variant="h5"
                                          sx={{ fontSize: "24px", 
                                                fontWeight: "bold", 
                                                padding: "10px" 
                                            }}>
                                Email Id: {props.email}</Typography> 
                        </div>                       
                    </form>
                </Paper>
            </Grid>

        </>
    );
}
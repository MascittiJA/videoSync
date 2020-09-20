import React, { useState } from 'react';
import ReactPlayer from 'react-player/vimeo';
import { TextField, Button, Grid } from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';


function URLSelector(props) {
    const [url,setUrl] = useState('');

    return (
        <Grid 
            container
            spacing={0}
            alignItems="center"
            justify="center"
        >
            <Grid item xs={9} sm={5} spacing={3}>
                <TextField
                    label="Video URL"
                    style={{ margin: 8 }}
                    placeholder=""
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                    shrink: true,
                    }}
                    variant="outlined"
                    value={url} 
                    onChange={e => setUrl(e.target.value)}
                />
            </Grid>
            
            <Grid item xs={3} spacing={3}>
                <Button
                    style={{ margin: 20, minWidth: 150, maxWidth: 250 }}
                    fullWidth
                    variant="contained"
                    color="primary"
                    startIcon={<CloudUploadIcon />}
                    size="large"
                    onClick={e => {
                        if (ReactPlayer.canPlay(url)) {
                            props.socket.emit('changeSRV', {videoURL: url});
                        } else {
                            alert("URL Alert!");
                        }
                    }}
                >
                    Upload
                </Button>
            </Grid>
        </Grid>
    )
}

export default URLSelector;
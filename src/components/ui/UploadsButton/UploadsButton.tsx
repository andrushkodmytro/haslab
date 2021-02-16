import React, { useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import AvatarSrc from 'assets/images/avatar-placeholder.png';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    input: {
      display: 'none',
    },
    avatarContainer: {
      width: '150px',
      height: '150px',
    },
  })
);

export default function UploadButtons(props: any) {
  const classes = useStyles();
  const [selectedFile, setSelectedFile] = useState<any>();

  const changeHandler = (event: any) => {
    setSelectedFile(URL.createObjectURL(event.target.files[0]));
    props.uploadLogoHandler(event.target.files[0]);
  };

  return (
    <div className={classes.root}>
      <Avatar className={classes.avatarContainer} variant='rounded' alt='Cindy Baker' src={selectedFile || AvatarSrc} />

      <input accept='image/*' className={classes.input} id='icon-button-file' type='file' onChange={changeHandler} />
      <label htmlFor='icon-button-file'>
        <IconButton color='primary' aria-label='upload picture' component='span'>
          <PhotoCamera />
        </IconButton>
      </label>
    </div>
  );
}

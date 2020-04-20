import * as React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import { TransitionProps } from '@material-ui/core/transitions';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function SnackbarComponent(props) {
  
  const [transition, setTransition] = React.useState<
    React.ComponentType<TransitionProps> | undefined
  >(undefined);

 
  return (
    <>
    <Snackbar open={true} anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }} >
        <Alert severity="success">
          {props.message}
        </Alert>
      </Snackbar>
    </>
  );
}
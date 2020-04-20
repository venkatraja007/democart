import * as React from 'react';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper, { PaperProps } from '@material-ui/core/Paper';
import Draggable from 'react-draggable';
import { Button, Dialog, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@material-ui/core';

function PaperComponent(props: PaperProps) {
  return (
    <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );
}

export default function SortByMobile(props) {
  let { sortByPrice, selectedItem, handleClose } = props;
  const [value, setValue] = React.useState(selectedItem);
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };
  console.info("value",value);
  return (
    <div>
      <Dialog
        open={true}
        onClose={() => handleClose()}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          Sort Options
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
          <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange}>
            <FormControlLabel value="1" control={<Radio />} label="Price -- High Low" />
            <FormControlLabel value="2" control={<Radio />} label="Price -- Low High" />
            <FormControlLabel value="3" control={<Radio />} label="Discount" />
          </RadioGroup>
          </DialogContentText>
        </DialogContent>
        <DialogActions className="sort-mb-btn">
          <Button className="sort-mb-btn-lt" autoFocus onClick={() => handleClose()} color="primary">
            Cancel
          </Button>
          <Button className="sort-mb-btn-rt" onClick={() => sortByPrice(value)} color="primary">
            Apply
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
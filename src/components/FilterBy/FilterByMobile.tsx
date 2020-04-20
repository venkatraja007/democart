import * as React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper, { PaperProps } from '@material-ui/core/Paper';
import Draggable from 'react-draggable';
import FilterBy from './FilterBy';
function PaperComponent(props: PaperProps) {
  return (
    <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );
}

export default function FilterByMobile(props) {
  let { handleFilterPrice, handleClose, filterByPrice } = props;
  return (
    <div>
      <Dialog
        open={true}
        onClose={() => handleClose()}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
        Filters
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <FilterBy handleFilterPrice={handleFilterPrice} />
          </DialogContentText>
        </DialogContent>
        <DialogActions className="sort-mb-btn">
          <Button className="sort-mb-btn-lt" autoFocus onClick={() => handleClose()} color="primary">
            Cancel
          </Button>
          <Button className="sort-mb-btn-rt" onClick={() => filterByPrice()} color="primary">
            Apply
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
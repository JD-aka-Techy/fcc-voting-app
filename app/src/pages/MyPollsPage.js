import React from 'react';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';


function MyPollsPage() {

  const actions = [
    <FlatButton
      label="Cancel"
      primary={true}
      onClick={() => 'yeah'}
    />,
    <FlatButton
      label="Submit"
      primary={true}
      keyboardFocused={true}
      onClick={() => 'yeah'}
    />,
  ];

  return (
    <div>
      mypolls page

      <Dialog
          title="Scrollable Dialog"
          actions={actions}
          modal={true}
          open={true}
          onRequestClose={() => ''}
          autoScrollBodyContent={true}
        >
          hello
        </Dialog>
    </div>
  );
}

export default MyPollsPage;
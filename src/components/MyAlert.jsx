import React, {useEffect } from 'react';
import { Alert, Button } from 'reactstrap';

const MyAlert = ({ showAlert, handleCloseAlert, variant, heading, message, autoDismissTime = 10000 }) => {
  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        handleCloseAlert();
      }, autoDismissTime);
      return () => clearTimeout(timer);
    }
  }, [showAlert, handleCloseAlert, autoDismissTime]);

  return (
    <>
      {showAlert && (
        <Alert variant={variant} onClose={handleCloseAlert} dismissible>
          <Alert.Heading>{heading}</Alert.Heading>
          {message && <p>{message}</p>}
          <Button onClick={handleCloseAlert} outline color="warning">Cancelar</Button>{' '}
          <Button outline color="danger">Apagar</Button>
        </Alert>
      )}
    </>
  );
};

export default MyAlert;

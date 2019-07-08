import React, { useContext } from 'react';
import AlertContext from '../../contexts/alert/alertContext';

const Alerts = () => {
  const alertContext = useContext(AlertContext);
  return (
    alertContext.alerts.length > 0 &&
    alertContext.alerts.map(alert => (
      <div key={alert.id} className={`alert alert-${alert.type}`}>
        <i className='fas fas-info-circle' />
        {alert.msg}
      </div>
    ))
  );
};

export default Alerts;

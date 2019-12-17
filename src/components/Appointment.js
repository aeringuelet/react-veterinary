import React from 'react';

const Appointment = ({appointment}) => (
    <div className="media mt-3">
        <div className="media-body">
            <h3 className="mt-0">
                {appointment.pet}
            </h3>
        </div>
    </div>
);
 
export default Appointment;
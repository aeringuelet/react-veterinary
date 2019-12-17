import React from 'react';
import Appointment from './Appointment';

const AppointmentList = ({appointments}) => (
    <div className="card mt-2 py-5">
        <div className="card-body">
            <h2 className="card-title text-center">
                Manage your appointments here
            </h2>

            <div className="lista-citas">
                {appointments.map(appointment => (
                    <Appointment
                        key={appointment.id}
                        appointment={appointment}
                    />
                ))}
            </div>
        </div>
    </div>
);

export default AppointmentList;
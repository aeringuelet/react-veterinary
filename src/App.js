import React, { Component } from "react";
import "./bootstrap.min.css";
import Header from "./components/Header";
import NewAppointment from "./components/NewAppointment";
import AppointmentList from "./components/AppointmentList";

class App extends Component {
	state = {
		appointments: []
	};

	componentDidMount = () => {
		const appointmentsLs = localStorage.getItem('appointments');
		if(appointmentsLs) {
			this.setState({
				appointments: JSON.parse(appointmentsLs)
			})
		}
	}

	componentDidUpdate = () => {
		localStorage.setItem('appointments', JSON.stringify(this.state.appointments));
	}

	createNewAppointment = data => {
		const appointments = [...this.state.appointments, data];

		this.setState({
			appointments: appointments
		})
	}

	deleteAppointment = id => {
		const oldAppointments = [...this.state.appointments];

		const newAppointments = oldAppointments.filter(app => {
			return app.id !== id;
		});

		this.setState({
			appointments: newAppointments
		})
	};

	render() {
		return (
			<div className="container">
				<Header title="Veterinary" />

				<div className="row">
					<div className="col-md-10 mx-auto">
						<NewAppointment 
							createNewAppointment={this.createNewAppointment}
						/>
					</div>

					<div className="col-md-10 mt-5 mx-auto">
						<AppointmentList
							appointments={this.state.appointments}
							deleteAppointment={this.deleteAppointment}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default App;

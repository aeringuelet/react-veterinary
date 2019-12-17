import React, { Component } from "react";
import uuid from 'uuid';

const initialState = {
	appointment: {
		pet: "",
		owner: "",
		date: "",
		time: "",
		symptoms: ""
	},
	error: false
};

class NewAppointment extends Component {
	state = {...initialState};

	handleChange = e => {
		this.setState({
			appointment: {
				...this.state.appointment,
				[e.target.name] : e.target.value
			}
		});
	};

	handleSubmit = e => {
		e.preventDefault();
		const {pet, owner, date, time, symptoms} = this.state.appointment;

		if(pet === '' || owner === '' || date === '' || time === '' || symptoms === '') {
			this.setState({
				error: true
			})

			return;
		}

		const newAppointment = {...this.state.appointment}
		newAppointment.id = uuid();

		this.props.createNewAppointment(newAppointment);

		this.setState({
			...initialState
		})
	}

	render() {
		const {error} = this.state;
		return (
			<div className="card mt-5 py-5">
				<div className="card-body">
					<h2 className="card-title text-center mb-5">
						Fill out the inputs to create a new appointment
					</h2>

					{ error ? <div className="alert alert-danger mt-2 mb-5 text-center"> All fields are mandatory
					</div> : null}

					<form
						onSubmit={this.handleSubmit}
					>
						<div className="form-group row">
							<label className="col-sm-4 col-lg-2 col-form-label">
								Pet Name
							</label>
							<div className="col-sm-8 col-lg-10">
								<input
									type="text"
									className="form-control"
									placeholder="Pet Name"
									name="pet"
									onChange={this.handleChange}
									value={this.state.appointment.pet}
								/>
							</div>
						</div>

						<div className="form-group row">
							<label className="col-sm-4 col-lg-2 col-form-label">
								Owner Name
							</label>
							<div className="col-sm-8 col-lg-10">
								<input
									type="text"
									className="form-control"
									placeholder="Owner Name"
									name="owner"
									onChange={this.handleChange}
									value={this.state.appointment.owner}
								/>
							</div>
						</div>

						<div className="form-group row">
							<label className="col-sm-4 col-lg-2 col-form-label">
								Date
							</label>
							<div className="col-sm-8 col-lg-4">
								<input
									type="date"
									className="form-control"
									name="date"
									onChange={this.handleChange}
									value={this.state.appointment.date}
								/>
							</div>
							<label className="col-sm-4 col-lg-2 col-form-label">
								Time
							</label>
							<div className="col-sm-8 col-lg-4">
								<input
									type="time"
									className="form-control"
									name="time"
									onChange={this.handleChange}
									value={this.state.appointment.time}
								/>
							</div>
						</div>

						<div className="form-group row">
							<label className="col-sm-4 col-lg-2 col-form-label">
								Symptoms
							</label>
							<div className="col-sm-8 col-lg-10">
								<textarea
									className="form-control"
									placeholder="Describe the symptoms"
									name="symptoms"
									onChange={this.handleChange}
									value={this.state.appointment.symptoms}
								></textarea>
							</div>
						</div>

						<input
							type="submit"
							className="py-3 mt-2 btn btn-success btn-block"
							value="Crete new appointment"
						/>
					</form>
				</div>
			</div>
		);
	}
}

export default NewAppointment;

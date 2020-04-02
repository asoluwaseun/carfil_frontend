import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Service from "../Service"
import car from '../assets/car.png'

export default class CarOwners extends Component {
    constructor(props) {
        super(props)

        this.state = {
            filter_id: null,
            car_owners: [],
            loading: true
        }
    }

    async componentDidMount() {
        await this.setState({
            filter_id: this.props.match.params.filter_id
        })
        Service.getCarOwners(this.state.filter_id)
           .then((response)=>{
                if(response.data && response.data.data){
                    this.setState({
                        car_owners: response.data.data,
                        loading: false
                    })
                }
            })
    }

    render() {
        return (
            <div className="container py-3">
                <div className="row">
                    <div className="col-md-2 col-lg-2"></div>
                    <div className="col-md-8 col-lg-8">
                        <Link to="/">
                            <h6 className="p-2"><i className="zmdi zmdi-arrow-left"></i> Home</h6>
                        </Link>
                        <h2 className="p-2 mt-1">Filtered Car Owners</h2>
                        {
                            this.state.loading &&
                            (
                                <div className="text-center p-5">
                                    <i className="fa fa-spin fa-spinner fa-2x"></i>
                                    <br/>
                                    <small>Loading</small>
                                </div>
                            )
                        }
                        {
                            !this.state.loading && this.state.car_owners.length === 0 &&
                            (
                                <div className="text-center p-5">
                                    <small>No Car Owner Found Based On Chosen Filter</small>
                                    <br/>
                                    <Link to="/">Go Back</Link>
                                </div>
                            )
                        }
                        {
                            this.state.car_owners.map((car_owner) => {
                                return (
                                    <div key={car_owner.id} className="card shadow-lg mb-3">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-4">
                                                    <img src={car} width="120" height="120" className="img-responsive"/>
                                                </div>
                                                <div className="col-8">
                                                    <h6>{car_owner.first_name + " " + car_owner.last_name}</h6>
                                                    <div className="">
                                                        <ul className="p-0">
                                                            <li className="border-right p-1">
                                                                <p className="mb-0 text-muted c-text">Brand</p>
                                                                <p className="mb-0 c-text">{car_owner.car_model}</p>
                                                            </li>
                                                            <li className="border-right p-1">
                                                                <p className="mb-0 text-muted c-text">Year</p>
                                                                <p className="mb-0 c-text">{car_owner.car_model_year}</p>
                                                            </li>
                                                            <li className="p-1 text-center">
                                                                <p className="mb-0 text-muted c-text">Color</p>
                                                                <p className="mb-0 color text-center" style={{margin: 'auto', backgroundColor: car_owner.car_color}}></p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="">
                                                        <ul className="p-0">
                                                            <li className="p-1">
                                                                <p className="mb-0 text-muted c-text">Country</p>
                                                                <p className="mb-0 c-text">{car_owner.country}</p>
                                                            </li>
                                                            <li className=" p-1">
                                                                <p className="mb-0 text-muted c-text">Gender</p>
                                                                <p className="mb-0 c-text">{car_owner.gender}</p>
                                                            </li>
                                                            <li className="p-1">
                                                                <p className="mb-0 text-muted c-text">Job</p>
                                                                <p className="mb-0 c-text bio">{car_owner.job_title}</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="ml-1">
                                                        <p className="c-text">
                                                            <span className="text-muted">Email:</span> {car_owner.email}
                                                        </p>
                                                        <p className="c-text bio">
                                                <span
                                                    className="text-muted">Bio:</span> {car_owner.bio}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="col-md-2  col-lg-2"></div>
                </div>
            </div>
        )
    }
}

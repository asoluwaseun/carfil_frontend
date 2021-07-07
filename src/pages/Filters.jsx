import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Service from "../Service"

export default class Filters extends Component{
    constructor(props){
        super(props)

        this.state = {
            filters: [],
            loading: true
        }
    }

    componentDidMount() {
        Service.getFilters()
            .then((response)=>{
                if(response.data && response.data.data){
                    this.setState({
                        filters: response.data.data,
                        loading: false
                    })
                }
            })
    }

    render(){
        return (
           <div className="container">
               <div className="row">
                   <div className="col-md-2  col-lg-2"></div>
                   <div className="col-md-8  col-lg-8">
                       <h2 className="p-2"><i className="zmdi zmdi-filter-list"></i> Filter</h2>
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
                           this.state.filters.map((filter)=>{
                               return (
                                   <Link key={filter.id} to={"car-owners/"+ "" +filter.id}>
                                     <div className="card shadow-lg mb-3" >
                                       <div className="card-body text-center">
                                            <h4>{filter.start_year} - {filter.end_year} </h4>
                                            <h6>{filter.gender}</h6>
                                           <div>
                                               {
                                                   filter.countries.map((country,index)=>{
                                                       return (
                                                           <span key={index} className="badge badge-light p-2 mx-1 my-1">{country}</span>
                                                       )
                                                   })
                                               }
                                           </div>
                                           <div className="mt-2">
                                               <ul>
                                               {
                                                   filter.colors.map((color,index)=>{
                                                       return (
                                                           <li key={index} className="color mx-1" style={{backgroundColor: color}}></li>
                                                       )
                                                   })
                                               }
                                               </ul>
                                           </div>
                                       </div>
                                   </div>
                                   </Link>
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

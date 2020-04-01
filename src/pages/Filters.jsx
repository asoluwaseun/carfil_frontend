import React, { Component } from 'react'
import Service from "../Service"

export default class Filters extends Component{
    constructor(props){
        super(props)

        this.state = {
            filters: []
        }
    }

    componentDidMount() {
        Service.getFilters()
            .then((response)=>{
                if(response.data && response.data.data){
                    this.setState({
                        filters: response.data.data
                    })
                }
            })
    }

    render(){
        return (
           <div className="container">
               <h2 className="p-2"><i className="zmdi zmdi-filter-list"></i> Filter</h2>
               {
                   this.state.filters.map((filter)=>{
                       return (
                           <div key={filter.id} className="card shadow-lg mb-3">
                               <div className="card-body text-center">
                                    <h4>{filter.start_year} - {filter.end_year} </h4>
                                    <h6>{filter.gender}</h6>
                                   <div>
                                       {
                                           filter.countries.map((country,index)=>{
                                               return (
                                                   <span key={index} className="badge badge-light p-2 mx-1">{country}</span>
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
                       )
                   })
               }
           </div>
        )
    }
}

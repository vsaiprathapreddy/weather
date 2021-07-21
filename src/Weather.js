import React from 'react';
import { render } from '@testing-library/react';
import axios from 'axios';


export default class Weather extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            cities: ['Hyderabad','Banglore','Kolkata','Chennai','Mumbai','Delhi','Ahmedabad','Surat','Pune','Jaipur','Lucknow','Kanpur','Nagpur','Indore','Thane','Bhopal','Visakhapatnam','Pimpri Chinchwad','Patna','Vadodara','Ghaziabad','Ludhiana','Agra','Nashik','Faridabad','Meerut','Rajkot','Kalyan Dombivali','Vasai Virar','Varanasi','Srinagar','Aurangabad','Dhanbad','Amritsar','Navi Mumbai','Allahabad','Ranchi'],
         
            data: undefined
        }
    }


    componentDidMount(){
        
        axios.get('https://api.weatherstack.com/current?access_key=27e26eb76becbb04a767d7e9f4738639&query=Hyderabad')
        .then((response) => {
            console.log(response); //{data: {}, status: 200, statusText: '}
            this.setState({
                data: response['data']
            })
            // handle success
        }).catch((error) => {
          // handle error
          console.log(error);
        })
        .then(() => {
          // always executed
        });
    
    

    }

    onChangeCity = (event) =>{
        let city = event.target.value;

        axios.get(`http://api.weatherstack.com/current?access_key=27e26eb76becbb04a767d7e9f4738639&query=${city}`)
        .then((response) => {
            console.log(response); //{data: {}, status: 200, statusText: '}
            this.setState({
                data: response['data']
            })
            // handle success
        }).catch((error) => {
          // handle error
          console.log(error);
        })
        .then(() => {
          // always executed
        });
    }
    




    render(){
        return(
            <div>
                <label>Select your city : </label>
                <select onChange={this.onChangeCity}>
                    {
                        this.state.cities.map((city) => (
                            <option value={city}>{city}</option>
                        ) )
                    }
                </select>
                {
                    this.state.data ? (
            
                        <div class="card" style={{width: '300px', height: '450px', margin: 'auto'}}>
                            <div class="card-body">
                            <img width='10px' height='100px' src={this.state.data.current.weather_icons} class="card-img-top" alt="..." /> 
                             <h5 class="card-title">{this.state.data.location.name}</h5>
                            <p class="card-text">Temperature:{this.state.data.current.temperature}&#8451;</p>
                            <p class="card-text">Humidity:{this.state.data.current.humidity}</p>
                            <p class="card-text">Feels like:{this.state.data.current.feelslike}&#8451;</p>
                            <p class="card-text">observation time:{this.state.data.current.observation_time}</p>
                            <p class="card-text">Precipetation:{this.state.data.current.precip}%</p>
                            <p class="card-text">UV index:{this.state.data.current.uv_index}</p>
                            <p  class="card-title">{this.state.data.current.weather_descriptions}</p>
                            
                            </div>
                        </div>          
                                  
                    ) : null
                }
            </div>
        )
    }

}
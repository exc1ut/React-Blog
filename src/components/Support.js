import React from 'react';


class Support extends React.Component {
    
    constructor(){
        super();
        this.state = {
            country:'',
            city:'',
            temperature:123,
            weatherCondition:123,
            isLoading:true,
            text:'',
        }
    }
//    componentDidMount(){
//        this.fetch_ip();
//    }
    
//    fetch_ip(){
//        fetch('http://ip-api.com/json').then(res => res.json()).then(json => {
//            
//            var city = json.city;
//            this.setState({city});
//            this.test(city);
//        })
//    }
//    
//    test(city){
//        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=fbf712a5a83d7305c3cda4ca8fe7ef29`).then(res => res.json()).then(json => {
//        // console.log(json);
//        this.setState({
//          temperature: json.main.temp,
//          weatherCondition: json.weather[0].main,
//          isLoading: false,
//        });
//            console.log(json);
//        
//      })
//        }
    handleChange = () => {
        var element = document.getElementById("text");
        this.setState({
            text: element.value,
        })
    }
    
    render(){
        const {country,city,temperature,weatherCondition,isLoading, text} = this.state;
        return isLoading ?
                    <h1>Loading...</h1>
                      :
                    <div>
                    <h1></h1>
                    <input id="text" value={text} type="text" onChange={this.handleChange()}/>
                    </div>
    }
}
export default Support
import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import LoaderPage from './LoaderPage';


class App extends React.Component {

    // constructor(props){
    //     super(props);
    //     //state object declaration
    //     // you always have to set a default value for the state
    //     // This is the only time we do direct assignment
    //     // to this.state
    //     this.state = { lat: null, errorMessage: '' };
        
    // }
    // Alternative way of declaring a state is below. (This is the same as the declaring the constructor above)

    state = {lat: null, errMessage:''}



    // LifeCycle Methods
    // render(), 
    // componentDidMount - Called 'only once' directly when component is loaded, (Perfect for initial data loading which is going to be called just once)
    // componentDidUpdate - Called everytime when the state in the component is updated,
    // componentWillUnmount - helps to stop the component from displaying


    componentDidMount() {
        console.log('Component was rendered to the screen')
        window.navigator.geolocation.getCurrentPosition(
            position =>  this.setState({ lat: position.coords.latitude }), //call the state Latitute
            err => this.setState({ errorMessage: err.message }) // call error state
        );
    }

    componentDidUpdate(){
        console.log('Component was just updated - it rerendered')
    }

    render() {
        console.log(this.state.lat)
        if (this.state.errorMessage && !this.state.lat){
            return <div> <h1>Error: {this.state.errorMessage}</h1> </div>;
        }
        if(!this.state.errorMessage && this.state.lat){
                // return <div> Latitude: {this.state.lat} </div>
                return <SeasonDisplay lat={ this.state.lat } />
        }

        return <LoaderPage message={'Please accept the location request'}/>
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));
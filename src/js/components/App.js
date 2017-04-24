import React from 'react';
import IterationList from './IterationList';
import Loader from './loader';
import Comparison from './Comparison';
import toArr from '../helpers/toArr';
import Form from './Form';
import './main.scss';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaderActive: false,
            data: []
        };
        this.clickCalcHandler = this.clickCalcHandler.bind(this);
    }
    
    clickCalcHandler(func, start, end, deg) {
        this.setState({loaderActive: true});
        fetch(`https://min-max.herokuapp.com/minmaxGET?func=${func}&start=${start}&end=${end}&deg=${deg}`)
            .then(r => r.json())
            .then(r => {
                this.setState({data: toArr(r), loaderActive: false});
                console.log(this.state);
            })
    }

    render() {
        // const arr = toArr(this.state.data);

        return (
            <MuiThemeProvider>
                {/*<Comparison />*/}
                <div class="container">
                    <Form onCalcClick={this.clickCalcHandler}/>
                    <Loader active={this.state.loaderActive}/>
                    <IterationList arr={this.state.data}/>
                </div>
            </MuiThemeProvider>
        );
    }
}


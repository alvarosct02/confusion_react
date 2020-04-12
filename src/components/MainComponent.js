import React, { Component } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { COMMENTS } from '../shared/comments';
import { DISHES } from '../shared/dishes';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';
import Contact from './ContactComponent';
import Footer from './FooterComponent';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import DishDetail from './DishDetailComponent';
import Menu from './MenuComponent';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            comments: COMMENTS,
            promotions: PROMOTIONS,
            leaders: LEADERS,
            selectedDish: null
        };
    }

    onDishSelect(dishId) {
        this.setState({ selectedDish: dishId });
    }

    render() {

    const DishWithId = ({match}) => {
        return(
            <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
              comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
        );
      };

        const HomePage = () => {
            return (
                <Home
                    dish={this.state.dishes.filter((d) => d.featured)[0]}
                    promotion={this.state.promotions.filter((p) => p.featured)[0]}
                    leader={this.state.leaders.filter((l) => l.featured)[0]}
                />
            );
        }

        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <Switch>
                        <Route path='/home' component={HomePage} />
                        <Route exact path='/contactus' component={Contact} />} />
                        <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
                        <Route path='/menu/:dishId' component={DishWithId} />
                        <Redirect to="/home" />
                    </Switch>
                    <Footer />
                </div>
            </BrowserRouter>
        );
    }
}

export default Main;
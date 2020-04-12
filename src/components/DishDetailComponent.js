import React, { Component } from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super(props);
    }

    renderDish() {
        return <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
                <CardBody>
                    <CardTitle>{this.props.dish.name}</CardTitle>
                    <CardText>{this.props.dish.description}</CardText>
                </CardBody>
            </Card>
        </div>
    }

    renderComments() {

        const comments = this.props.dish.comments.map((comment) => {
            return (
                <div>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author}, {comment.date} </p>
                </div>
            );
        });
        
        return <div className="col-12 col-md-5 m-1">
            <h3>Comments </h3>
            {comments}
        </div>
    }

    render() {
        if (this.props.dish == null) return <div></div>

        return <div className="row">
            {this.renderDish()}
            {this.renderComments()}
        </div>

    }
}

export default DishDetail;
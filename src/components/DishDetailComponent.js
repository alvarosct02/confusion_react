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

        if (this.props.dish.comments == null) return <div></div>

        const comments = this.props.dish.comments.map((comment) => {
            const formattedDate = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))
            return (
                <div>
                    <dd>{comment.comment}</dd>
                    <dd>-- {comment.author}, {formattedDate} </dd>
                </div>
            );
        });

        return <div className="col-12 col-md-5 m-1">
            <h4>Comments </h4>
            <ul className="list-unstyled">
                {comments}
            </ul>
        </div>
    }

    render() {
        if (this.props.dish == null) return <div></div>

        return <div className="container">
            <div className="row">
                {this.renderDish()}
                {this.renderComments()}
            </div>
        </div>

    }
}

export default DishDetail;
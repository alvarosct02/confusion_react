import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';
import { Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader } from 'reactstrap';

function RenderDish({ dish }) {
    return <div className="col-12 col-md-5 m-1">
        <Card>
            <CardImg top src={dish.image} alt={dish.name} />
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
    </div>
}

function RenderComments({ comments }) {

    if (comments == null) return <div></div>

    let commentsView = comments.map((comment) => {
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
            {commentsView}
        </ul>
        <Comment/>
    </div>
}

const DishDetail = (props) => {
    if (props.dish == null) return <div></div>

    return <div className="container">
        <div className="row">
            <Breadcrumb>

                <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
                <h3>{props.dish.name}</h3>
                <hr />
            </div>
        </div>
        <div className="row">
            <RenderDish dish={props.dish} />
            <RenderComments comments={props.comments} />
        </div>
    </div>
}
export default DishDetail;


class Comment extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false
        };
        this.toggleModal = this.toggleModal.bind(this);

    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    render() {
        return (
            <div>
                <Button outline onClick={this.toggleModal}><span className="fa fa-pencil fa-lg"></span> Submit Comment</Button>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Comment</ModalHeader>
                    <ModalBody>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}
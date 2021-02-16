import {Component} from 'react';
import {Card, CardBody, CardText, CardTitle, CardImg} from 'reactstrap';

class CampsiteInfo extends Component {
    constructor(props){
        super(props)
    }

    rendercampsite(campsite) {
        return(
            <div className="col-md-5 m-1">
                <Card>
                    <CardImg top src={campsite.image} alt={campsite.name} />
                    <CardBody>
                        <CardTitle>{campsite.name}</CardTitle>
                        <CardText>{campsite.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }

    renderComments(comments){
        if (comments){
            return(
                <div className="col-md-5 m-1">
                    <h4>Comments</h4>
                    {comments.map(comment=>{
                        return(
                            <>
                        <p>{comment.text}</p>
                        <p>{comment.author}</p>
                        <p>{comment.date}</p>
                        </>
                        )     
                    })}
                </div>
            )
        }
        return(
            <div>

            </div>
        )
    }

    render(){
        if (this.props.campsite) {
            return(
            <div className="row">
                {this.rendercampsite(this.props.campsite)}
                {this.renderComments(this.props.campsite.comments)}
            </div>
            )
        } else {
            return(
                <div>
                    
                </div>
            )
        }
    }
}

export default CampsiteInfo
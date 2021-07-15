import React from 'react';
import './UserItem.css';
import { Link } from 'react-router-dom';
import Card from '../../shared/components/UIElements/Card'
import Avatar from '../../shared/components/UIElements/Avatar';

const UserItem = props => {
    return (
        <div className="user-item">
            <Card className="user-item__content">
                <Link to={`/${props.id}/places`}>
                    <div className="user-item__image">
                        <Avatar image={props.image} alt={props.name} style={props.style} />
                    </div>
                    <div className="user_item__info">
                        <h2>{props.name}</h2>
                        <h3>
                            {props.placeCount} {props.placeCount === 1 ? 'Place' : 'Places'}
                        </h3>
                    </div>
                </Link>
            </Card>
        </div>
    )
};

export default UserItem;
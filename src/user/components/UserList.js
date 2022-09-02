import React from "react";
import UserItem from "./UserItem";
import "./UsersList.css"
import Card from "../../shared/components/UIElements/Card/Card"

const UsersList = props => {
    if(props.items.length === 0){
        return <Card>
            <div>no users</div>
            </Card>
    }

    return <ul>
        {props.items.map( user => {
            return <UserItem key={user.id} id={user.id} image={user.image} name={user.name} placeCount={user.places} />
        })}
    </ul>
    
}

export default UsersList
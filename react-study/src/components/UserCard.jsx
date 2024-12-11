import React from "react";

function UserCard() {
    const user = {
        name: "홍길동",
        age: 25,
        location: "서울",
    };

    return (
        <div className={"user-card"}>
            <h2>{user.name}님</h2>
            <p>나이 : {user.age} </p>
            <p>지역 : {user.location} </p>
        </div>
    )
}

export default UserCard;

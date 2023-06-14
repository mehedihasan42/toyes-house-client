import React from 'react';

const InfoCard = ({info}) => {
    const {name,picture,price} = info;
    return (
       <img src={picture} alt="" />
    );
};

export default InfoCard;
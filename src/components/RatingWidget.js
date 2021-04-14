import React, { useState } from 'react'
import { FaStar, FaCheckCircle } from 'react-icons/fa'
import styled from 'styled-components';

const RatingWidget = ({ title }) => {

    const [rating, setRating] = useState(null);
    const [hoverRating, setHoverRating] = useState(null);

    return (
        <Wrapper>
            <WidgetTitle>{title}</WidgetTitle>


            {[...Array(5)].map((item, i) => {
                const ratingValue = i + 1;
                return (
                    <StarIcon key={ratingValue}>
                        <input
                            type="radio"
                            name="starRating"
                            value={ratingValue}
                            style={{ display: "none" }}
                            onClick={() => setRating(ratingValue)} />

                        <FaStar
                            onMouseOver={() => { setHoverRating(ratingValue) }}
                            onMouseOut={() => { setHoverRating(null) }}
                            className="star"
                            color={ratingValue <= (hoverRating || rating) ? "#ffc107" : "#e4e5e9"}
                            size={50} />
                    </StarIcon>
                )
            })}

            {rating && (<Response><FaCheckCircle size={20} color="#83BF66" /> Thank you for {rating} stars.</Response>)}



        </Wrapper>
    )
}

export default RatingWidget


export const Wrapper = styled.div`
    display:block;
    padding:50px 0 20px 0;
    max-width:calc(100% - 30px);
    width:500px;
    margin:auto;
`


export const WidgetTitle = styled.h2`
  font-size: 1.5rem;
  margin:20px auto;
  text-align: center;
  color: #000;
`;

export const StarIcon = styled.label`
    display:inline-block;
    
    .star {
        cursor: pointer;
        transition: all 0.2s ease;
    }
`

export const Response = styled.p`
    display: block;
    background: #e4e5e9;
    max-width:100%;
    margin:50px auto 0;
    padding: 10px 0;
    color:#000;
    font-size: 1.5rem;
    transition: all 0.2s ease
}
`
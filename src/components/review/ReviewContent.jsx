import React from 'react'

function ReviewContent(props) {
    
  return (
    <div className='reviewContent'>
      <div className="reviewContentWrapper">
        <img className='revieweeImage' src={props.image} alt={props.image} />
        <div className="details">
            <div className="revieweeName">{props.name}</div>
            <div className="revieweeProfession">{props.profession}</div>
            <div className="revieweeContent">{props.content}</div>
            {props.rating === 5 ? (
                <div className="rating">⭐⭐⭐⭐⭐</div>
              ) : props.rating === 4 ? (
                <div className="rating">⭐⭐⭐⭐</div>
              ) : props.rating === 3 ? (
                <div className="rating">⭐⭐⭐</div>
              ) : props.rating === 2 ? (
                <div className="rating">⭐⭐</div>
              ) : (
                <div className="rating">⭐</div>
              )
            }

        </div>
      </div>
    </div>
  )
}

export default ReviewContent
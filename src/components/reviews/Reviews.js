import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  render() {

    const { reviews, restaurantId, deleteReview } = this.props;
    const matchedReviews = reviews.filter(review => review.restaurantId === restaurantId);
    
    const restaurantReviews = matchedReviews.map((review, index) => {
      return <Review key={index} review={review} deleteReview={deleteReview} />
    })

    return (
      <div>
        <ul>
          {restaurantReviews}
        </ul>
      </div>
    );
  }

};

export default Reviews;
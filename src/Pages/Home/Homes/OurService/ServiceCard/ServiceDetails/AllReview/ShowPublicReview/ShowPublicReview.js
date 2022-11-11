import React, {useEffect, useState} from 'react';
import { toast } from 'react-toastify';
import AllReviewCard from './AllReviewCard/AllReviewCard';

const ShowPublicReview = () => {
  const [reviews, setReviews] = useState ([]);

  console.log (reviews);
  // load all reviews from database
  useEffect (() => {
    fetch ('http://localhost:5000/reviews')
      .then (res => res.json ())
      .then (data => setReviews (data));
  }, []);

  const handleDelete = id => {
    const proceed = window.confirm('you want to delete this review')
    if(proceed){
        fetch(`http://localhost:5000/reviews/${id}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                alert('deleted successfully')
                const remaining = reviews.filter(rev => rev._id !== id)
                setReviews(remaining)
            }
        })
    }
}

  return (
    <div>
      <h1 className="text-4xl text-center font-semibold">
        {' '}What our client say{' '}
        
      </h1>
      <div className='grid grid-cols-3 gap-16'>
      {
            reviews.map(review => <AllReviewCard key={review._id} review = {review} handleDelete = {handleDelete} > </AllReviewCard>)
        }
      </div>
        
    </div>
  );
};

export default ShowPublicReview;

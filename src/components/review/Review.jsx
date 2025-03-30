import '../../styles/review.css'
import ReviewContent from './ReviewContent'
import assets from '../../assets/assets';

function Review() {
    const reviewData = [
        {
            image: assets.FlowerBg,
            id: 1,
            name: 'John Doe',
            content: 'This is a great product!',
            rating: 5,
            profession: 'Software Engineer'
        },
        {
            id: 2,
            image: assets.FlowerBg,
            name: 'Jane Smith',
            content: 'Not bad, could be better.',
            rating: 3,
            profession: 'Graphic Designer'
        },
        {
            id: 3,
            image: assets.FlowerBg,
            name: 'Alice Johnson',
            content: 'I love it! Highly recommend.',
            rating: 4,
            profession: 'Product Manager'
        }
    ];

    return (
        <div className='review'>
            <h1 className="title">Projects and Design Reviews</h1>
            <div className="reviewWrapper">
                {reviewData.map((review) => (
                    <ReviewContent key={review.id} { ...review}/>
                ))}
            </div>
        </div>
    );
}

export default Review;
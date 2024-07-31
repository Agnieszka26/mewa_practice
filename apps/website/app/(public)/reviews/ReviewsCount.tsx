import { fetchReviewsCount } from "./services";


const ReviewsCount = async () => {
    const reviewsCount = await fetchReviewsCount();
    return (
        <h3 className="mb-4">Count: {reviewsCount}</h3>
    )
}

export default ReviewsCount

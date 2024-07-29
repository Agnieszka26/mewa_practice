import { Header } from "@ems/common-ui";
import { fetchReviews } from "./services";


const ReviewsPage = async () => {
    const reviews = await fetchReviews();
    return (<div>
        <Header>reviews</Header>
        <article >
            {reviews?.map(({ id, author, content, created }) => {
                return <header key={id} className='mb-4'>
                    <h6>{created}</h6>
                    <p>{content}</p>
                    <p>{author}</p>
                </header>
            })}
        </article>

    </div>
    )
}
export default ReviewsPage

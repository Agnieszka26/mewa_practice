import { Header } from "@ems/common-ui";
import { fetchReviews } from "../app/(public)/reviews/services";
import Link from "next/link";
import { Routes } from "../routes";
const ReviewsList = async () => {
    const reviews = await fetchReviews();
    return (<div>
        <Header>reviews</Header>
        <article >
            {reviews?.map(({ id, author, content, created }) => {
                return <header key={id} className='mb-4'>
                    <h6>{created}</h6>
             <Link href={Routes.REVIEWS + `/${id}`}>

                    <p>{content}</p>
             </Link>
                    <p>{author}</p>
                </header>
            })}
        </article>

    </div>
    )
}
export default ReviewsList

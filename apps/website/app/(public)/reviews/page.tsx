import Link from "next/link";
import ReviewsList from "../../../components/ReviewList";
import { Routes } from "../../../routes/";

import { Suspense } from "react";
import ReviewsCount from "./ReviewsCount";


const ReviewsPage = async () => {
    return (<div>

        <Link href={Routes.CREATE_REVIEW} className="my-2 block text-blue-600">
            leave review
        </Link>
        <Suspense fallback={<p>Loading count ... </p>}>

            <ReviewsCount />
        </Suspense>
        <Suspense fallback={<p>Loading list ... </p>}>
            <ReviewsList />
        </Suspense>

    </div>
    )
}
export default ReviewsPage

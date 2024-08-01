import { Header } from '@ems/common-ui'
import { notFound } from 'next/navigation'
import { fetchReview } from '../services'

type Props = {
    params: {
        publicId: string
    }
}

const PageOneReview = async ({ params: { publicId } }: Props) => {
    const review = await fetchReview(publicId);
    if (!review) {
        notFound();
    }
    return (
        <div><Header>
            {review.fields.content}
        </Header>
            <p>{review.fields.author}</p>
        </div>
    )
}

export default PageOneReview

'use client'
import { AirtableReviewResponseDto, Review } from "apps/website/types";
import { format } from "date-fns";
import { useEffect, useState } from 'react';



const ReviewsList = () => {
    const [reviews, setReviews] = useState<Review[] | undefined>(undefined)
    useEffect(() => {
        fetch(process.env.NEXT_PUBLIC_AIRTABLE_BASE_URL ?? "https://api.airtable.com/v0/app02U8sgjl7BXAlV/rewiews", {
            headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_AIRTABLE_API_TOKEN}`
            }
        }).then((response) => response.json()).then((data: AirtableReviewResponseDto) => {
            const _reviews: Review[] = [];
            data.records.forEach(({ id, fields }) => {
                const { content, Created, points, author } = fields
                _reviews.push({
                    id,
                    content,
                    author,
                    points,
                    created: format(Created, 'dd.MM.yyyy')
                })
            });
            setReviews(_reviews)
        })
    }, [])
    return (
        <div>
            <h2>

                ReviewsList
            </h2>
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

export default ReviewsList

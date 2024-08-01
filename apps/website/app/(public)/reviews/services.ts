import { format } from 'date-fns';
import {
  AirtableReview,
  AirtableReviewResponseDto,
  CreateReviewDto,
  Review,
} from '../../../types';

// this is intentional redundancy for learnig purpose
export const fetchReviewsCount = async () => {
  const r = await fetch(
    process.env.NEXT_PUBLIC_AIRTABLE_BASE_URL ??
      'https://api.airtable.com/v0/app02U8sgjl7BXAlV/rewiews',
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_AIRTABLE_API_TOKEN}`,
      },
    }
  )
    .then((response) => response.json())
    .then((data: AirtableReviewResponseDto) => {
      const _reviews: Review[] = [];
      data.records.forEach(({ id, fields }) => {
        const { content, Created, points, author } = fields;
        _reviews.push({
          id,
          content,
          author,
          points,
          created: format(Created, 'dd.MM.yyyy'),
        });
      });
      return _reviews;
    });
  return r.length;
};

export const fetchReviews = async () => {
  const r = await fetch(
    process.env.NEXT_PUBLIC_AIRTABLE_BASE_URL ??
      'https://api.airtable.com/v0/app02U8sgjl7BXAlV/rewiews',
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_AIRTABLE_API_TOKEN}`,
      },
    }
  )
    .then((response) => response.json())
    .then((data: AirtableReviewResponseDto) => {
      const _reviews: Review[] = [];
      data.records.forEach(({ id, fields }) => {
        const { content, Created, points, author } = fields;
        _reviews.push({
          id,
          content,
          author,
          points,
          created: format(Created, 'dd.MM.yyyy'),
        });
      });
      return _reviews;
    });
  return r;
};

export const fetchReview = async (publicId: string) => {
  const r = await fetch(
    `${process.env.NEXT_PUBLIC_AIRTABLE_BASE_URL}/${publicId}`,

    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_AIRTABLE_API_TOKEN}`,
      },
    }
  )
    .then((response) => response.json())
    .then((data:AirtableReview) => {


      return data;
    });
  return r;
};


export const createReviewInAirtable = async (review: CreateReviewDto) => {

  const response = await fetch(`${process.env.NEXT_PUBLIC_AIRTABLE_BASE_URL}`, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_AIRTABLE_API_TOKEN}`,
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      records: [
        {
          fields: review

        },
      ],
    }),
  });
  const data = await response.json();
  console.log('data', data);
};

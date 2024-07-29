import { AirtableReviewResponseDto, Review } from 'apps/website/types';
import { format } from 'date-fns';

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

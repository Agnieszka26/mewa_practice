import { CreateReviewDto, createReviewSchema } from '../../../../types';
import { createReviewInAirtable } from '../services';

export const createReviewClient = async (review: CreateReviewDto) => {
  const result = createReviewSchema.safeParse(review);
  if (!result.success) {
    console.log('first', result.error.issues);
    return {
      status: 'error',
      payload: undefined,
    };
  } else {
    const payload = await createReviewInAirtable(review);
    return {
      status: 'success',
      payload,
    };
  }
};

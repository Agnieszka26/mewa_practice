import { z } from 'zod';
export type Review = {
  id: string;
  content: string;
  author: string;
  points: string;
  created: string;
};

export type AirtableReviewResponseDto = {
  records: AirtableReview[];
};
export type CreateReviewClientStatus =
//   | {
//       //pending

//       status: 'pending';
//       payload: undefined;
//     }
  | {
      //fullfilled

      status: 'success'
      payload: void;
    }
  | {
      //error

      status: 'error'
      data: undefined;
    };

// export type CreateReviewDto = Pick<Review, 'author' | "content"| "points">

export const createReviewSchema = z.object({
  content: z.string().min(1, 'content is requred'),
  author: z.string().min(1, 'author is requred'),
  points: z
    .string()
    .min(1, 'points is requred')
    .max(2, 'points must not be more than 99.'),
});

export type CreateReviewDto = z.infer<typeof createReviewSchema>;


export type AirtableFields ={
  content: string;
  author: string;
  points: string;
  Created: string;
}

export type AirtableReview = {
  id: string;
  fields: AirtableFields
}

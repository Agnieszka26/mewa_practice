import { http, HttpResponse } from 'msw';

const API_URL = `https://randomuser.me/api/`;

export const handlers = [
  http.get(API_URL, async () => {
    return HttpResponse.json({
      results: [
        {
          name: {
            first: 'Jan',
            last: 'Kowalski',
          },
          email: 'jan.kowalski@gmail.com',
          id: {
            name: 123,
          },
        },
        {
          name: {
            first: 'Anna',
            last: 'Maria',
          },
          email: 'annamaria@gmail.com',
          id: {
            name: 123,
          },
        },
      ],
    });
  }),
];

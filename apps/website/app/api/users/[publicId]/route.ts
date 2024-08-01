import { NextResponse } from 'next/server';


export default async function POST(request: Request) {
    const data = await request.json()
  return NextResponse.json(
    {
      userData: data
    },
    { status: 200 }
  );
}

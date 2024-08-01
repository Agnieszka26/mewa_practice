import { NextResponse } from 'next/server';
type Params ={
    params: {
        publicId: string
    }
}
export default async function GET(_request: Request, {params}: Params) {
  return NextResponse.json(
    {
      userId: params.publicId
    },
    { status: 200 }
  );
}

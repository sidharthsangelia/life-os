import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, description } = body;

    if (!title || !description) {
      return NextResponse.json(
        {message: "Title and Description is required"},
        { status: 404 }
      );
    }

    
  } catch (error) {}
}

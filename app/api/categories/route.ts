import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch('https://portal.fabbfoundation.com/api/v1/categories');
    if (!response.ok) {
      throw new Error('Failed to fetch data from external API');
    }
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}

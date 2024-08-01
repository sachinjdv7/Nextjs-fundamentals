import { error } from "console";
import { NextRequest, NextResponse } from "next/server";

interface Props {
  params: {
    id: number;
  };
}

export function GET(request: NextRequest, { params: { id } }: Props) {
  if (id > 10)
    return NextResponse.json({ error: "User does not exist" }, { status: 404 });

  return NextResponse.json({ id: 1, name: "sachin" });
}

export async function PUT(request: NextRequest, { params: { id } }: Props) {
  const body = await request.json();
  if (!body.name)
    return NextResponse.json({ error: "Name is required" }, { status: 400 });

  if (id > 10)
    return NextResponse.json({ error: "User  is not found" }, { status: 404 });

  return NextResponse.json({ id: 1, name: body.name });
}

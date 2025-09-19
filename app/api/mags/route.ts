import { connect } from "@/utils/dbConnect/dbConnect";
import magsSchema from "@/utils/schema/magsSchema";
import { NextResponse } from "next/server";

connect();

export async function POST(request: Request) {
  const { publication, title, fullDate, pubMonth, pubYear, volume, issue, pages } = await request.json();
  const regDate = Date.now();
  //return NextResponse.json({ success:false, message: `${publication}, ${title}, ${fullDate}, ${pubMonth}, ${pubYear}, ${volume}, ${issue}, ${pages}` });\
  try {
    const checkMag = await magsSchema.findOne({ title });
    if (checkMag) {
      return NextResponse.json({ success: false, message: "Magazine title already exists." }, { status: 400 });
    }

    const newMag = new magsSchema({
      publication,
      title,
      fullDate,
      pubMonth,
      pubYear,
      volume,
      issue,
      pages,
      createdAt: regDate
    });
    await newMag.save();
    return NextResponse.json({ success: true, message: "Magazine saved in the database" }, { status: 201 });
  } catch (error) {
    console.error("Error in POST /api/mags:", error);
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const allMags = await magsSchema.find().sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: allMags }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, message: "No data found." }, { status: 500 });
  }
}
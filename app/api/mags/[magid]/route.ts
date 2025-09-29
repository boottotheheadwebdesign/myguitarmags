import { connect } from "@/utils/dbConnect/dbConnect";
import { NextResponse } from "next/server";
import Mag from "@/utils/schema/magsSchema";
connect();

interface Params {
  magid: string;
}

export async function GET(request: Request, {params}: {params: Params}){
  const magId = params.magid;
  try {
    const result = await Mag.findOne({ _id: magId });
    return NextResponse.json({success: true, data: result, message: `Fetched magazine with ID ${magId}`});
  } catch (error) {
    return NextResponse.json({success: false, message: "Could not fetch data."});
  }

}
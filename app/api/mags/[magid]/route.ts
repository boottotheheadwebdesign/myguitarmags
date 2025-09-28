import { connect } from "@/utils/dbConnect/dbConnect";
import { NextResponse } from "next/server";
import Mag from "@/utils/schema/magsSchema";
connect();

interface Params {
  magid: object;
}

export async function GET(request: Request, {params}: {params: Params}){
  const magid = params.magid;
  try {
    const result = await Mag.findOne({ _id: magid });
    return NextResponse.json({success: true, data: result, message: `Fetched magazine with ID ${magid}`});
  } catch (error) {
    return NextResponse.json({success: false, message: "Could not fetch data."});
  }

}
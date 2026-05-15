import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const name = searchParams.get("name");

  if (!name) {
    return NextResponse.json(
      { error: "Missing icon name" },
      { status: 400 }
    );
  }

  try {
    const filePath = path.join(
      process.cwd(),
      "components/icons",
      `${name}.tsx`
    );

    const code = fs.readFileSync(filePath, "utf-8");

    return NextResponse.json({ code });
  } catch (error) {
    console.error("Error reading icon file:", error);
    return NextResponse.json({
      code: "// Source code not available",
    });
  }
}

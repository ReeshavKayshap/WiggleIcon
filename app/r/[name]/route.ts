import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ name: string }> }
) {
  let { name } = await params;

  if (!name) {
    return NextResponse.json({ error: "Missing icon name" }, { status: 400 });
  }

  // Strip .json if present
  name = name.replace(/\.json$/, "");

  try {
    const filePath = path.join(
      process.cwd(),
      "components/icons",
      `${name}.tsx`
    );

    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ error: "Icon not found" }, { status: 404 });
    }

    const content = fs.readFileSync(filePath, "utf-8");

    // shadcn registry format
    const registryData = {
      name: name,
      type: "registry:ui",
      dependencies: ["motion"],
      files: [
        {
          path: `components/icons/${name}.tsx`,
          content: content,
          type: "registry:ui",
        },
      ],
    };

    return NextResponse.json(registryData);
  } catch (error) {
    console.error("Error generating registry item:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

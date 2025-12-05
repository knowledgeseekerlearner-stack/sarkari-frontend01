// app/api/signup/route.ts
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firebaseUid, email, name } = body;

    if (!firebaseUid || !email) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // Use a JSDoc cast (comment) instead of `as any` so Turbopack's parser doesn't fail.
    // This keeps TypeScript happy while avoiding Type-only syntax that caused parsing errors.
    const prismaAny = /** @type {any} */ (prisma);

    const user = await prismaAny.user.upsert({
      where: { firebaseUid },
      create: {
        firebaseUid,
        email,
        name: name ?? null,
      },
      update: {
        email,
        name: name ?? null,
      },
    });

    return NextResponse.json({ success: true, user });
  } catch (err: any) {
    console.error("signup error:", err?.message ?? err);
    return NextResponse.json({ error: "internal" }, { status: 500 });
  }
}

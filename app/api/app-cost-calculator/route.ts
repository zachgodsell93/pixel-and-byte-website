import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type Feature = {
  name: string;
  cost: number;
};

export async function POST(request: NextRequest) {
  const body = await request.json();
  console.log(body);
  const { name, email, mobile, wantReachOut, features } = body;
  const message = `
    Features: ${features.map((f: Feature) => f.name).join(", ")}
  `;

  const costEstimate = features.reduce(
    (acc: number, f: Feature) => acc + f.cost,
    0
  );
  const emailBody = `
    Name: ${name}
    Email: ${email}
    Enquiring About: 'Creating an App
    Features they are after: ${message}
    Cost Estimate: ${costEstimate}
  `;

  const { data, error } = await resend.emails.send({
    from: `${name} <contact@email.pixelandbyte.com.au>`,
    replyTo: email,
    to: ["zach@pixelandbyte.com.au"],
    subject: "New app cost calculator submission",
    text: emailBody,
  });
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json(
    { message: "Email sent successfully" },
    { status: 200 }
  );
}

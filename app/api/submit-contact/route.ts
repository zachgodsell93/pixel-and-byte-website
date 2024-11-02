import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, message, company, enquiringAbout } = body;
  console.log(body);

  const emailBody = `
    Name: ${name}
    Email: ${email}
    Company: ${company}
    Enquiring About: ${enquiringAbout}
    Message: ${message}
  `;

  const { data, error } = await resend.emails.send({
    from: `${name} <contact@email.pixelandbyte.com.au>`,
    replyTo: email,
    to: ["zach@pixelandbyte.com.au"],
    subject: "New contact form submission",
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

import nodemailer from "nodemailer";
import ejs from "ejs";
import path from "path";

export const sendEmail = async ({
  to,
  subject,
  link,
  name,
}: {
  to: string;
  subject: string;
  link: string;
  name: string;
}) => {

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST!,
    port: Number(process.env.SMTP_PORT!),
    secure: false,
    auth: {
      user: process.env.SMTP_USER!,
      pass: process.env.SMTP_PASS!,
    },
  });

  const templatePath = path.join(process.cwd(), "views", "email-verification.ejs");

  const html = await ejs.renderFile(templatePath, {
    name,
    link,
  });


  await transporter.sendMail({
    from: `No Reply - Mentor Bhai`,
    to,
    subject,
    html,
  });

  console.log("✅ Email sent to:", to);
};

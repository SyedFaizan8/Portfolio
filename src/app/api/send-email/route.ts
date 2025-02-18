import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';

const emailSchema = z.object({
    fullname: z.string().min(1, 'Full name is required'),
    email: z.string().email('Invalid email address'),
    description: z.string().min(1, 'Description is required'),
});

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const validatedData = emailSchema.parse(body);

        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: `"From Portfolio (syedfaizan.in)" <${validatedData.email}>`,
            to: process.env.EMAIL_USER,
            subject: validatedData.fullname,
            text: validatedData.description,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Email sent successfully' });
    } catch (error) {
        if (error instanceof z.ZodError) {
            return NextResponse.json(
                { error: error.errors.map((e) => e.message).join(', ') },
                { status: 400 }
            );
        }
        console.error('Error sending email:', error);
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
}


import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { firstName, lastName, email, phone, subject, message, type } = body;

        // Validate required fields
        if (!email) {
            return NextResponse.json(
                { error: 'Email is required' },
                { status: 400 }
            );
        }

        if (type !== 'newsletter' && (!firstName || !message)) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Configure the transporter
        // Using environment variables for security
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT) || 587,
            secure: Boolean(process.env.SMTP_SECURE) || false, // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // Email content
        const isNewsletter = type === 'newsletter';
        const mailSubject = isNewsletter ? 'New Newsletter Subscription' : `New Contact Form Submission: ${subject}`;

        const mailOptions = {
            from: process.env.SMTP_FROM || `"Dilshaj Contact" <${process.env.SMTP_USER}>`,
            to: process.env.SMTP_TO || process.env.SMTP_USER, // Default to sending to the authenticated user if TO is not set
            subject: mailSubject,
            text: isNewsletter
                ? `New Newsletter Subscription\n\nEmail: ${email}`
                : `
        Name: ${firstName} ${lastName}
        Email: ${email}
        Phone: ${phone}
        Subject: ${subject}
        
        Message:
        ${message}
      `,
            html: isNewsletter
                ? `
                <h3>New Newsletter Subscription</h3>
                <p><strong>Email:</strong> ${email}</p>
                `
                : `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <br/>
        <p><strong>Message:</strong></p>
        <p>${message?.replace(/\n/g, '<br>')}</p>
      `,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { message: 'Email sent successfully' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { error: 'Failed to send email' },
            { status: 500 }
        );
    }
}

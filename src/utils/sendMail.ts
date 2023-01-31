import { MailPayload, SendMailFunction } from 'api'
import nodemailer from 'nodemailer'

export const sendMail: SendMailFunction = async ({ from, html, subject, text, to }) => {
    const transport = nodemailer.createTransport({
        port: process.env.MAILER_PORT,
        host: process.env.MAILER_HOST,
        auth: {
            user: process.env.MAILER_USER,
            pass: process.env.MAILER_PASSWORD
        },
        secure: true
    })
    transport.sendMail({ from: from || process.env.MAILER_USER, html, subject, text, to })
}

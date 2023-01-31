declare module 'api' {
    export type ContactBody = {
        name: string
        email: string
        phone: string
        subject: string
        message: string
    }

    export type ContactResponse = {
        name: string
        status: number
        message: string
    }

    export type MailPayload = {
        from: string
        to: string
        subject: string
        text: string
        html: string
    }

    export type SendMailFunction = (payload: MailPayload) => Promise<void>
}

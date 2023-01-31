export {}

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            MAILER_PORT: number
            MAILER_HOST: string
            MAILER_USER: string
            MAILER_PASSWORD: string
            CMS_API_URL: string
            CMS_API_TOKEN: string
        }
    }
}

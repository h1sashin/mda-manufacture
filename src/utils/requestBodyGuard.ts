export const requestBodyGuard = <T extends Record<string, unknown>>(body: any, fields: (keyof T)[]): body is T =>
    Object.keys(body).every((key) => fields.includes(key))

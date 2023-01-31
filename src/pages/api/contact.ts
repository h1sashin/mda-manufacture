import { requestBodyGuard } from '@/utils/requestBodyGuard'
import { sendMail } from '@/utils/sendMail'
import { ContactBody, ContactResponse } from 'api'
import { NextApiHandler } from 'next'

const handler: NextApiHandler<ContactResponse> = (req, res) => {
    if (!requestBodyGuard<ContactBody>(req.body, ['email', 'message', 'name', 'phone', 'subject']))
        return res.status(400).json({ name: 'Bad Request', status: 400, message: 'Invalid request body' })
}

export default handler

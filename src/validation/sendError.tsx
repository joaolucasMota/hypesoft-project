import * as Yup from "yup";

export const SendSchema = Yup.object().shape({
    fullName: Yup.string().min(2, 'Full name is too short!').required('Required field'),
    email: Yup.string().email('Invalid e-mail').required('E-mail is required'),
    subject: Yup.string().min(2, 'Subject name is too short!').required('Required field'),
    message: Yup.string().min(10, 'Message must be at least 10 characters').required('Message is required')
})
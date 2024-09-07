"use client";
import styles from "./contact-form.module.css";
import Image from "next/image";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import { SendSchema } from "@/validation/sendError";
import emailjs from "@emailjs/browser";
import Send from "@/assets/icons/sendMessage.svg";
import { IContact } from "@/interface";
import toast, { Toaster } from "react-hot-toast";

export function ContactForm() {
    const handleSubmit = (
        values: IContact,
        { resetForm }: FormikHelpers<IContact>
    ) => {
        emailjs
            .send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
                values as any,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
            )
            .then(
                () => {
                    toast.success('Email Sent!')
                    resetForm();
                },
                (error) => {
                    console.error("Erro ao enviar o email:", error.text);
                    toast.error('Sent error!')
                }
            );
    };

    return (
        <div className={styles.container} data-testid="contact-form">
            <div><Toaster
            position="top-right"
            reverseOrder={false}/></div>
            <h2>Let me know here.</h2>
            <Formik
                initialValues={{ fullName: "", email: "", subject: "", message: "" }}
                validationSchema={SendSchema}
                onSubmit={handleSubmit}
            >
                <Form method="post" className={styles.form}>
                    <div className={styles.formRow}>
                        <div className={styles.inputContainer}>
                            <Field
                                type="text"
                                id="fullName"
                                name="fullName"
                                placeholder="Full name"
                                className="input"
                            />
                            <ErrorMessage
                                name="fullName"
                                component="div"
                                className={styles.errorMessage}
                            />
                        </div>

                        <div className={styles.inputContainer}>
                            <Field
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Email address"
                            />
                            <ErrorMessage
                                name="email"
                                component="div"
                                className={styles.errorMessage}
                            />
                        </div>
                    </div>

                    <div className={styles.inputContainer}>
                        <Field
                            type="text"
                            id="subject"
                            name="subject"
                            placeholder="Subject"
                        />
                        <ErrorMessage
                            name="subject"
                            component="div"
                            className={styles.errorMessage}
                        />
                    </div>

                    <div className={styles.inputContainer}>
                        <Field
                            id="message"
                            name="message"
                            placeholder="Message"
                            as="textarea"
                            rows={9}
                        />
                        <ErrorMessage
                            name="message"
                            component="div"
                            className={styles.errorMessage}
                        />
                    </div>

                    <div>
                        <button className={styles.formButton} type="submit">
                            SEND MESSAGE
                            <Image src={Send} alt="send icon" />
                        </button>
                    </div>
                </Form>
            </Formik>
        </div>
    );
}

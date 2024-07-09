"use server";

import React from "react";
import { Resend } from "resend";
import ContactFormEmail from "@/email/contact-form-email";
import { getErrorMessage, validateString } from "@/lib/utils";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const message = formData.get("message");
  const senderEmail = formData.get("senderEmail");

  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email"
    };
  }
  if (!validateString(message, 1000)) {
    return {
      error: "Invalid message"
    };
  }

  let data;
  try {
    await resend.emails.send({
      // connect my own domain
      from: "Contact Form <onboarding@resend.dev>",
      to: "catheria12@gmail.com",
      subject: "Message from contact form",
      reply_to: senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string
      })
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error)
    };
  }

  return {
    data
  };
};

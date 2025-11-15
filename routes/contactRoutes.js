import express from "express";
import nodemailer from "nodemailer";
import Contact from "../models/Contact.js";

const router = express.Router();

// Email Transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS,
  },
});

// POST: CREATE + STORE CONTACT MESSAGE
router.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    // Save message in DB
    const newMessage = new Contact({ name, email, message });
    await newMessage.save();

    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      replyTo: email,
      subject: `New Contact Message From ${name}`,
      text: `
Name: ${name}
Email: ${email}
Message:
${message}
      `,
    });

    res.json({ success: true, message: "Message stored & email sent!" });
  } catch (err) {
    console.log("❌ EMAIL ERROR:", err);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;

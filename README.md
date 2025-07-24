# StudyHub Pro

A modern web application for engineering students to access study materials, previous year questions, and question banks.

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- Semester-wise organization of subjects
- Unit-wise study materials
- Previous year question papers
- Question banks
- Mobile-responsive design
- Beautiful UI with animations

## Technologies Used

- Next.js
- React
- Tailwind CSS
- Lucide React Icons

## Email Setup

To enable the contact form to send emails:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create a new service (Gmail, Outlook, etc.)
3. Create a new email template with the following variables:
   - `user_name`: The name of the person sending the message
   - `user_email`: The email of the person sending the message
   - `subject`: The subject of the message
   - `message`: The content of the message
4. Get your service ID, template ID, and public key
5. Update the following values in `pages/contact.js`:
   - Replace `'service_id'` with your EmailJS service ID
   - Replace `'template_id'` with your EmailJS template ID
   - Replace `'public_key'` with your EmailJS public key

After setting up EmailJS, the contact form will send emails to your specified email address.
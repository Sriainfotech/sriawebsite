# Backend for Contact Form

This is a simple Node.js/Express backend to handle contact form submissions.

## Setup

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Environment Variables**:
    The `.env` file has been created with placeholders. You need to update it with your actual email credentials to send emails.
    
    Open `.env` and update:
    ```
    EMAIL_USER=your_email@gmail.com
    EMAIL_PASS=your_app_password
    ```
    *Note: For Gmail, you need to generate an "App Password" if you have 2-Step Verification enabled.*

## Running the Server

To start the server:

```bash
node server.js
```
Or for development with auto-restart:
```bash
npm run dev
```
(You need to add `"dev": "nodemon server.js"` to scripts in package.json if it's not there, or just run `npx nodemon server.js`)

The server runs on `http://localhost:5000`.

## API Endpoints

-   **POST /api/contact**: Receives form data (`name`, `email`, `phone`, `message`) and sends an email.

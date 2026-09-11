# Authentication System API (Node.js & PostgreSQL)

A secure backend authentication system built with **Node.js**, **Express**, and **PostgreSQL**, implementing JSON Web Tokens (JWT), bcrypt password hashing, and role-based access control.

---

## 🚀 Features
* **Secure User Registration:** Validates email formats and securely hashes passwords using `bcrypt`.
* **JWT Authentication:** Generates tokens on successful login to protect private routes.
* **Role-Based Access Control (RBAC):** Restricts certain endpoints based on user roles (`User` / `Admin`).
* **Security Enhancements:** Utilizes `Helmet` for secure HTTP headers and `express-rate-limit` to prevent brute-force attacks on auth routes.
* **Input Sanitization:** Protects against malicious input injections.

---

## 🛠️ Tech Stack
* **Runtime:** Node.js & Express.js
* **Database:** PostgreSQL (with `pg` pool)
* **Authentication:** JSON Web Token (JWT)
* **Security:** Bcrypt, Helmet, Express Rate Limit, Validator

---

## 📂 Project Structure
```text
auth-system-api/
├── config/
│   └── db.js              # PostgreSQL database connection pool
├── controllers/
│   └── authController.js  # Business logic for register, login, profile
├── middleware/
│   └── authMiddleware.js  # JWT verification & role checking
├── routes/
│   └── authRoutes.js      # API endpoints & rate limiters
├── .env                   # Environment variables
├── server.js              # Entry point of the application
└── package.json           # Dependencies and scripts

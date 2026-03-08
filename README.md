# 🎯 Goal Setter

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Static Badge](https://img.shields.io/badge/Status-Project_Reorganized-brightgreen)](https://github.com/Priyansh42/IT-Company-Website)

**Goal Setter** is a comprehensive financial planning platform designed to help users visualize and achieve their financial dreams. Whether it's saving for a new car, planning for retirement, or mastering a new skill, Goal Setter provides the tools to turn aspirations into actionable plans.

---

## 🚀 Overview

Goal Setter empowers users through a collection of intuitive financial calculators and a progress-tracking dashboard. It provides a clean, responsive interface built with modern web technologies, ensuring a seamless experience across all devices.

### 🌟 Key Features

- **Financial Calculators**:
  - **EMI Calculator**: Calculate monthly installments for loans with interest.
  - **FD & RD Calculators**: Predict maturity amounts for fixed and recurring deposits.
  - **Financial Goal Planner**: A high-level tool to determine how much to save monthly for specific targets.
  - **General Financial Calculator**: Includes Savings, Mortgage, and Investment projections.
- **Progress Tracking**: A personal dashboard to monitor goals and savings.
- **Skill Hub**: Separate tracking for **Physical** and **Educational** skill goals.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop views.
- **Backend Integration**: Node.js server for data management and PHP-based mailing for inquiries.

---

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3 (Vanilla + Scss), JavaScript (ES6+), Bootstrap
- **Backend**: Node.js (Express), PHP (for mailing services)
- **Libraries**: jQuery, OwlCarousel, Lightbox, IonIcons
- **Architecture**: Organized using a clean `assets/` and `pages/` hierarchy for scalability.

---

## 📂 Project Structure

The project has been reorganized for maximum maintainability:

```text
goal-setter/
├── index.html              # Landing Page
├── assets/                 # Static Assets
│   ├── css/                # Unified stylesheets (main.css, calculator.css, etc.)
│   ├── js/                 # Functional logic (EMI, RD, goal-planner scripts)
│   ├── images/             # Optimized project imagery
│   └── media/              # Video backgrounds and assets
├── pages/                  # Functional Sub-pages
│   ├── auth/               # Login, Signup, Forgot Password
│   ├── dashboard/          # User Dashboard
│   ├── calculators/        # All calculator tools
│   ├── skills/             # Skills tracking hub
│   └── careers.html        # Career opportunities
├── backend/                # Node.js server logic
├── lib/                    # Vendor libraries (Bootstrap, JQuery)
└── mailing/                # PHP mailing handlers
```

---

## ⚙️ Setup & Installation

### Local Development
1. **Clone the repository**:
   ```bash
   git clone https://github.com/AnshGupta007/Goal-Setter.git
   ```
2. **Run the Backend (Node.js)**:
   ```bash
   cd backend
   npm install
   node server.js
   ```
3. **Open the Frontend**:
   Run a local server from the root directory (e.g., Python `http.server` or VS Code `Live Server`).

### 📧 Mailing Feature (PHP)
> [!IMPORTANT]
> The PHP Mailer feature requires a local environment like **XAMPP** or **WAMP**. 
> - Configure credentials in `mailing/mailingvariables.php`.
> - Update receiver emails in `contactme.php` and `careers.php`.

---

## 🤝 Team

Developed with passion by:
- **Gaurrang Agrawal** – Web Developer
- **Ansh Gupta** – Front End and Backend 

---

*Created as part of the MBA Tech Curriculum.*

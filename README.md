
# Click2Earn -  Complete Tasks, Earn Reward

![Click2Earn Screenshot](https://i.ibb.co.com/Vp5J68Wx/click2earn.png)

## Overview

Click2Earn enables users to complete small tasks and earn rewards. It provides **secure authentication, task creation and management, payment processing, and withdrawal options**. Users can register as **Workers** to complete tasks, **Buyers** to create and manage tasks, or **Admins** to oversee the platform. The system ensures a smooth and efficient experience with a structured reward system and role-based access control.

## Website Details

- **Website Name:** Click2Earn - Complete Tasks, Earn Reward
- **Admin Credentials:**
  - **Username:** ashiqur@rahman.com
  - **Password:** 123456aA
- **Live Site URL:** https://click2earn12.web.app
- **GitHub Repository:** https://github.com/Ashiqur1819/Click2Earn-Client-Side


---

## 🎯 Key Features

1. **Responsive Design**
   - Fully responsive across mobile, tablet, and desktop.
   - Adaptive dashboards for each role (Worker, Buyer, Admin).

2. **User Authentication**
   - Registration options: email/password or Google Sign-In.
   - Role selection during registration: Worker or Buyer.
   - Secure token-based authentication.

3. **Role-Based Dashboards**
   - **Worker:** View tasks, submit for review, withdraw earnings, and track approvals.
   - **Buyer:** Create tasks, manage submissions, purchase coins, and view payment history.
   - **Admin:** Manage users, tasks, and withdrawal requests with real-time updates.

4. **Task Management**
   - Buyers can create tasks with details, worker requirements, and payment terms.
   - Workers can view available tasks, submit work, and track earnings.
   - Admins can delete tasks and address issues.

5. **Coin System**
   - Default coins assigned upon registration: 10 (Worker) and 50 (Buyer).
   - Workers earn coins upon task approval, with 20 coins equal to $1.
   - Buyers purchase coins through Stripe payment integration.

6. **Payment and Withdrawal**
   - Workers can withdraw funds once they accumulate 200 coins ($10 minimum).
   - Buyers can make payments to workers and purchase coins using Stripe.

7. **Notifications**
   - Real-time notifications for task updates, approvals, rejections, and withdrawals.
   - Clickable pop-ups for easy access to updates.

8. **Image Uploading**
   - Utilizes imgBB to upload profile pictures and task images.

9. **Pagination**
   - My Submissions and task views include pagination for better data handling.

10. **Security**
    - Environment variables for Firebase config and MongoDB credentials.

11. **Homepage Animations**
    - Engaging animations on the homepage for a dynamic user experience.
    - Swiper-based sliders for testimonials and hero sections.

12. **Admin Tools**
    - Admin can view system stats such as total users, coins in circulation, and pending tasks.
    - Manage roles and permissions dynamically.

13. **Task Approval Workflow**
    - Buyers can approve or reject submissions with clear status updates.
    - Workers get notified immediately upon task approval or rejection.

14. **Withdrawal Management**
    - Admin reviews and approves withdrawal requests.
    - Coins deducted from the worker's balance upon successful withdrawal.


## 📁 Tech Stack
- **Frontend:** React, Tailwind CSS, React Router, 
- **Backend:** Node.js, Express.js, REST API
- **Database:** MongoDB
- **Authentication:** Firebase Auth, JWT
- **Payments:** Stripe integration
- **Hosting:** Vercel, Firebase

## 📦 Dependencies
- "@stripe/react-stripe-js": "^3.1.1"
- "@tanstack/react-query": "^5.64.1"
- "axios": "^1.7.9"
- "firebase": "^11.1.0"
- "localforage": "^1.10.0"
- "match-sorter": "^8.0.0"
- "motion": "^11.18.1"
- "react": "^18.3.1"
- "react-dom": "^18.3.1"
- "react-icons": "^5.4.0"
- "react-paginate": "^8.2.0"
- "react-rating": "^2.0.5"
- "react-router-dom": "^7.1.1"
- "react-simple-star-rating": "^5.1.7"
- "react-toastify": "^11.0.2"
- "sort-by": "^1.2.0"
- "sweetalert2": "^11.15.10"
- "swiper": "^11.2.1"

## 📜 Installation & Setup

1. Clone the repositories:
   ```bash
   git clone https://github.com/Ashiqur1819/Click2Earn-Client-Side.git
   ```

2. Install dependencies:
   ```bash
   cd Click2Earn-Client-Side && npm install
   ```

3. Set up environment variables (`.env`):

    FIREBASE_API_KEY=your_firebase_key <br/>
     REACT_APP_STRIPE_PUBLIC_KEY=your_stripe_key <br/>
     REACT_APP_IMAGE_API_KEY=your_image_key


2. Run the project:
   ```bash
   npm run dev 
   ```
## 🛠 Future Enhancements
- Automated email notifications
- Advanced search and filter functionality
- Reporting system for invalid submissions





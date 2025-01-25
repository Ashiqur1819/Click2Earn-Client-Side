# Click2Earn

Welcome to Click2Earn! This application allows users to earn money by completing small tasks, manage tasks as buyers, and oversee operations as administrators. Built using the MERN stack, this platform ensures a seamless and secure experience for all roles.

## Website Details

- **Website Name:** Click2Earn
- **Admin Credentials:**
  - **Username:** ashiqur@rahman.com
  - **Password:** 123456aA
- **Live Site URL:** https://click2earn12.web.app
- **Client-Side GitHub Repository:** 
https://github.com/Programming-Hero-Web-Course4/b10a12-client-side-Ashiqur1819
- **Server-Side GitHub Repository:** 
https://github.com/Programming-Hero-Web-Course4/b10a12-server-side-Ashiqur1819

---

## Key Features

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
   - Utilizes imgBB for uploading profile pictures and task images.

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


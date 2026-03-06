# Hotel Reservation System

A modern hotel reservation system showcasing an elegant design and user interface for browsing rooms, viewing services, and exploring hotel features.

## 🌟 Live Demo

This is a **static demo version** designed for GitHub Pages deployment. It showcases the frontend design and user interface without backend functionality.

## ✨ Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Room Gallery**: Browse through 6 different room types with detailed information
- **Interactive Chatbot**: Get instant answers to common hotel questions
- **Services Section**: Learn about hotel amenities and facilities
- **About Section**: Discover the hotel's mission and location
- **Team Section**: Meet the development team
- **Contact Form**: User interface for contacting the hotel (demo only)
- **Login/Signup Interface**: Static forms showcasing the authentication design
- **Payment Form**: Design showcase for the payment process

## 🚀 GitHub Pages Deployment

### Quick Deploy

1. **Fork or Clone this repository**
   ```bash
   git clone https://github.com/yourusername/HotelReservationSystem.git
   cd HotelReservationSystem
   ```

2. **Backend files have been removed**:
   All PHP and database files have been removed from this repository. Only frontend static files remain for GitHub Pages deployment.

3. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Prepare for GitHub Pages deployment"
   git push origin main
   ```

4. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Under "Source", select "main" branch (or "gh-pages" if you created one)
   - Click "Save"
   - Your site will be available at: `https://yourusername.github.io/HotelReservationSystem/`

## 📁 Project Structure

```
HotelReservationSystem/
├── index.html              # Main homepage (consolidated static version)
├── login-signup.html       # Login and signup forms
├── payment-form.html       # Payment form interface
├── assets/                 # Images and media files
│   ├── img/
│   │   ├── logos/
│   │   ├── portfolio/      # Room images
│   │   ├── team/           # Team member photos
│   │   └── about/          # About section images
│   └── fonts/
├── CSS/                    # Stylesheets
│   ├── styles.css          # Main styles
│   ├── Login_SignUp_Form.css
│   ├── PaymentForm2.css
│   └── ...
├── JS/                     # JavaScript files
│   ├── scripts.js          # Main functionality
│   ├── BootstrapBundle.js
│   └── ...
└── vendor/                 # Third-party libraries
    ├── jquery/
    ├── fontawesome-free/
    └── chart.js/
```

## 🛠️ Technologies Used

- **HTML5**: Structure and content
- **CSS3**: Styling and animations
- **JavaScript**: Interactive features
- **Bootstrap**: Responsive grid and components
- **Font Awesome**: Icons
- **jQuery**: DOM manipulation

## 💡 Important Notes

- This is a **frontend-only demo** version
- Login, signup, and payment forms are non-functional (display alerts)
- No actual data is stored or processed
- For a fully functional system, you need:
  - Backend server (PHP, Node.js, Python, etc.)
  - Database (MySQL, PostgreSQL, MongoDB, etc.)
  - Payment gateway integration
  - Authentication system

## 🎨 Customization

### Update Content

1. **Change hotel name/logo**: Replace images in `assets/img/logos/`
2. **Update room images**: Replace images in `assets/img/portfolio/`
3. **Modify team members**: Update images in `assets/img/team/` and edit the team section in `index.html`
4. **Change contact info**: Edit the contact section in `index.html`

### Update Colors

Modify the primary colors in `CSS/styles.css`:
```css
:root {
  --primary-color: #ffc800;
  /* Add your custom colors here */
}
```

## 📱 Testing Locally

To test the site locally before deploying:

1. Simply open `index.html` in your web browser, or
2. Use a local server:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   
   # Node.js (if you have http-server installed)
   npx http-server
   ```
3. Visit `http://localhost:8000` in your browser

## 📝 About the Original Backend

This repository originally included a full-stack PHP application with:
- User authentication (login/signup)
- Database integration (MySQL)
- Room booking system
- Payment processing
- Admin dashboard
- User profile management

**The backend files have been removed** to create a clean, frontend-only showcase suitable for GitHub Pages deployment. This static version demonstrates the UI/UX design and frontend functionality.

## 👥 Development Team

- **Carl Wyne S. Gallardo** - UI Designer
- **Ma. Isabel Cabana** - Project Manager
- **Von Cedric P. Miranda** - Asst. Designer/Analyst
- **Nazef Hawk Lague** - System Analyst
- **Cyrus Dagoc** - Programmer
- **Mechaela Abecia** - Asst. Programmer

## 📄 License

Copyright © Hotel Reservation System 2024

## 🤝 Contributing

This is a student project for our Final Project System. Contributions, issues, and feature requests are welcome!

## 📧 Contact

For questions or feedback, please use the contact form on the website (demo only) or reach out to the development team.

---

**Note**: This static version is intended for demonstration and portfolio purposes. For production use with actual reservations and payments, please implement proper backend infrastructure and security measures.


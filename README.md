# FarmMart

FarmMart is a Minimum Viable Product (MVP) designed to bridge the gap between small-scale farmers and consumers. The platform enables direct sales of farm produce, empowering farmers to reach a wider market and promoting sustainable agriculture.

---

## 🚀 Features

- **User Authentication:**  
  Secure sign up and login functionality (simulated with local storage for MVP).

- **Responsive Design:**  
  Fully responsive UI for seamless experience on desktop, tablet, and mobile devices.

- **Product Listings:**  
  Farmers can list their products with images, prices, available quantity, and special offers.

- **Product Search:**  
  Users can search for farm produce using keywords.

- **Cart & Checkout:**  
  Add products to cart and proceed to checkout (MVP logic).

- **Order Management:**  
  View pending orders, sales, and alerts.

- **Farmer Profiles:**  
  View farmer details, ratings, and more products from the same farmer.

- **Recently Viewed:**  
  Users can see products they recently viewed for quick access.

- **Error Handling:**  
  Custom 404 error page for undefined routes.

---

## 🖥️ Tech Stack

- **Frontend:** React, Tailwind CSS
- **Routing:** React Router DOM
- **Icons:** React Icons
- **State Management:** React useState, useEffect (MVP, no Redux)
- **Data Storage:** Local Storage (for authentication simulation)
- **Charts:** Chart.js (for dashboard analytics)

---
<!--
## 📦 Getting Started

### Prerequisites

- Node.js (v14 or above)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/farmmart.git
   cd farmmart/farmmvp
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server:**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open in your browser:**  
   Visit [http://localhost:3000](http://localhost:3000) -->

---

## 🗂️ Project Structure

```
farmmvp/
├── public/
│   └── ...static assets
├── src/
│   ├── assets/           # Images and static files
│   ├── components/       # Reusable components
│   ├── Pages/            # Main pages (Dashboard, Product, Cart, ErrorPage, etc.)
│   ├── App.jsx           # Main app component with routing
│   └── index.js
├── package.json
└── README.md
```

---

## 📝 Usage

- **Sign Up / Login:**  
  Create an account or log in (data stored in local storage for MVP).

- **Browse Products:**  
  View available farm produce, search, and filter.

- **Add to Cart:**  
  Add items to your cart and proceed to checkout.

- **View Dashboard:**  
  Farmers can view sales, orders, and manage listings.

- **Error Handling:**  
  Any undefined route will show a custom 404 error page.

---

## 📱 Responsive Design

FarmMart is designed to work seamlessly on all devices.  
- Sidebar collapses on mobile.
- Dashboard and product pages adapt to screen size.
- Mobile-friendly navigation and buttons.

---

## 🛠️ Customization

- **Authentication:**  
  Replace local storage logic with your preferred backend/auth provider.

- **Database:**  
  Integrate with a real database for persistent data.

- **Payment Integration:**  
  Add payment gateways for real transactions.

---
<!--
## 🤝 Contributing

Contributions are welcome!  
1. Fork the repo  
2. Create a new branch  
3. Make your changes  
4. Submit a pull request

---  -->

## 📄 License

This project is licensed under the MIT License.

---

## 🙏 Acknowledgements

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Chart.js](https://www.chartjs.org/)
- [React Icons](https://react-icons.github.io/react-icons/)
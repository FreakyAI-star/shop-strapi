# 📚 Book Catalogue - JEE Preparation

This project is a web application that serves as a catalogue of books I used while preparing for the JEE examination. It is built with a **Strapi** backend and a **Next.js** frontend. The application allows you to explore books related to various topics essential for JEE preparation.

## 🛠️ Project Structure

- **Backend:** `shop-strapi-backend/`
  - Built with [Strapi](https://strapi.io/), a powerful headless CMS.
  - Handles book catalogue data and APIs.
  - Provides admin panel for managing content.
- **Frontend:** `shop-strapi-frontend/`
  - Developed with [Next.js](https://nextjs.org/).
  - Responsible for the presentation layer and user interface of the book catalogue.
  - Pages and components for displaying book details.

## 🚀 Getting Started

### Backend Setup (Strapi)

1. **Clone the repository:**
   ```bash
   git clone https://github.com/FreakyAI-star/shop-strapi.git
   cd shop-strapi/shop-strapi-backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   - Copy `.env.example` to `.env`
   - Update the placeholder values in the `.env` file, especially `APP_KEYS`, `JWT_SECRET`, and other security-related fields.
   
4. **Start the development server:**
   ```bash
   npm run develop
   ```

5. **Access the Strapi admin panel:**
   - Open your browser and navigate to [http://localhost:1337/admin](http://localhost:1337/admin).
   - Set up an admin account to manage content.

6. **Build the admin panel:**
   ```bash
   npm run build
   ```

7. **Deployment:**
   - Follow Strapi's [deployment documentation](https://docs.strapi.io/dev-docs/deployment) to deploy your application to production.

### Frontend Setup (Next.js)

1. **Navigate to the frontend directory:**
   ```bash
   cd ../shop-strapi-frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **View the application:**
   - Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

5. **Build for production:**
   ```bash
   npm run build
   ```

6. **Deployment:**
   - The easiest way to deploy your Next.js application is to use the [Vercel platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

## 📄 Docker Setup

This project includes Docker support for both the backend and frontend applications.

### Backend (Strapi)

1. **Build and run the container:**
   ```bash
   docker build -t shop-strapi-backend .
   docker run -p 1337:1337 shop-strapi-backend
   ```

2. **Access the Strapi admin panel:**
   - Open your browser and navigate to [http://localhost:1337/admin](http://localhost:1337/admin).

### Frontend (Next.js)

1. **Build and run the container:**
   ```bash
   docker build -t shop-strapi-frontend .
   docker run -p 3000:3000 shop-strapi-frontend
   ```

2. **View the application:**
   - Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

## 📦 Dependencies

### Backend

- **Strapi**: Headless CMS for managing content.
- **SQLite**: Local database for development.
- **PostgreSQL**: Recommended database for production.
- **Plugins**: Strapi cloud, documentation, i18n, and user permissions.

### Frontend

- **Next.js**: React framework for building the frontend.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **TypeScript**: Typed JavaScript for better code quality.

## 📝 License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

## 📚 Additional Resources

- [Strapi Documentation](https://docs.strapi.io)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

Feel free to reach out if you have any questions or suggestions!

### Notes:
- The backend is configured using **Strapi**, and the frontend is built with **Next.js**.
- The project uses **Docker** for containerization, making it easier to set up the environment.

# WhatBytes Healthcare Backend

A Node.js backend API for managing users, doctors, patients, and doctor-patient mappings for a healthcare system.

## Features

- User authentication (register/login) with JWT
- Role-based users: admin, doctor, patient
- CRUD operations for doctors and patients
- Assign doctors to patients (mapping)
- Protected API routes
- PostgreSQL database with Sequelize ORM
- Sample data seeding

## Project Structure

```
.
├── config/           # Database config (JS & JSON)
├── migrations/       # Sequelize migration files
├── seeders/          # Sample data seeder
├── src/
│   ├── app.js        # Express app setup
│   ├── controllers/  # Route controllers
│   ├── middlewares/  # Auth middleware
│   ├── models/       # Sequelize models
│   └── routes/       # Express routes
├── index.js          # App entry point
├── package.json
└── .env              # Environment variables (not committed)
```

## Setup

1. **Clone the repo**

   ```sh
   git clone <repo-url>
   cd WhatBytes-Healthcare-Backend
   ```

2. **Install dependencies**

   ```sh
   npm install
   ```

3. **Configure environment variables**

   Create a `.env` file in the root:

   ```
   DB_USER=your_db_user
   DB_PASS=your_db_password
   DB_NAME=your_db_name
   DB_HOST=localhost
   JWT_SECRET=your_jwt_secret
   PORT=5000
   ```

4. **Setup the database**

   - Make sure PostgreSQL is running and your database exists.
   - Run migrations:

     ```sh
     npx sequelize-cli db:migrate --config config/config.js
     ```

   - (Optional) Seed sample data:

     ```sh
     node seeders/sampleData.js
     ```

5. **Start the server**

   ```sh
   npm run dev
   # or
   nodemon index.js
   # or
   node index.js
   ```

   The server will run at [http://localhost:5000](http://localhost:5000)

## API Endpoints

### Auth

- `POST /api/auth/register` — Register a new user
- `POST /api/auth/login` — Login and get JWT

### Patients (Protected)

- `POST /api/patients/` — Create patient
- `GET /api/patients/` — List patients created by user
- `GET /api/patients/:id` — Get patient by ID
- `PUT /api/patients/:id` — Update patient
- `DELETE /api/patients/:id` — Delete patient

### Doctors (Protected)

- `POST /api/doctors/` — Create doctor
- `GET /api/doctors/` — List doctors
- `GET /api/doctors/:id` — Get doctor by ID
- `PUT /api/doctors/:id` — Update doctor
- `DELETE /api/doctors/:id` — Delete doctor

### Mappings (Protected)

- `POST /api/mappings/` — Assign doctor to patient
- `GET /api/mappings/` — List all mappings
- `GET /api/mappings/:patientId` — Get doctors for a patient
- `DELETE /api/mappings/:id` — Remove mapping

## Notes

- All `/api/patients`, `/api/doctors`, and `/api/mappings` routes require a valid JWT in the `Authorization` header:  
  `Authorization: Bearer <token>`
- See [src/controllers/](src/controllers/) for business logic and [src/routes/](src/routes/) for route definitions.
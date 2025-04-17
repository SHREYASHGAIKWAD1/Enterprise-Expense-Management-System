
-- Enterprise Expense Management System Schema

-- 1. Roles
CREATE TABLE roles (
    role_id SERIAL PRIMARY KEY,
    role_name VARCHAR(50) UNIQUE NOT NULL
);

-- 2. Users
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role_id INT REFERENCES roles(role_id),
    status VARCHAR(20) DEFAULT 'active',
    oauth_provider VARCHAR(50),
    oauth_id VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 3. Categories
CREATE TABLE categories (
    category_id SERIAL PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL
);

-- 4. Expenses
CREATE TABLE expenses (
    expense_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(user_id),
    category_id INT REFERENCES categories(category_id),
    description TEXT,
    amount DECIMAL(10,2),
    expense_date DATE,
    status VARCHAR(20) DEFAULT 'pending',
    file_url TEXT,
    submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 5. Approvals
CREATE TABLE approvals (
    approval_id SERIAL PRIMARY KEY,
    expense_id INT REFERENCES expenses(expense_id),
    approver_id INT REFERENCES users(user_id),
    level INT, -- 1 = Manager, 2 = Finance, 3 = Admin
    status VARCHAR(20) DEFAULT 'pending',
    approval_date TIMESTAMP,
    remarks TEXT
);

-- 6. Notifications
CREATE TABLE notifications (
    notification_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(user_id),
    message TEXT,
    is_read BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 7. Logs
CREATE TABLE logs (
    log_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(user_id),
    action VARCHAR(100),
    details TEXT,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

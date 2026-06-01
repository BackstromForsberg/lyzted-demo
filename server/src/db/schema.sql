CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(100) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS listings (
    id SERIAL PRIMARY KEY,
    event_name VARCHAR(255) NOT NULL,
    venue_name VARCHAR(255) NOT NULL,
    event_date TIMESTAMP NOT NULL,
    section VARCHAR(100) NOT NULL DEFAULT 'GA',
    row_name VARCHAR(100),
    seat_numbers VARCHAR(100),
    num_seats INTEGER NOT NULL CHECK (num_seats > 0),
    price_per_seat NUMERIC(12,2) NOT NULL CHECK (price_per_seat >= 0),
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS price_history (
    id SERIAL PRIMARY KEY,
    listing_id INTEGER NOT NULL REFERENCES listings(id) ON DELETE CASCADE,
    old_price_per_seat NUMERIC(12,2) NOT NULL,
    new_price_per_seat NUMERIC(12,2) NOT NULL,
    changed_at TIMESTAMP NOT NULL DEFAULT NOW()
);
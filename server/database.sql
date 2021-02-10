CREATE DATABASE notice;
CREATE TABLE notice_details(
    notice_id SERIAL PRIMARY KEY,
    notice_poster VARCHAR(100),
    notice_text VARCHAR(255),
    hostel_name VARCHAR(10),
    expiry_dare DATE
    date_fetched DATE
);
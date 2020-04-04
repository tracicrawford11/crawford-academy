INSERT INTO users (firstname, lastname, emailaddress, phone, state, course_id, password)
VALUES ($1, $2, $3, $4, $5, $6, $7)
RETURNING*;
SELECT users.firstname, users.lastname, users.emailaddress, users.phone, users.state, courses.title
FROM users
INNER join courses
ON courses.course_id = users.course_id
WHERE users.user_id = $1
# Jobs API

## Description

This API provides functionality for user authentication and job management.

## Usage

### Base URL

Replace `{{URL}}` with your actual base URL.

### Endpoints

#### Register User

- **Description:** Registers a new user.
- **Method:** POST
- **URL:** `{{URL}}/auth/register`
- **Body:**

  ```json
  {
      "name": "arijit1234",
      "email": "arijit1234@gmail.com",
      "password": "secret"
  }
  ```

#### Login User

- **Description:** Logs in a user.
- **Method:** POST
- **URL:** `{{URL}}/auth/login`
- **Body:**

  ```json
  {
      "email": "arijit1234@gmail.com",
      "password": "secret"
  }
  ```

#### Get All Jobs

- **Description:** Retrieves all jobs.
- **Method:** GET
- **URL:** `{{URL}}/jobs`

#### Create Job

- **Description:** Creates a new job.
- **Method:** POST
- **URL:** `{{URL}}/jobs`
- **Authorization Header:** Bearer Token (Replace token with actual token)
- **Body:**

  ```json
  {
      "company": "google",
      "position": "backend developer"
  }
  ```

#### Get Job

- **Description:** Retrieves a specific job by ID.
- **Method:** GET
- **URL:** `{{URL}}/jobs/:id`
- **Authorization Header:** Bearer Token (Replace token with actual token)

#### Delete Job

- **Description:** Deletes a specific job by ID.
- **Method:** DELETE
- **URL:** `{{URL}}/jobs/:id`
- **Authorization Header:** Bearer Token (Replace token with actual token)

#### Update Job

- **Description:** Updates a specific job by ID.
- **Method:** PATCH
- **URL:** `{{URL}}/jobs/:id`
- **Authorization Header:** Bearer Token (Replace token with actual token)
- **Body:**

  ```json
  {
      "company": "Apple",
      "position": "frontend developer"
  }
  ```

## License

[Specify the license under which your API is distributed]

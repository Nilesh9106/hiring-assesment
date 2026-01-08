# Debugging Challenge: Employees Page

This repository contains a Next.js application with a new feature that has been implemented but contains several bugs. Your task is to identify and fix these bugs to make the feature work as intended.

## The Feature
An "Employees" page that lists employees with the following functionality:
-   Pagination (10 items per page)
-   Search by name or email
-   Filter by department
-   Display employee details in a table
-   Toggle employee status (active/inactive)

## Setup
- It will be automatically setup when you open the project in the dev container if not done already run below command to setup the project.
```bash
pnpm setup
```

## Files of Interest
The following files contain known issues that you need to address:

-   `app/api/employees/route.ts`: API route for fetching employees.
-   `hooks/useEmployees.ts`: Custom hook for managing employee data fetching.
-   `app/page.tsx`: The main page component.

## Instructions
-   Identify the bugs in the frontend and backend.
-   Fix the bugs to meet the feature requirements.
-   Ensure the code is robust and handles edge cases appropriately.
-   Pay attention to performance and best practices (e.g., proper dependency arrays, error handling).

## Functionality Which contains bugs
- Searching
- Department Filtering
- Pagination
- Employee Status Toggle

Good luck!

# Country Information App (Backend)

This is the backend part of the "Country Information" project By Bounce Insights. This Express server provides information about countries fetched from the REST Countries API.

## Getting Started

To run this project locally, follow these steps:

## Table of Contents

- [Prerequisites](#prerequisites)
- [Setup](#setup)
- [Start](#start)
- [API Documentation](#api-documentation)

## Prerequisites

- Node.js and npm (Node Package Manager) installed on your system.

## Setup

1. Clone the repository to your local machine:

   git clone https://github.com/tiagoluis12/country-info-backend.git

## Start

2. Navigate to the backend directory:  
   cd country-information-app/server

3. npm install to install all required dependencies.

   "axios"
   "cors"
   "express"
   "express-validator"
   "nodemon"
   "winston"

4. npm start or npm run dev

The server will start, and the API will be accessible at http://localhost:3001

## Hosting

The backend is hosted on Render and can be accessed at https://country-info-back.onrender.com/api/countries/ireland

To get another country's information, change the country name at the end of the URL.

## API Documentation

Get Country Information

Endpoint: /api/countries/:countryName

Method: GET

Parameters: countryName (path): The name of the country you want to fetch information for.

Response: If the country is found, it returns a JSON response with country information.

If the country is not found, it returns a 404 response with an error message.

Example

Request: http://localhost:3001/api/countries/Ireland

Response (Success):

{
"name": "Ireland",
"capital": "Dublin",
"population": 4,994,724,
// ...other country information
}

if the country is not found, it returns a 404 response with an error message.

{
"error": "Country not found"
}

## Running Tests

To run the tests, you have to use the following command:

node --experimental-vm-modules node_modules/jest/bin/jest.js

Jest will execute the tests and report the results in your terminal.

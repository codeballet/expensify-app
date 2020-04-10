# Expensify app
The Expensify helps you to keep track of your expenses.

## Installation and running the app in development
In order to run the app locally in development mode, you need three things:
1. Install the Node dependencies.
2. Create .env files with environment variables for connecting to the Firebase backend.
3. Run the dev-server.

### Installing Node dependencies
To install the Node dependencies, run the command:
`npm i`

### Creating .env files for Firebase
You need two `.env` files, one for running the dev-server, and one for the test suite. The files should be named:
- `.env.development`
- `.env.test`

The `.env` files should define the following environment variables:
```
FIREBASE_API_KEY=yourfirebaseapikey
FIREBASE_AUTH_DOMAIN=yourfirebaseauthdomain
FIREBASE_DATABASE_URL=yourfirebasedatabaseurl
FIREBASE_PROJECT_ID=yourfirebaseprojectid
FIREBASE_STORAGE_BUCKET=yourfirebasestoragebucket
FIREBASE_MESSAGING_SENDER_ID=yourfirebasemessagingsenderid
FIREBASE_APP_ID=yourfirebaseappid
FIREBASE_MEASUREMENT_ID=yourfirebasemeasurementid
```

### Running the dev-server
To start the dev-server, run the command:
`npm run dev-server`

### Running the test suite
To run the test suite in watch mode, while avoiding most timeout errors from asynchronous database calls, run the command:
`npm run test -- --watch --runInBand`

## Firebase Database Settings
### Security and Rules
To secure the Firebase Database, you may use the following rules:
```
{
  "rules": {
    ".read": false,
    ".write": false,
    "users": {
      "$user_id": {
        ".read": "$user_id === auth.uid",
        ".write": "$user_id === auth.uid",
        "expenses": {
          "$expense_id": {
            ".validate": "newData.hasChildren(['description', 'note', 'createdAt', 'amount'])",
            "description": {
              ".validate": "newData.isString() && newData.val().length > 0"
            },
            "note": {
              ".validate": "newData.isString()"
            },
            "createdAt": {
              ".validate": "newData.isNumber()"
            },
            "amount": {
              ".validate": "newData.isNumber()"
            },
            "$other": {
              ".validate": false
            }
          }
        },
        "$other": {
          ".validate": false
        }
      }
    }
  }
}
```
Visit https://firebase.google.com/docs/database/security to learn more about security rules.

### Firebase Authentication setting
In order for the app to be allowed to communicate with and login to Firebase, you need to make sure that you have specified the app's domain name in the Firebase Authentication 'Authorised domains' settings section.

## Running the app in production mode
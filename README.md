# React Project with Vite and Firebase Integration

This is a simple React project built with **Vite** to demonstrate fetching data from an API, displaying it in a dropdown menu, and saving selected user data to **Firebase Firestore**.

## Features
- Fetches user data from an API and populates a dropdown menu.
- Displays user details in a table when a name is selected.
- Saves the selected user data to **Firebase Firestore**.

---

## Project Setup

### How It Was Created
1. **React with Vite**: This project was bootstrapped using Vite for a fast development environment.
   - Vite was chosen for its simplicity and blazing-fast performance.
2. **Firebase Integration**: Firebase Firestore is used as the database to store the selected user data. When a name is selected from the dropdown, the associated user data is saved in Firestore.

### Technologies Used
- React (via Vite)
- Firebase (Firestore)
- JavaScript
- CSS

---

## Installation & Usage

### Prerequisites
- Node.js installed on your machine.
- Firebase account with Firestore enabled.

### Steps to Run the Project

1. **Clone the Repository**
   ```bash
   git clone https://github.com/BilalSubhani/ReactAndFirebase.git
   cd ReactAndFirebase
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run the Project**
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to the local server (e.g., `http://localhost:3000`).

---

## Firebase Setup
To make the project functional, you need to configure Firebase with your credentials.

### Steps to Configure Firebase:
1. Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/).
2. Enable Firestore in your Firebase project.
3. Create a `.env` file in the root of the project and add your Firebase configuration:
   ```env
   REACT_APP_API_KEY=your-api-key
   REACT_APP_AUTH_DOMAIN=your-auth-domain
   REACT_APP_PROJECT_ID=your-project-id
   REACT_APP_STORAGE_BUCKET=your-storage-bucket
   REACT_APP_MESSAGING_SENDER_ID=your-messaging-sender-id
   REACT_APP_APP_ID=your-app-id
   ```
4. Replace `your-api-key` and other placeholders with your Firebase project credentials.

---

## How Firebase is Used
- **Firestore Database**: When you select a name from the dropdown menu, the user data is automatically added to the Firestore database.
- You can view the saved data in the Firestore dashboard of your Firebase Console.

---

## Contributing
Feel free to clone the project and modify it to suit your needs. If you'd like to add more features or improve the project, contributions are welcome!

**Important:** Remember to use your own Firebase configuration in the `.env` file when cloning this project.

---

## License
This project is open-source and free to use.

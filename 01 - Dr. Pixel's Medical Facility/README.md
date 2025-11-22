# Dr. Pixel's Medical Facility — Coding Challenge

Welcome to **Challenge 01 – Dr. Pixel's Medical Facility**!

Your task is to implement the JavaScript for a small medical web app using **vanilla JS**, **HTML**, and **CSS**. The HTML and CSS are provided for you. You only need to work inside **script.js**, where several helpful comments and TODO items will guide your work.

---

## 🧪 Challenge Description

### 1. **Homepage (index.html)**  
A simple landing page for Dr. Pixel’s Medical Facility with a button leading to the patient registration form.

### 2. **Patient Registration Page (register.html)**  
Your job is to:

- Read and validate form inputs  
- Show error messages when fields are invalid  
- Insert submitted patients into the “Registered Patients” list  
- Clear the form after successful registration  
- (Bonus) Save the patient list using `localStorage`  

All interactions must be handled in `script.js`.

---

## 🚀 Required Features

1. Prevent form submission from refreshing the page.  
2. Validate all fields:
   - Name: cannot be empty  
   - Age: must be 1–120  
   - Symptoms: cannot be empty  
3. Display validation errors below each field.
4. If valid:
   - Add the patient to the list dynamically
   - Clear the form

---

## ⭐ Bonus Challenges (Optional)

- Store registered patients in `localStorage`
- Add a “Remove Patient” button for each entry
- Style your JS-generated elements for extra polish
- Add hover or focus animations

---

## ✔️ How to Start (Updated)

You have two options for running this challenge:

### Option 1: Quick Start (Open File Directly) 📄

The simplest way to start is to **open `index.html` or `register.html` directly** in your web browser.

> ⚠️ **Note:** If you experience issues with file paths for CSS/JS, or if you plan to use advanced features like `fetch()`, use **Option 2**.

### Option 2: Recommended Start (Using Node.js Server) 🚀

For the most reliable development experience, use the pre-configured Node.js server (`server.mjs`).

1.  **Open your terminal** in the root directory of this challenge folder. Keep in mind to open the folder the terminal in "01 - Dr. Pixel's Medical Facility" or `cd` into it.
2.  **Install dependencies:** The `package.json` file handles this for you.
    ```bash
    npm install
    ```
3.  **Run the server:** This command uses the included NPM script to start the server.
    ```bash
    npm start
    ```
4.  **Access the Challenge:** Open your web browser and navigate to the Patient Registration page to begin coding:
    **`http://localhost:3000/register.html`**

Good luck, and have fun coding!
# **SIT Blog Platform**

## **Overview**
This project is a fully responsive blog platform built using React. It includes a **dynamic blog list page with infinite scrolling**, and **a blog details page**.


## **Brief explanation of the implementation.**

### Navigation Bar

The navigation bar stays fixed at the top and includes a **logo**, **Sign In** and **Register** buttons, and a **Bell** icon. When a user clicks on a blog card, the bell counter updates through `Zustand` state.

### Blog List Page

- The blog are fetched from an API `https://jsonplaceholder.org/posts` and dynamically displayed with **titles**, **images**, **categories**, and **dates** within cards.
  
- **Infinite scrolling** is implemented so that new blogs load automatically when a user scrolls down.
  
- A **search bar** lets users filter blogs by **title** and **category**, 
  
### Blog Details Page

- When a user clicks **Read More** on a blog card, they’re navigate to the blog details page, which shows the full blog content. This data fetched from the API `
https://jsonplaceholder.org/posts/${id}`.

- The page includes a **reviews** section with reviews to demonstrate how user feedback could look.

- There’s also a simple email subscription form where users can subscribe to a **newsletter**.

### Styling and Responsiveness

Use `Tailwind CSS` to making it responsive across devices like phones and desktop.


## **Technologies Used**
- **Frontend**: `React.js`, `TypeScript`, `Tailwind CSS`.
- **State Management**: `Zustand`.


## **Setup and Instructions**
### **Prerequisites**
- Node.js
- Package manager: npm or yarn.


### **Steps to Run the Project**
1. Clone the repository:
   ```bash
   git clone https://github.com/nirjhorsaha/SIT_Nirjhor.git

   cd SIT_Nirjhor
   ```

2.  **Install dependencies**:

    ```bash
    npm install
    ```

3.  **Start the development server**:

    ```bash
    npm run dev
    ```

### Live Link: [SIT Blog](https://sit-nirjhor.vercel.app/)
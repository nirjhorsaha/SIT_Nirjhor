# **SIT Blog Platform**

## **Overview**
This project is a fully responsive blog platform built using React. It includes a `dynamic blog list page with infinite scrolling`, `a blog details page`, and `a navigation bar`.

---

## **Features**

### **Navigation Bar**
- A logo displayed on the left.
- "Sign In" and "Register" buttons on the right.
- A bell counter that increments when blog cards are clicked.
- Fixed and consistent across all pages.

### **Blog List Page**
- **Dynamic Blog Cards**:
  - Each card displays a title, image, short excerpt, category, and publication date.
  - Includes a "Read More" button linking to the blog details page.
- **Search Bar**:
  - Functional search to filter blogs by title or keywords.
- **Infinite Scroll**:
  - Automatically loads new blogs as the user scrolls near the bottom of the page.

### **Blog Details Page**
- **Dynamic Blog Content**:
  - Displays full title, main image, publication date, category, and complete content.
- **Reviews Section**:
  - Displays static reviews with reviewer name, rating, and a comment.
- **Newsletter Subscription**:
  - Includes an email input field and a "Subscribe" button.

---

## **API Endpoints**
- `https://jsonplaceholder.typicode.com/posts`.
- `https://jsonplaceholder.typicode.com/posts/1`

---

## **Technologies Used**
- **Frontend**: `React.js`, `TypeScript`, `Tailwind CSS`.
- **State Management**: `Zustand`.

---

## **Setup and Instructions**
### **Prerequisites**
- Node.js .
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


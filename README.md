# Adventa CNC Solutions

This repository contains the source code for the Adventa CNC Solutions website, a professional landing page designed to showcase the Impera FX series of flatbed CNC routers. The site is tailored for furniture makers, interior builders, and manufacturers, providing detailed machine specifications and a clear call-to-action to request a quote.

## Live Demo

A live version of the website can be viewed here: [adventacnc.com.tr](https://adventacnc.com.tr)

## Features

*   **Responsive Design**: Fully responsive layout that works on all devices, from mobile phones to desktop computers.
*   **Dynamic Machine Listing**: Machine models and their specifications are loaded from a JavaScript data object, making it easy to update and manage the product lineup.
*   **Contact Form**: A functional contact form that integrates with Formspree to handle submissions.
*   **Modern UI/UX**: Clean and modern design with a focus on user experience and clear information architecture.

## Technologies Used

*   **HTML5**: For the structure and content of the website.
*   **CSS3**: For styling, layout, and responsive design. Uses CSS custom properties for easy theme management.
*   **JavaScript (ES6)**: For dynamically generating the machine cards and other interactive elements.

## Project Structure

The project follows a simple and intuitive file structure:

```
/
├── CNAME
├── index.html              # The main HTML file
├── README.md               # This file
├── js/
│   └── machines.js         # Contains the machine data and rendering logic
└── styles/
    └── style.css           # The main stylesheet for the website
```

## Prerequisites

Before you begin, ensure you have the following installed on your system. Jekyll has a few dependencies that need to be in place.

*   **Ruby**: You'll need a Ruby version of 2.5.0 or higher. You can check your version with `ruby -v`.
*   **RubyGems**: This is Ruby's package manager. You can check your version with `gem -v`.
*   **GCC and Make**: Jekyll has native extensions that need to be compiled. You can check if you have them by running `gcc -v` and `make -v`.

For a detailed, OS-specific guide on how to install these dependencies, please follow the official Jekyll installation instructions: **[Jekyll Installation Guide](https://jekyllrb.com/docs/installation/)**

Once the prerequisites are installed, you can install the Jekyll and Bundler gems:
```sh
gem install jekyll bundler
```

## Getting Started

To get a local copy up and running, you'll need to have Ruby and Jekyll installed.

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/adventacnc.git
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd adventacnc
    ```
3.  **Install dependencies:**
    ```sh
    bundle install
    ```
4.  **Run the Jekyll server:**
    ```sh
    bundle exec jekyll serve
    ```
5.  **Open your browser** and navigate to `http://localhost:4000`. The site will automatically reload when you make changes.

Personal Website
This repository contains the source code for a personal portfolio website. It is built using HTML, CSS, and JavaScript, and includes a Dockerfile for containerized deployment.

Project Structure

personal_website/
|__ assets/
|   |___ images          # Store profession photos
|   |___ screenshots     # Stroe screenshots
|   |___ videos          # Store introduction videos
│
├── about.html           # About page
├── guess.html           # Password guess or mini-game page
├── index.html           # Main landing page
├── password.ts          # TypeScript password logic
├── password.js          # JavaScript password logic (compiled)
├── style/
│   └── optimized_main.css   # Optimized CSS styling
├── Dockerfile           # Docker configuration for deployment
├── package-lock.json    # Node package lock file
└── readme.txt           # Original readme/notes


 Getting Started

 1. Clone the Repository
 git clone https://github.com/jackh725/assessment1.git
cd personal_website

2. Run Locally
You can open index.html directly in your browser, or serve the project using a simple HTTP server:

python -m http.server 8080

Then visit: http://localhost:8080

3. Build with Docker  
(Make sure you have docker on you computer.)
docker build -t personal-website .
docker run -p 8080:80 personal-website
Visit: http://localhost:8080


4. Technologies Used
HTML5
CSS3 (Optimized styles)
JavaScript / TypeScript
Docker

5. Features
Clean and responsive design
Dedicated About page
Password-protected / guessing page
Easily deployable using Docker

License
This project is released under the MIT License. You are free to modify and distribute it.


# Product-Listing

This project is for showcasing UI of products using Vanilla HTML and JS. I have used Tailwind CSS. And the following is the guide on how to install Tailwind to your Vanilla HTML project;

Step 1: Install Tailwind CSS via npm

    Open VScode Terminal then, install Tailwind CSS and its dependencies:

    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p

Step 2: Configure Tailwind
This command creates a tailwind.config.js file and a postcss.config.js file. Open tailwind.config.js and set up the content paths to include your HTML files:
    Javascript

    /** @type {import('tailwindcss').Config} */
    module.exports = {
        content: ['./*.html', './src/**/*.js'],
        theme: {
            extend: {},
        },
        plugins: [],
    }

Step 3: Create Tailwind CSS File
Create a CSS file (e.g., styles.css) in your project and include the Tailwind directives:

    CSS

    @tailwind base;
    @tailwind components;
    @tailwind utilities;

Step 4: Build Your CSS
Add a script to your package.json to build your CSS file:

    Json

    "scripts": {
        "build:css": "tailwindcss -i ./src/styles.css -o ./dist/styles.css"
    }

Now, run the build command:

    Bash

    npm run build:css

Step 5: Link the CSS File in Your HTML
In your HTML file, link the generated CSS file:

    HTML

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="dist/styles.css">
  <title>My Project</title>
</head>
<body>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold underline">
      Hello, world!
    </h1>
  </div>
</body>
</html>

Step 6: Verify Setup
Run your project to see if Tailwind CSS is applied. If it’s working, you should see the styling applied by the Tailwind classes.

Optional: Watch for Changes
If you want Tailwind to rebuild your CSS file automatically as you make changes, you can use:

    Bash

    npx tailwindcss -i ./src/styles.css -o ./dist/styles.css --watch
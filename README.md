# Node.js Development - септември 2016

[Node.js Development - Node.js Web Server, Development Tools - септември 2016](https://youtu.be/BcynBGSoQ1I)

### Problem 1. Node.js Web Server Exercises

### Problem 2. Rewrite the server
Rewrite the server as it was presented on the lecture. Rewrite the favicon, index and static files handlers. Try to rewrite them without copy-paste driven development.

### Problem 3. Restrict the static file handler
Restrict the handler to serve only files from the ‘content’ folder. Restrict it to server only html, css, js and jpg files.

### Problem 4. Create HTML with a form
Users should be able to fill name and URL of an image and send the data to the server. The request should be POST. The server should save the name and the URL in a memory array. If the name or the URL are null or empty, the server should return a friendly error message. 

    HINT: Search online how to parse the form data on the server.

### Problem 5. Create HTML listing all saved images by their name
The server should return HTML containing all images with links to their details page. 
HINT: The HTML should be a generated runtime string depending on the current saved images.

### Problem 6. Create details page for an image
The image should have a details page where the actual image is shown.

    HINT: The URL should be something like ‘/images/details/4’ where 4 should be extracted and it shows the index of the image to show.
    
### Problem 7. Add menus
Add links to all HTML pages. Additionally, add back buttons. All links should not have a static file extension – ‘/images/all’. 

### Problem 8. Write a header handler
Write a handler that catches a header with name “StatusHeader” and with value “Full” and, if such is present to return a “status.html” file. That HTML file should show the total number of images.

### Problem 9. Use GULP to minify the HTML
Minify the served HTML with a GULP task. 

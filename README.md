# Links Tracker 
## Video Demo: https://youtu.be/VBDv0YSHpog
## Description

This is a useful Chrome extension that can be used for tracking links with a clean and a simple UI. All of the details about the functioning and the files are below

## Buttons 

Imagine a situation here, you want to save some links that you want to use for later, like some important code piece, from  a website liks Stack Overflow, or a Reddit article that you would like to read later , and you want to store the link, without clogging your bookmarks bar with too much stuff, this, this extension right here is your solution. To use this, just open up this extension. 

Now, you have two options here, either you can copy paste the tab URL in the input field provided or, you can navigate to that tab and click the save tab button. TThe Save Tab Button is meant as a convenience to the user, so that they don't have to copy paste the URL everytime. 

For the delete site button to work, the user will have to enter the URL of a tab that is listed, so as to successfully remove it, the URL should exactly match the URL listed down below. 

The delete all button is a danger button, only do it if you want to delete all of the sites that you have stored. And, please note that to successfully make it delete everything, you will have to double click the button, this was done so that the user does not end up losing their data on accident by misclicking the delete all button. 

## Files

> index.html

This HTML file is the one that provides the base for everything in the HTML and CSS to happen. Without this, the JavaScript and the CSS can't function properly. This file provides the basic layout and the UI that everyone sees when they load the extension. 

Originally, I wanted the save tab buttons and all the buttons to be on the left, but, I made some changes and aligned some of them to the right, which made the UI look more cleaner and better, and provided more accessibility to the user

> index.css

This CSS file provides all the colours to the boxes, the input fields border, the text inside the button, the background colour, basically, all the styling of the extension here comes from this one single file

Originally, I was conflicted about the colours of the buttons, which were not looking good at all and then I mostly stuck to trial and error until I stumbled upon this colour scheme which looked way too cool.

> index.js

This JavaScript File is where the magic happens. Basically, all these buttons (mentioned above), all the functions that they perform, and work according to the function that they are supposed to do, the input fields getting cleared on their own after entering the URL is all because of the JavaScript. 

> manifest.json

This file is required for the browser to see the basics of our extension like it's version, it's name, it's default popups and the permissions from the browser that it is gonna need (in the case of my extension, permission to access the tabs)

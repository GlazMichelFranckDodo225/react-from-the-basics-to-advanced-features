// Select the Tag with the Id "root"
const root = document.getElementById('root'); // <div id="root"></div>
// Create a "p" Tag
const p = document.createElement('p') // <p></p>
// Inject text into "p" Tag
p.innerText = "Hi, there !"; // <p>Hi, there !</p>
// Add Child Tag to the content of the variable "root"  (Tag with the Id "root")
root.appendChild(p) // <div id="root"><p>Hi, there !</p></div>
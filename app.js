const prolist=[
    {
        id:0,
        nam:"String Chat App",
        image:"image/string.png",
        text:"This chat app uses Socket.io and Node.js to enable anonymous users to communicate securely in real-time using encrypted messages. The HTML/CSS interface ensures a smooth user experience, while Node.js handles the backend. ",
        link:"https://amanjha9716.github.io/string"
    },{
        id:1,
        nam:"Color Guess Game",
        image:"image/colorguessgame.png",
        text:"Color Guess Game is a simple guessing game where the player has to guess a color based on a given hint. The game is implemented using HTML, CSS, and JavaScript, and involves basic DOM manipulation and event handling.",
        link:"https://amanjha9716.github.io/colorgame/"
    },{
        id:2,
        nam:"Whack A Mole",
        
        image:"image/whackamole.png",
        text:"Whack A Mole is an arcade game with a front-end created using HTML, CSS, and JavaScript. The interface includes a playing field with moles popping up from holes, a scoreboard, and timer. DOM manipulation and event handling are used for interactivity, while sound effects and animations enhance the user experience.",
        link:"https://amanjha9716.github.io/whack-a-mole-game/"
    },
    {
        id:3,
        nam:"calculator",
        image:"image/calc.png",
        text:"A calculator app with a GUI provides users with a visual interface to perform arithmetic operations. The GUI is designed using HTML, CSS, and JavaScript with libraries/frameworks like React or Vue.js. It includes a keypad, a display area, and buttons for various functions. Event handling and DOM manipulation allow for real-time calculation.",
        link:"https://amanjha9716.github.io/calculator/"
    },
    {
        id:4,
        nam:"Amazon FE clone",
        image:"image/amazon.png",
        text:"An Amazon front-end clone is a web application that emulates the Amazon e-commerce platform's user interface. It is created with HTML, CSS, and JavaScript, using React and Bootstrap frameworks. Features include product listings, search functionality, shopping cart, and checkout. Responsive design ensures a smooth user experience across devices.",
        link:"https://amanjha9716.github.io/amazon-clone/"
    },
    {
        id:5,
        nam:"Canvas",
        image:"image/canvas.png",
        text:"A basic canvas app utilizes the HTML5 canvas element and JavaScript to create a canvas that changes color of writing on its own. The canvas includes a drawing tool, and the color of the writing is changed through JavaScript code that modifies the fill color randomly or based on a specific pattern. Event handling is used to capture user input and DOM manipulation is used to update the canvas in real-time.",
        link:"https://amanjha9716.github.io/canvas/canvas.html"
    },
    {
        id:6,
        nam:"Upcoming Projects",
        image:"image/wait.jpg",
        text:"I am thrilled to share that I have several upcoming projects in the pipeline! I am currently working on developing a state-of-the-art school management system that can perform CRUD operations, simplifying the workload for educators. In addition, I am also working on a machine learning project, specifically a chronic kidney disease detector that utilizes advanced algorithms to detect early signs of the condition. I take pride in staying ahead of the curve and developing innovative solutions to complex problems. Stay tuned for more updates on these exciting projects! ",
        link:"#projects"
    }
    
    
];
const box=document.querySelector(".procards");
let chk=0;
function update(temp){

    box.innerHTML=
    `<div data-aos="fade-right"
        data-aos-offset="100"
        data-aos-easing="ease-in-sine" class="cardpor" >
          <div class="cardimg">
            <img src="${temp.image}" alt="">
          </div>
          <div class="cardcontent">
            <h2>${temp.nam}</h2>
            <p>${temp.text}</p>
            <a href="${temp.link}" target="_blank"class="cardbtn">View Project</a>
          </div>
        </div>`;
    
}
document.querySelectorAll(".opt").forEach((x)=>{
    x.addEventListener("click",(e)=>{
        t=e.target.className;
        console.log(t[4]);
        const temp=prolist.filter((x)=>x.id==t[4]);
        if(chk==t[4])
        {

        }
        else
        {
            update(temp[0]);
        console.log(temp);
        chk=t[4];
        }
        

});

});

document.querySelector("form").addEventListener("submit",(e)=>{
    alert(` Dear  ${document.querySelector("#fname").value},

    Thank you for reaching out to me. I appreciate your contact and will 
    respond as promptly as possible.
    
    Best regards,
    Abhishek jha`);
    e.preventDefault();
    
  });
 
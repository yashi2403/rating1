// const button = document.querySelectorAll(".btn");

// button.forEach(button=>{
//  button.addEventListener('click', function(){
//     button.forEach(btn => btn.classList.remove("active"));
//     button.classList.add("active");
//  });
//  button.addEventListener('mouseover' , function(){
//     button.classList.add("hover");
//  });
//  button.addEventListener('mouseout' , function(){
//     button.classList.remove("hover");
//  });
// });


// ctnbutton = document.querySelectorAll(".btn");
 
// button.forEach(button => {
//     btn.addEventListener('click', () => {
//       // Remove 'active' class from all buttons
//       button.forEach(button => button.classList.remove("active"));
      
//       // Add 'active' class to the clicked button
//       btn.classList.add("active");
//     });
//   });


//  btn.addEventListener('mouseover' , function(){
//     btn.classList.add("hover");
//  });
//  btn.addEventListener('mouseout' , function(){
//     btn.classList.remove("hover");
//  });



const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
     buttons.forEach(button => button.classList.remove("active"));
     btn.classList.add("active");

     const rating =btn.getAttribute("data-rating");
     localStorage.setItem("selectedRating" , rating);
  });

  btn.addEventListener('mouseover', () => {
    btn.classList.add("hover");
  });

  btn.addEventListener('mouseout', () => {
    btn.classList.remove("hover");
  });
});


const submitButton = document.getElementById("submitt");
submitButton.addEventListener('click', () => {
  // Redirect to the next page after clicking submit
  window.location.href = "next-page.html";
});
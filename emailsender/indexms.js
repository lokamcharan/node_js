var cherry = require("nodemailer");

var transporter = cherry.createTransport({
  host: "smtp.gmail.com",
  secure: false,
  auth: {
    user: "lokamcharan6666@gmail.com",
    pass: "tudd dfxp yivq tihd",
  },
});

var options = {
  from: "lokamcharan6666@gmail.com",
  to: "sowmyagoud0304@gmail.com",
  subject: "Testing Node Emails",
  text: "ALL THE BEST TOM",
};

transporter.sendMail(options, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("sent");
  }
});



// var cherry = require("nodemailer");

// var transporter = cherry.createTransport({
//   host: "smtp.gmail.com",
//   secure: false,
//   auth: {
//     user: "lokamcharan6666@gmail.com",
//     pass: "tudd dfxp yivq tihd",
//   },
// });

// var options = {
//   from: "lokamcharan6666@gmail.com",
//   to: "jeevanpalapati@gmail.com",
//   subject: "Testing Node Emails",
//   html:`<h1>Welcome to our application
//   <img src='cid:virat' width:'400px'>`,
//   attachments:[{
//     filename:'virat.jpeg',
//     path:"https://th.bing.com/th/id/OIP.Inh6WtiBwLZ0Ljq97bDs2AHaD4?w=302&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
//     cid:'virat'
//   }]
// };

// transporter.sendMail(options, function (error, info) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("sent");
//   }
// });




var cherry = require("nodemailer");

var transporter = cherry.createTransport({
  host: "smtp.gmail.com",
  secure: false,
  auth: {
    user: "lokamcharan6666@gmail.com",
    pass: "tudd dfxp yivq tihd",
  },
});

var options = {
  from: "lokamcharan6666@gmail.com",
  to: "jeevanpalapati@gmail.com",
  subject: "Testing Node Emails",
  html:`<h1>Welcome to our application
  
  <p>Check out this video!</p>
         <video width="400" controls>
           <source src="cid:samplevideo" type="video/mp4">
           Your browser does not support the video tag.
         </video>`,
  attachments:[{
    filename:'virat.mp4',
    path:"https://youtu.be/OlEJLvYTM30",
    cid:'virat'
  }]
};

transporter.sendMail(options, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("sent");
  }
});


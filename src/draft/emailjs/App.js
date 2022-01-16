// import emailjs from "@emailjs/browser";
// const emailjs = require("@emailjs/browser");

// document.querySelector("#register").addEventListener("submit", function () {
//   console.log(123);
//   emailjs.init("user_QJuM7VrrMsyAvFhO0WnXD");

//   const name = document.querySelector("#user-name").value;
//   const email = document.querySelector("#user-email").value;

//   emailjs
//     .send("service_35n0prq", "template_1cwj8n9", {
//       from_name: "Liz",
//       to_name: name,
//       to_email: email,
//       message: `Hi, ${name} congratulation join us`,
//     })
//     .then((response) => {
//       console.log(response);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// import React, {useRef} from 'react'

// function App() {
//   return (
//     <div className="container p-3">
//       <div className="row justify-content-center">
//         <button
//           className="btn btn-danger"
//           onClick={function () {
//             emailjs
//               .send("service_35n0prq", "template_1cwj8n9", {
//                 from_name: "Liz",
//                 to_name: "Rosa",
//                 to_email: "pyfissh@gmail.com",
//                 message: "Hi, Rosa congratulation join us!",
//               })
//               .then((response) => {
//                 console.log(response);
//               })
//               .catch((err) => {
//                 console.error(err);
//               });
//           }}
//         >
//           Emailjs Send
//         </button>
//       </div>
//     </div>
//   );
// }

// export default App;

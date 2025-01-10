import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './style/contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setErrorMessage("");
    setIsSent(false);

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID,e.target, {
        publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
      })
      .then((result) => {
        console.log("Success",result.text);
        setIsSent(true);
        form.current.reset();
      }, (error) => {
        console.error(error.text);
        setErrorMessage("An error occurred. Please try again later.");
      });
    };
  
    return (
      (
        <div className="contact-container">
          <h1>Contact Me</h1>
          <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
    
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
    
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
    
            <button type="submit">Send</button>
          </form>
          {status && <p className="status">{status}</p>}
        </div>
    );
  };


export default Contact

// import { useState } from 'react';
// const Contact = () => {
//   // const [formData, setFormData]= useState({

//   // })


//  const handleFormSubmit= (e) => {
//     e.preventDefault();
//     console.log('Submitted')
//     window.location.href='mailto:katherineelainearenas@gmail.com';
//   }

//     return (
//       <section className="section">
//         <div className="container">
//           <h1 className="title">Contact Katherine</h1>
//           <form onSubmit={handleFormSubmit}>
//             <div className="field">
//               <label className="label">Name</label>
//               <div className="control">
//                 <input className="input" type="text" placeholder="Your Name" />
//               </div>
//             </div>
  
//             <div className="field">
//               <label className="label">Email</label>
//               <div className="control">
//                 <input className="input" type="email" placeholder="Your Email" />
//               </div>
//             </div>
  
//             <div className="field">
//               <label className="label">Message</label>
//               <div className="control">
//                 <textarea className="textarea" placeholder="Your Message"></textarea>
//               </div>
//             </div>
  
//             <div className="control">
//               <button className="button is-primary" type="submit">Submit</button>
//             </div>
//           </form>
//         </div>
//       </section>
//     );
//   };
//   export default Contact



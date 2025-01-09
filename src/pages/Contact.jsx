import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './style/contact.css'


const Contact = () => {
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
        console.log(result.text);
        setIsSent(true);
        form.current.reset();
      }, (error) => {
        console.error(error.text);
        setErrorMessage("An error occurred. Please try again later.");
      });
    };
  
    return (
      <section className="section">
        <div className="container">
          <h1 className="title">Contact Me</h1>
          
          <form ref={form} onSubmit={sendEmail}>
            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input className="input" type="text" name="user_name" placeholder="Your Name" required />
              </div>
            </div>
  
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input className="input" type="email" name="user_email" placeholder="Your Email" required />
              </div>
            </div>
  
            <div className="field">
              <label className="label">Message</label>
              <div className="control">
                <textarea className="textarea" name="message" placeholder="Your Message" required></textarea>
              </div>
            </div>
  
            <div className="control">
              <button className="button is-primary" type="submit">Send Message</button>
            </div>
          </form>
  
          {isSent && <p className="notification is-success mt-4">Your message has been sent successfully!</p>}
          {errorMessage && <p className="notification is-danger mt-4">{errorMessage}</p>}
        </div>
      </section>
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



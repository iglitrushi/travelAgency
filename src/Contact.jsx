import React from 'react';
import './Contact.css'
import message from './../../my-project/src/message.png'
import mail from './../../my-project/src/mail.png'
import phone from './../../my-project/src/phone.png'
import location from './../../my-project/src/location.png'
const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "46e3bd97-04d0-439f-a219-467c50530bba");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const res = await response.json();

    if (res.success) {
      console.log("Form Submitted Successfully",res);
      setResult(res.message)
      event.target.reset();
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
  };
  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={message} alt=""/></h3>
            <p>Feel free to reach out through contact form or find our contact
                information below. Your feedback, questions, and suggestions are 
                important to us as we strive to provide exceptional service to our 
                travel agency</p>
                <ul>
                    <li><img src={mail} alt=""/>Contact@AirFly.dev</li>
                    <li><img src={phone} alt=""/>+355 68-781-319</li>
                    <li><img src={location} alt=""/>St. Xhanfize Keko<br/> Tirana , Albania</li>
                </ul>
           </div>
           <div className="contact-col"></div>
           <form onSubmit={onSubmit}>
                <label>Your name</label>
                <input type="text" name='name' placeholder='Enter your name'
                required/>
                <label>Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter your phone number'
                required/>
                <label>Write your messages here</label>
                <textarea name='message' placeholder='Write your message here'  
                required></textarea>
                <button type='submit' className='btn dark-btn'>Submit now</button>
           </form>
           <span>{result}</span>
    </div>
  )
}

export default Contact
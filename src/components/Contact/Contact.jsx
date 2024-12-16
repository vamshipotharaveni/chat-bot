import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "ea2dac73-5c77-44a7-9cc8-8545a3cd225b");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {

          alert(res.message);
        }
      };
    return (
        <div id="contact" className='contact'>
            <div className='contact-title'>
                <h1>Get in touch</h1>
                <img src={theme_pattern} alt='' />
            </div>
            <div className='contact-section'>
                <div className='contact-left'>
                    <h1>Let's talk</h1>
                    <div className='contact-details'>
                        <div className='contact-detail'>
                            <img src={mail_icon} alt='' /><p>potharavenivamshi2003@gmail.com</p>
                        </div>
                        <div className='contact-detail'>
                            <img src={call_icon} alt='' /><p>+91  7075990590</p>
                        </div>
                        <div className='contact-detail'>
                            <img src={location_icon} alt='' /><p>Telangana, India</p>
                        </div>
                        <div className='contact-detail'>
                          
                                
                        <a href="https://instagram.com/
_vamshi_yadav__001" target="_blank" class="instagram-link">
  <i class="fab fa-instagram"></i>
  <span>Instagram</span>
</a>
                        </div>

                    </div>
                </div>

                <form onSubmit={onSubmit} className='contact-right'>
                    <label htmlFor=''>Your Name</label>
                    <input type="text" placeholder='Enter your name' name='name' />
                    <label htmlFor=''>Your Email</label>
                    <input type="text" placeholder='Enter your Email' name='email' />
                    <label htmlFor=''>Your Feedback</label>
                    <textarea name='message' rows='8' placeholder='Enter your message' ></textarea>
                    <button type='submit' className='contact-submit'>Submit now</button>
                </form>

            </div>
        </div>
    )

}
export default Contact
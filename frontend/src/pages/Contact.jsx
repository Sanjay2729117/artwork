import React from 'react';
import '../components/css/Contact.css'
const Contact = () => {
  return (
    
   
    <div className="contact_us_8">
       
      <div className="responsive-container-block container">
        <form className="form-box"  action="https://formspree.io/f/xkndwlen"
  method="POST">
          <div className="container-block form-wrapper">
            
        <h1 className='cont'>Fill details and get your Product😊</h1>
            <div className="responsive-container-block">
              <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-8 wk-ipadp-12" id="i10mt-9">
                <input className="input" id="ijowk-9" name="FirstName" placeholder="First Name" />
              </div>
              <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-8 wk-ipadp-12" id="ieakm">
                <input className="input" id="indfi-7" name="LastName" placeholder="Last Name" />
              </div>
              <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-8 wk-ipadp-12" id="iajvf">
                <input className="input" id="ipmgh-9" name="Email" placeholder="Email" />
              </div>
              <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-8 wk-ipadp-12" id="i0txn">
                <input className="input" id="imgis-8" name="PhoneNumber" placeholder="Phone Number" />
              </div>
              <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-8 wk-ipadp-12" id="i634i-9">
              <input className="input" id="imgis-8" name="ProductID" placeholder="Product ID" />
              </div>
            </div>
            <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-8 wk-ipadp-12 checkbox-container" id="i634i-2-2">
              
            </div>
            <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-8 wk-ipadp-12" id="i0txn-2">
              <button className="submit-btn" type="submit">
                Submit
              </button>
            </div>
          
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

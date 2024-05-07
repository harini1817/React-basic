import React , { useState }from 'react'
import  './styles.css';

export default function Myform() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      setEmailError('Email is required');
      return;
    }
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email');
      return;
    }
    // Form submission logic here
    console.log('Form submitted:', email);
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  return (
<section class="box"> 
        <h3>Sign in</h3> 
        <form  onsubmit="{handleSubmit}">
        <div className="row">
          <div className="col">
            <label> Firstname : </label>
          </div>
          <div className="col">
            <input type="text" name="firstname" size="15" />
          </div>
          <div className="col">
            <label> Lastname: </label>
          </div>
          <div className="col">
            <input type="text" name="lastname" size="15" /> 
            
          </div>
        </div>


          <div className="row">
          <div className="col-sm-2">
            <label>Course :</label>
          </div>
          <div className="col">
            <select>
              <option value="Course">Course</option>
              <option>IT</option>
              <option>CSE</option>
              <option>EEE</option>
            </select>
          </div>
          <div className="col">
            <label className="radio"> Gender: </label>
          </div>
          <div className="col">
            <input type="radio" name="radio" /> Male 
            <input type="radio" name="radio" /> Female 
          </div>
        </div>

      <div class="row">
        <div class="col-2">
            <label>Phone:</label>
            </div>
                
            <div className='col-4'>
              <input type="text" name="country code" value="+91" size="2" />
              <input type="text" name="phone" size="10" />
            </div>
        </div>
            
    
  
        

<div class="row">
  <div class="col-2">
    <label>Address:</label>
  </div>
  <div className='col-4'>
    <textarea cols="20" rows="3" value="address"></textarea>
  </div>
</div>


        <div className="row">
          <div className="col-2">
            <label>Email: </label>
          </div>
          <div className="col">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your valid email id"
            />
          </div>
          <div className="col">
            <label for="">DOB:</label>
          </div>
          <div className="col">
            <input type="date"/>
          </div>
        </div>

        <div className="row">
          <div className="col-2">
            <label for="psw">Password:</label>
          </div>
          <div className="col">
            <input
              type="password"
              id="psw"
              name="psw"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
              required
            />
          </div>
            <div className="col-5">
            <button>Check</button>
            </div>
            
          
        
          
          
        </div>

        <div class="row">
          <div class="col-2">
            <button>submit</button>
          </div>
        </div>
        </form>






</section>
  )
}


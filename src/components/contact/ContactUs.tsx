// import { useState } from 'react'
// import './contact.css'
// import useForm from '../../utilities/useForm'

// export const ContactUs = () => {
//   const [bool, setBool] = useState(false)

//   const email = useForm()
//   const phone = useForm()
//   const name = useForm()
//   const message = useForm()


//   function HandleSubmit(e: React.FormEvent<HTMLElement>) {
//     e.preventDefault()
//     if (email.value.trim().length <= 0 && !email.value.includes('@')||(
//       name.value.trim().length <=0
//     )||(phone.value.trim().length <= 0)||(message.value.trim().length <= 0)) {
//       setBool(true)
//       setTimeout(() => {
//         setBool(false)
//       },3000)
//     } else{
//       alert('Details Submitted')
//     }
//   }
//   return (
//     <div className="contact-us">
//         <div className="contact-bdy">
//           <div className="contact-mesg">
//             <div className="text">
//               <h1>Contact Us</h1>
//               <p>Ready to take it to the next level? Let’s talk about your
//                 project or idea and find out how we can help your business grow. 
//                 If you are looking for unique digital experiences that’s relatable
//                   to your users, drop us a line.</p>
//             </div>
//           </div>
//           <div className="form-bdy">
//           <form onSubmit={HandleSubmit}>
//             <div className="label">
//               <label>
//                 <input type="text"
//                 value={name.value}
//                 onChange={name.handleChange} placeholder="Name" />
//               </label>
//               {name.value.trim().length <= 0 && bool ? <p><i>Can't be empty</i></p>: ''}
//             </div>
//             <div className="label">
//               <label>
//                 <input
//                 value={email.value}
//                 onChange={email.handleChange}
//                 type="email" placeholder="Email Adress" />
//               </label>
//               {email.value.trim().length <= 0 && bool ? <p><i>please use a valid email address</i></p>: ''}
//             </div>
//             <div className="label">
//               <label>
//                 <input type="phone"
//                 value={phone.value}
//                 onChange={phone.handleChange}
//                  placeholder="Phone" />
//               </label>
//               {phone.value.trim().length <= 0 && bool ? <p><i>Can't be empty</i></p>: ''}
//             </div>
//             <div className="label label1">
//               <label>
//                 <textarea
//                   value={message.value}
//                   onChange={message.handleChange}  cols={30}  placeholder='Your Message'></textarea>
//               </label>
//               {message.value.trim().length <= 0 && bool ? <p><i>Can't be empty</i></p>: ''}
//             </div>
//             <button type='submit' className="btn btn-light">submit</button>
//           </form>
//           </div>
//         </div>
//     </div>
//   )
// }


import { useState } from 'react'
import './contact.css'
import useForm from '../../utilities/useForm'
import emailjs from '@emailjs/browser'

export const ContactUs = () => {
  const [bool, setBool] = useState(false)
  const [success, setSuccess] = useState(false)

  const email = useForm()
  const phone = useForm()
  const name = useForm()
  const message = useForm()

  function HandleSubmit(e: React.FormEvent<HTMLElement>) {
    e.preventDefault()

    if (
      (email.value.trim().length <= 0 || !email.value.includes('@')) ||
      (name.value.trim().length <= 0) ||
      (phone.value.trim().length <= 0) ||
      (message.value.trim().length <= 0)
    ) {
      setBool(true)
      setTimeout(() => {
        setBool(false)
      }, 3000)
    } else {
      // Send email via EmailJS
      const templateParams = {
        from_name: name.value,
        from_email: email.value,
        phone: phone.value,
        message: message.value,
      }

      emailjs
        .send(
          'service_eij1s4u',   // replace with your EmailJS service ID
          'template_8ohujkf',  // replace with your template ID
          templateParams,
          'zmeY_7I0w8Mfiq_rN'    // replace with your EmailJS public key
        )
        .then(
          () => {
            setSuccess(true)
            setTimeout(() => setSuccess(false), 4000)
            // Clear form after success
            name.handleChange({ target: { value: '' } } as any)
            email.handleChange({ target: { value: '' } } as any)
            phone.handleChange({ target: { value: '' } } as any)
            message.handleChange({ target: { value: '' } } as any)
          },
          (error) => {
            console.error('FAILED...', error.text)
            alert('Something went wrong, please try again.')
          }
        )
    }
  }

  return (
    <div className="contact-us">
      <div className="contact-bdy">
        <div className="contact-mesg">
          <div className="text">
            <h1>Contact Us</h1>
            <p>
              Ready to take it to the next level? Let’s talk about your
              project or idea and find out how we can help your business grow.
              If you are looking for unique digital experiences that’s relatable
              to your users, drop us a line.
            </p>
          </div>
        </div>
        <div className="form-bdy">
          <form onSubmit={HandleSubmit}>
            <div className="label">
              <label>
                <input
                  type="text"
                  value={name.value}
                  onChange={name.handleChange}
                  placeholder="Name"
                />
              </label>
              {name.value.trim().length <= 0 && bool ? <p><i>Can't be empty</i></p> : ''}
            </div>
            <div className="label">
              <label>
                <input
                  value={email.value}
                  onChange={email.handleChange}
                  type="email"
                  placeholder="Email Address"
                />
              </label>
              {email.value.trim().length <= 0 && bool ? (
                <p><i>Please use a valid email address</i></p>
              ) : (
                ''
              )}
            </div>
            <div className="label">
              <label>
                <input
                  type="tel"
                  value={phone.value}
                  onChange={phone.handleChange}
                  placeholder="Phone"
                />
              </label>
              {phone.value.trim().length <= 0 && bool ? <p><i>Can't be empty</i></p> : ''}
            </div>
            <div className="label label1">
              <label>
                <textarea
                  value={message.value}
                  onChange={message.handleChange}
                  cols={30}
                  placeholder="Your Message"
                ></textarea>
              </label>
              {message.value.trim().length <= 0 && bool ? <p><i>Can't be empty</i></p> : ''}
            </div>
            <button type="submit" className="btn btn-light">Submit</button>
          </form>

          {/* success message */}
          {success && <p className="success-msg">Message Sent Successfully!</p>}
        </div>
      </div>
    </div>
  )
}

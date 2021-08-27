import React, {useState} from 'react';
import emailjs from 'emailjs-com';
import {useForm} from "react-hook-form";

function Contacts  () {
    const [successMessage,setupSuccessMessage] = useState("");
    const{register, handleSubmit, formState:{errors} } = useForm();

    const serviceID = "service_ID";
    const templateID = "template_ID";
    const userID = "user_GZdYXo5iGqU36HWWhn7DB";

    const onSubmit = (data, r) => {
        sendEmail (
            serviceID,
            templateID,
            {
                name: data.name,
                phone: data.phone,
                email: data.email,
                subject: data.subject,
                description: data.description


            },
            userID
        )
        r.target.reset();

    }

    const sendEmail = (serviceID, templateID, variables, userID) => {
        
        emailjs.send(serviceID, templateID, variables, userID)
          .then(() => {
            setupSuccessMessage("Message sent. Thank you, I will contact you as soon as possible!");
          }).catch(err => console.error(`Uh oh, something went wrong ${err}`));
        }





    return (
        <div id="contact" className= "contacts">
            <div className="text-center">
            <h1>contact me</h1>
            <p>Please fill out the form below and briefly describe what service you are inquiring about. </p>
            <span className="success-message">{successMessage}</span>
            </div>
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-md-6 col-xs-12">
                        {/*Name*/}
                        <div className="text-center">
                        <input
                        type="text" 
                        id="name"
                        className="form-control"
                        placeholder="Name"
                        name="name"
                        {...register("name",{
                                required: "Please enter your name",
                                maxLength: {
                                    value:20,
                                    message: "Please enter a name with fewer than 30 characters"
                                }

                        })
                    }
                        />
                        <div className="line"></div>
                        </div>
                        <span className="error-message">
                            {errors.name && errors.name.message}
                        </span>

                         {/*Phone Number */}
                        <div className="text-center">
                        <input 
                        id="phone"
                        className="form-control"
                        placeholder="Phone Number"
                        name="phone"
                        type="text"
                        {...register("phone",{
                            required: "Please add your phone number",
                            })
                        }
                        />
                        <div className="line"></div>
                        </div>

                        <span className="error-message">
                        {errors.phone && errors.phone.message}
                        </span>



                        {/*Email */}
                        <div className="text-center">
                        <input 
                        type="email"
                        id="email"
                        className="form-control"
                        placeholder="Email"
                        name="email"
                        {...register("email",{
                            required: "Please provide your email",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "invalid Email"
                            }
                            })
                        }
                        />
                        <div className="line"></div>
                        </div>
                        <span className="error-message">
                {errors.email && errors.email.message}
                        </span>


                        {/*Subject */}
                        <div className="text-center">
                        <input 
                        id="subject"
                        className="form-control"
                        placeholder="Subject"
                        name="subject"
                        type="text"
                        {...register("subject",{
                            required: "OOPS, you forgot to add the subject.",
                            })
                        }
                        />
                        <div className="line"></div>
                        </div>
                        <span className="error-message">
                {errors.subject && errors.subject.message}
                </span>


                    </div>
                    <div className="col-md-6 col-xs-12">
                        {/*Description*/}
                        <div className="text-center">
                        <textarea
                        id="description"
                        className="form-control"
                        placeholder="Description"
                        name="description"
                        type="text"
                        {...register("description",{
                            required: "Please describe what you need",
                            })
                        }

                        ></textarea>
                        <div className="line" id="description-line"></div>
                        </div>
                        <span className="error-message">
                {errors.description && errors.description.message}
            </span>


                    </div>
                    
                </div>
                <div id="button">
                        <button className="btn-main-offer contact-btn" type="submit">contact me</button>
                        </div>
                        </form>
            </div>
            
        </div>
    )
}

export default Contacts

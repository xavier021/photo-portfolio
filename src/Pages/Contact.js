import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Col, Container, Row } from "react-bootstrap";
import {
  PageAnimated,
  visible,
} from "../Components/AnimatedRoutes/PageAnimated";
import "./Contact.css";
import { useForm, FormProvider } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckDouble, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { Input, TextArea } from "../Components/Layout/Input";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";


function Contact() {
  const methods = useForm();
  const [success, setSuccess] = useState(false);
  const [captcha, setCaptcha] = useState(false);
  const refCaptcha = useRef();

  const onSubmit = methods.handleSubmit((data) => {
    console.log(data);
    const token = refCaptcha.current.getValue();
    console.log(token)

    methods.reset();
    setSuccess(true);

    const params= {
      ...data,
      'g-recaptcha-response': token,
    };

    emailjs.send(process.env.REACT_APP_SERVICEID, process.env.REACT_APP_TEMPLATEID, params, process.env.REACT_APP_PUBLICKEY);
  });

  const successHandler = () =>{
    setCaptcha(true);
  }


  return (
    <PageAnimated>
      <Container>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible,
          }}
          className="card portofolio-header"
        >
          <motion.h2>Contact</motion.h2>
        </motion.div>
        <FormProvider {...methods}>
          <form onSubmit={(e) => e.preventDefault()} noValidate>
            <div className="row">
              <div className="form-group col-md-6">
                <Input
                  label="First Name"
                  type="text"
                  placeholder="First name"
                  name="firstName"
                  id="firstName"
                  validation={{
                    required: { value: true, message: "required" },
                  }}
                />
              </div>
              <div className="form-group col-md-6">
                <Input
                  label="Last Name"
                  type="text"
                  placeholder="Last name"
                  name="lastName"
                  id="lastName"
                  validation={{
                    required: { value: true, message: "required" },
                  }}
                />
              </div>
            </div>
            <div className="form-group">
              <Input
                label="Email"
                type="email"
                placeholder="Email"
                name="email"
                id="email"
                className="form-control"
                validation={{
                  required: { value: true, message: "required" },
                  validate: {
                    matchPattern: (v) =>
                      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                      "Email address must be a valid address",
                  },
                }}
              />
            </div>
            <div className="form-group">
              <Input
                label="Subject"
                type="text"
                placeholder="Subject"
                name="subject"
                id="subject"
                validation={{
                  required: { value: true, message: "required" },
                }}
              />
            </div>
            <div className="form-group">
              <TextArea
                label="Message"
                type="text"
                placeholder="Enter message..."
                name="message"
                id="message"
                validation={{
                  required: { value: true, message: "required" },
                }}
              />
            </div>
            <Col className="success-note">
              <div>
                {success && (
                  <p>
                    <FontAwesomeIcon icon={faCheckDouble} /> For has been
                    submitted successfully!
                  </p>
                )}
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 2,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
              <ReCAPTCHA
                ref={refCaptcha} 
                sitekey="6LdjBmkmAAAAAMyznnjBM0-91azx6_xKYXUt78zB"
                onChange={successHandler}
                theme="dark"
              />
                <button disabled={captcha === false} type="submit" className="btn-custom" onClick={onSubmit}>
                  Send <FontAwesomeIcon icon={faPaperPlane} />{" "}
                </button>
              </motion.div>
            </Col>
          </form>
        </FormProvider>
      </Container>
    </PageAnimated>
  );
}

export default Contact;

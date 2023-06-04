import React from "react";
import "../../Pages/Contact.css";
import { useFormContext } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";
import { findInputError } from "../../utils/findInputError";
import { isFormInvalid } from "../../utils/isFormValid";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { visible } from "../AnimatedRoutes/PageAnimated";

export const Input = ({ ...props }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  console.log(errors);

  const inputError = findInputError(errors, props.name);
  const isInvalid = isFormInvalid(inputError);

  return (
    <>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible,
        }}
      >
        <div className="custom-lbl">
          <label className="contact-lb">{props.label}</label>
          <AnimatePresence mode="wait" initial={false}>
            {isInvalid && (
              <InputError
                message={inputError.error.message}
                key={inputError.error.message}
              />
            )}
          </AnimatePresence>
        </div>
        <input
          {...props}
          className="form-control"
          {...register(props.name, props.validation)}
        />
      </motion.div>
    </>
  );
};

export const TextArea = ({ label, type, placeholder, name }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const inputError = findInputError(errors, name);
  const isInvalid = isFormInvalid(inputError);

  return (
    <>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible,
        }}
      >
        <div className="custom-lbl">
          <label className="contact-lb">{label}</label>
          <AnimatePresence mode="wait" initial={false}>
            {isInvalid && (
              <InputError
                message={inputError.error.message}
                key={inputError.error.message}
              />
            )}
          </AnimatePresence>
        </div>
        <textarea
          type={type}
          className="form-control"
          placeholder={placeholder}
          {...register(name, {
            required: {
              value: true,
              message: "required",
            },
          })}
        />
      </motion.div>
    </>
  );
};

const InputError = ({ message }) => {
  return (
    <motion.p {...framer_error}>
      {" "}
      <FontAwesomeIcon icon={faCircleExclamation} /> {message}
    </motion.p>
  );
};

const framer_error = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: { duration: 0.2 },
};

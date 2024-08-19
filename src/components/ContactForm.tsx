import React, { useState } from "react";
import { Spinner } from "react-bootstrap";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mjvqqbak");
  const [loading, setLoading] = useState(false);
  const [sendMsgErr, setSendMsgErr] = useState("");

  const handleReload = () => {
    window.location.reload();
  };

  const handleFormSubmit = async (e) => {
    try {
      e.preventDefault();
      setSendMsgErr("");

      // Check for empty fields
      const formElements = e.target.elements;
      for (const element of formElements) {
        if (element.type !== "submit" && element.value.trim() === "") {
          setSendMsgErr(`Empty field! Please fill out ${element.name} field`);
          return;
        }
      }

      setSendMsgErr("");
      setLoading(true);
      await handleSubmit(e);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  if (state.succeeded) {
    return (
      <div>
        <div className="w-100 d-flex p-3 py-5">
          <p className="alert alert-success text-center mx-auto fs-4">
            "Your message has been successfully sent. I will be contacting you
            shortly"
          </p>
        </div>
        <div className="w-100 p-3 d-flex my-5">
          <button
            onClick={handleReload}
            className="btn btn-success mx-auto rounded-pill fs-4"
          >
            Back to Home Page
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className=" display-4 text-center py-1">Let's work together!</div>
      <div className="text-center fs-4">
        Awaiting your message for prompt discussion on your important project.
        Thank you for your inquiry
      </div>
      <div className="pt-2 w-100 d-flex">
        <form
          onSubmit={handleFormSubmit}
          className="col-12 col-lg-6 col-xl-6  mx-auto"
          method="POST"
        >
          <div className="py-1">
            <label htmlFor="email" className="fs-4 w-100">
              Email Address:
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="form-control fs-4"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="py-1">
            <label htmlFor="phone" className="fs-4 w-100">
              Telephone:
            </label>
            <input
              id="phone"
              type="tel"
              name="phone"
              className="form-control fs-4"
            />
            <ValidationError
              prefix="Phone"
              field="phone"
              errors={state.errors}
            />
          </div>
          <div className="py-1">
            <label htmlFor="title" className="fs-4 w-100">
              Message Title
            </label>
            <input
              id="title"
              type="text"
              name="title"
              className="form-control fs-4"
            />
            <ValidationError
              prefix="Title"
              field="title"
              errors={state.errors}
            />
          </div>
          <div className="py-1">
            <label htmlFor="message" className="fs-4 w-100">
              Message body:
            </label>
            <textarea
              id="message"
              name="message"
              className="form-control fs-4"
              rows={8}
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <div className="g-recaptcha"></div>
          {sendMsgErr && (
            <div className="alert alert-danger text-center fs-4">
              {sendMsgErr}
            </div>
          )}
          {loading ? (
            <div className="d-flex">
              <Spinner className="mx-auto text-warning fs-4" />
            </div>
          ) : (
            <button
              type="submit"
              disabled={state.submitting}
              className="btn btn-success fs-4 px-5 my-2 rounded-pill"
            >
              SEND MESSAGE
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

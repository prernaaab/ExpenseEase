import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addFeedback } from "../../redux/feedbackSlice";
import { saveUserFeedback } from "../../appwrite/feedback/feedback";

function Contacts_Form() {
  const [feedbacks, setFeedbacks] = useState({
    fullname: "",
    mail: "",
    address: "",
    feedback: "",
  });
  const [details] = useState([
    { type: "Email", value: "support@expensetracker.com" },
    { type: "Phone", value: "+1 123-456-7890" },
    { type: "Address", value: "123 Main Street, City, State, Country" },
  ]);
  const dispatch = useDispatch();

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const saveFeedback = async () => {
    const { fullname, mail, address, feedback } = feedbacks;

    if (mail && !validateEmail(mail)) {
      alert("Please enter a valid email address.");
      return;
    }

    try {
      await saveUserFeedback(fullname, mail, address, feedback);

      // Dispatch the new feedback to the Redux store
      dispatch(addFeedback({ Name: fullname, Description: feedback }));

      console.log("Feedback submitted successfully.");
    } catch (error) {
      console.error("Error submitting feedback:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFeedbacks((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSaveFeedback = async () => {
    await saveFeedback();
    setFeedbacks({
      fullname: "",
      mail: "",
      address: "",
      feedback: "",
    });
  };

  return (
    <div className="flex mt-28 mb-10 mx-[6.5rem] lg:mx-20 gap-2 max-lg:flex-wrap max-lg:mx-1">
      <div className="max-w-full lg:w-full flex flex-col justify-center max-lg:ml-16 max-sm:ml-7">
        <h3 className="font-extrabold text-[3.2rem] mb-3 max-lg:text-2xl">
          Contact Us
        </h3>
        <div>
          {details.map((item) => (
            <div className="mb-3" key={item.type}>
              <div className="text-xl font-bold">{item.type}</div>
              <div className="text-xl text-wrap break-all">{item.value}</div>
            </div>
          ))}
        </div>
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        action="#"
        className="bg-[#F8F8F8] w-full px-[4.5%] py-8 rounded-2xl max-sm:w-auto max-lg:mx-12 max-sm:mx-3 lg:px-10"
      >
        <h3 className="font-bold text-[2.5rem] tracking-[-0.16rem] mb-7 max-xl:text-[2rem]">
          Get in Touch
        </h3>
        <div className="mb-4">
          <div className="flex gap-x-2 mb-5">
            <div className="flex-grow">
              <label>Full Name</label>
              <input
                type="text"
                name="fullname"
                autoComplete="off"
                placeholder="Harshil Chaurasiya"
                value={feedbacks.fullname || ""}
                onChange={handleInputChange}
                className="px-5 h-10 rounded-lg w-full mt-2"
              />
            </div>
          </div>
          <div>
            <div className="mb-5">
              <label className="tracking-wide">Mail</label>
              <input
                type="text"
                name="mail"
                autoComplete="off"
                placeholder="harshilchaurasiya@mail.net"
                value={feedbacks.mail || ""}
                onChange={handleInputChange}
                className="px-5 h-12 rounded-lg w-full mt-2"
              />
            </div>
            <div className="mb-5">
              <label className="tracking-wide">Address</label>
              <input
                type="text"
                name="address"
                autoComplete="off"
                placeholder="Capitol, WA"
                value={feedbacks.address || ""}
                onChange={handleInputChange}
                className="px-5 h-12 rounded-lg w-full mt-2"
              />
            </div>
            <div>
              <label className="tracking-wide">Description</label>
              <textarea
                type="text"
                name="feedback"
                autoComplete="off"
                value={feedbacks.feedback || ""}
                onChange={handleInputChange}
                className="h-32 w-full mt-2 rounded-lg px-5 py-3 resize-none"
              />
            </div>
          </div>
        </div>
        <button
          onClick={handleSaveFeedback}
          className="bg-black text-white w-full h-12 text-[1.1rem] rounded-lg font-bold"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contacts_Form;

import React, { useState } from "react";
import { useForm } from "react-hook-form";

function Contacts_Form() {
  // const {
  //     register,
  //     handleSubmit,
  //     watch,
  //     formState: { errors },
  // } = useForm()

  const [details, setDetails] = useState([
    {
      id: 1,
      type: "Email",
      value: "support@expensetracker.com",
    },
    {
      id: 2,
      type: "Phone",
      value: "+1 123-456-7890",
    },
    {
      id: 3,
      type: "Address",
      value: "123 Main Street, City, State, Country",
    },
  ]);
  return (
    <div className="flex mt-28 mb-20 mx-[6.5rem] gap-2 max-lg:flex-wrap max-lg:mx-1">
      <div className="w-full flex flex-col justify-center max-lg:ml-10">
        <h3 className="font-extrabold text-[3.2rem] mb-3 max-lg:text-2xl">
          Contact Us
        </h3>
        <div>
          {details.map((items) => {
            return (
              <div className="mb-3 " key={items.id}>
                <div className="text-xl font-bold">{items.type}</div>
                <div className="text-xl">{items.value}</div>
              </div>
            );
          })}
        </div>
      </div>
      <form
        action="#"
        className="bg-[#F8F8F8] w-full px-10 py-8 rounded-2xl max-sm:w-auto max-lg:mx-7"
      >
        <h3 className="font-bold text-[2.5rem] tracking-[-0.16rem] mb-7">
          Get in Touch
        </h3>
        <div className="mb-4">
          <div className="flex gap-x-2 mb-5">
            <div className="flex-grow">
              <label>Name</label>
              <input
                type="text"
                placeholder="John"
                className="px-5 h-10 rounded-lg w-full mt-2"
              />
            </div>
            <div className="flex-grow">
              <label>Surname</label>
              <input
                type="text"
                placeholder="Doe"
                className="px-5 h-10 rounded-lg w-full mt-2"
              />
            </div>
          </div>
          <div>
            <div className="mb-5">
              <label className="tracking-wide">Mail</label>
              <input
                type="text"
                placeholder="johndoe@mail.net"
                className="px-5 h-12 rounded-lg w-full mt-2"
              />
            </div>
            <div className="mb-5">
              <label className="tracking-wide">Adress</label>
              <div>
                <input
                  type="text"
                  placeholder="Capitol, WA"
                  className="px-5 h-12 rounded-lg w-full mt-2"
                />
              </div>
            </div>
            <div>
              <label className="tracking-wide">Description</label>
              <div>
                <textarea
                  type="text"
                  className="h-32 w-full mt-2 rounded-lg px-5 py-3 resize-none"
                />
              </div>
            </div>
          </div>
        </div>
        <button className="bg-black text-white w-full h-12 text-[1.1rem] rounded-lg font-bold">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contacts_Form;

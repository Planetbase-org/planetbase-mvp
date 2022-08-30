import React, { useState, useEffect } from "react";
import EventLayout from "../../layouts/events-layout";
import { useNavigate } from "react-router-dom";


function EditEvent() {
  const navigate = useNavigate();

  function getFormValues() {
    const storedValues = localStorage.getItem("events");
    if (!storedValues)
      return {
        title: "",
        categories: {},
        event: "",
        guest: 0,
        date: "",
        status1: false,
        status2: false,
        price: 0,
        description: "",
        sponsorship: "",
      };
    return JSON.parse(storedValues);
  }

  const [value, setValue] = useState(getFormValues);
  const [checked1, setChecked1] = useState(false); 
  const [checked2, setChecked2] = useState(false); 

  useEffect(() => {
    localStorage.setItem("event", JSON.stringify(checked1));
  }, [checked1]);

  function onSubmit(e) {
    e.preventDefault();
    navigate("/organizer");
  }

  function onChange(e) {
    setValue((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
  }

  function onCheck1(e) { 
    console.log('====================================')
    console.log(setChecked1(!checked1))
    console.log('====================================')
  }

  function onCheck2(e) {
    console.log('====================================');
    console.log(setChecked2(!checked2));
    console.log('===================================='); 
  }

  console.log("====================================");
  console.log(checked1.status1);
  console.log(checked2.status2);
  console.log("====================================");

  const options = ["Event", "Project"];

  return (
    <EventLayout>
      <div className="event-form">
        <h1>List Your Upcoming Event</h1>
        <form onSubmit={onSubmit}>
          <div className="form">
            <div className="form-control">
              <div>
                <p>Event title</p>
                <input
                  type="text"
                  name="title"
                  id="title"
                  onChange={onChange}
                  value={value.title}
                />
              </div>
              <div>
                <p>Event Organizer/host</p>
                <select
                  name="categories"
                  id="categories"
                  className="select-events"
                  onChange={onChange}
                >
                  <option>Please choose one option</option>
                  {options.map((option, index) => {
                    return <option key={index}>{option}</option>;
                  })}
                </select>
              </div>
            </div>
            <div className="form-control">
              <div>
                <p>Event type/category</p>
                <input
                  type="text"
                  name="events"
                  id="events"
                  onChange={onChange}
                  value={value.events}
                />
              </div>{" "}
              <div className="details">
                <p>Scheduled date</p>
                <input
                  type="date"
                  id="date"
                  name="date"
                  onChange={onChange}
                  value={value.date}
                />
              </div>
            </div>
            <div className="form-control">
              <div className="radio">
                <label>         
                  <input
                    type="checkbox"
                    name="status1"
                    id="status1"
                    value={checked1}
                    onChange={onCheck1}
                  />
                  <span class="checkmark"></span>
                  <p>Online</p>
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="status2"
                    id="status2"
                    value={checked2}
                    onChange={onCheck2}
                  />
                  <span class="checkmark"></span>
                  <p>Physical</p>
                </label>
              </div>
            </div>
            <div className="form-control">
              <div className="price">
                <p>Price</p>
                <input
                  type="text"
                  placeholder="₦"
                  id="price"
                  name="price"
                  onChange={onChange}
                  value={value.price}
                />
              </div>
            </div>
          </div>

          <div>
            <div className="description">
              <h1>Event Description</h1>
              <textarea
                name="description"
                id="description"
                cols="30"
                rows="10"
                placeholder="Briefly describe what your event is all about"
                value={value.description}
                onChange={onChange}
              ></textarea>
            </div>
            <div className="description">
              <h1>Sponsorship Package</h1>
              <textarea
                name="sponsorship"
                id="sponsorship"
                cols="30"
                rows="10"
                placeholder="Provide sponsor's benefit here"
                value={value.sponsorship}
                onChange={onChange}
              ></textarea>
            </div>
            <div className="form-upload">
              <div className="upload"></div>
              <div className="upload-instruction">
                <p>
                  Give your event a visual expression to make it more
                  noticeable.
                </p>
                <span>
                  Upload photos in JPEG, JPG, PNG and ensure the size is 424 by
                  250 pixels.
                </span>
              </div>
            </div>
          </div>
          <div className="update-event">
            <button type="submit" className="btn-primary">
              <span>Save and continue</span>
            </button>
          </div>
        </form>
      </div>
    </EventLayout>
  );
}

export default EditEvent;

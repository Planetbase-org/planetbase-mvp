import React, { useState, useEffect } from "react";
import EventLayout from "../../layouts/events-layout";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

function EditEvent() {
  const [image, setImage] = useState("");

  const navigate = useNavigate();

  function convert2base64(e) {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = function () {
      setImage(reader.result.toString());
    };
    reader.readAsDataURL(file);
  }

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
  // const [checked1, setChecked1] = useState(false);
  // const [checked2, setChecked2] = useState(false);

  // useEffect(() => {
  //   localStorage.setItem("event", JSON.stringify(checked1));
  // }, [checked1]);

  async function onSubmit(e) {
    e.preventDefault();
    navigate("/organizer");
    //Create event api call
    const url = "https://planetbase-api.onrender.com/api/events/create-event";
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        Accept: "application/json",
      },
    };
    const body = JSON.stringify({
      title: value.title,
      categories: value.categories,
      event: value.event,
      guest: value.guest,
      date: value.date,
      status1: value.status1,
      status2: value.status2,
      price: value.price,
      description: value.description,
      sponsorship: value.sponsorship,
    });
    console.log(body, config);
    // try{
    //   const res = await Axios.post( url,body, config
    //   );
    //   console.log(res.data);}
    //   catch(err){
    //     console.log(err.response);
    //   }
  }

  function onChange(e) {
    setValue((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
  }

  const options = ["Event", "Project"];

  return (
    <EventLayout>
      <div className="event-form">
        <h1>List Your Upcoming Event</h1>
        <form onSubmit={onSubmit} className="form">
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
            </div>
            <div>
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
                  // value={checked1}
                  // onChange={onCheck1}
                />
                <span className="checkmark"></span>
                <p>Online</p>
              </label>
              <label>
                <input
                  type="checkbox"
                  name="status2"
                  id="status2"
                  // value={checked2}
                  // onChange={onCheck2}
                />
                <span className="checkmark"></span>
                <p>Physical</p>
              </label>
            </div>
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
              <div className="upload">
                {image ? (
                  <img src={image} className="upload-image" />
                ) : (
                  <div className="upload-preview">
                    <label>Upload Preview</label>
                  </div>
                )}
              </div>
              <div className="upload-instruction">
                <span>
                  <input
                    className="file-hidden"
                    type="file"
                    onChange={(e) => convert2base64(e)}
                  />
                </span>
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

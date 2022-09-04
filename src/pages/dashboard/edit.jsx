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
        categories: "",
        event: "",
        guest: 0,
        date: "",
        eventLocation: "",
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

  function onSubmit(e) {
    e.preventDefault();
    navigate("/organizer");
    //Create event api call
    const url = "https://planetbase-api.onrender.com/api/events/create-event";
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    const body = JSON.stringify({
      eventTitle: value.eventTitle,
      eventType: value.eventType,
      eventOrganizer: value.eventOrganizer,
      // numberOfGuests: value.numberOfGuests,
      scheduledDate: value.scheduledDate,
      eventLocation: value.eventLocation,
      price: value.price,
      eventDesc: value.eventDesc,
      sponsorshipPackage: value.sponsorshipPackage,
      eventImage: image,
    });
    console.log(body, config);
    // try{
    //   const res = await Axios.post( url,body, config
    //   );
    //   console.log(res.data);}
    //   catch(err){
    //     console.log(err.response);
    //   }
    Axios.post(url, body, config)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function onChange(e) {
    setValue((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
  }

  // const options = ["Event", "Project"];

  return (
    <EventLayout>
      <div className="event-form">
        <h1>List Your Upcoming Event</h1>
        <form onSubmit={onSubmit} className="form">
          <div className="form-control">
            <div>
              <p>Event Title</p>
              <input
                type="text"
                name="eventTitle"
                id="eventTitle"
                onChange={onChange}
                value={value.eventTitle}
              />
            </div>
            <div>
              <p>Event Organizer/Host</p>
              <input
                type="text"
                name="eventOrganizer"
                id="eventOrganizer"
                className="select-events"
                onChange={onChange}
                placeholder="Event Organizer"
              />
            </div>
          </div>
          <div className="form-control">
            <div>
              <p>Event Type/Category</p>
              <input
                type="text"
                name="eventType"
                id="eventType"
                onChange={onChange}
                value={value.eventType}
                placeholder="Event Category"
              />
            </div>
            <div>
              <p>Scheduled Date</p>
              <input
                type="date"
                id="scheduledDate"
                name="scheduledDate"
                onChange={onChange}
                value={value.scheduledDate}
              />
            </div>
          </div>
          <div className="form-control price">
            <div className="">
              <p>Event Location</p>
              <input
                type="text"
                placeholder="Event Location"
                id="eventLocation"
                name="eventLocation"
                onChange={onChange}
                value={value.eventLocation}
              />
              {/* <label>
                <input
                  type="checkbox"
                  name="status1"
                  id="status1"
                  value={value.status1}
                  onChange={() => {
                    if (status1) {
                      setEventLocation("Online");
                    }
                  }}
                />
                <span className="checkmark"></span>
                <p>Online</p>
              </label>
              <label>
                <input
                  type="checkbox"
                  name="status2"
                  id="status2"
                  value={value.status2}
                  onChange={() => {
                    if (status2) {
                      setEventLocation("Physical");
                    }
                  }}
                />
                <span className="checkmark"></span>
                <p>Physical</p>
              </label> */}
            </div>
            <div>
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
              <p>Event Description</p>
              <textarea
                name="eventDesc"
                id="eventDesc"
                cols="30"
                rows="7"
                placeholder="Briefly describe what your event is all about"
                value={value.eventDesc}
                onChange={onChange}
              ></textarea>
            </div>
            <div className="description">
              <p>Sponsorship Package</p>
              <textarea
                name="sponsorshipPackage"
                id="sponsorshipPackage"
                cols="30"
                rows="7"
                placeholder="Provide sponsor's benefit here"
                value={value.sponsorshipPackage}
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

import React, { useState, useEffect } from "react";
import EventLayout from "../../layouts/events-layout";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { events} from "../../redux/eventSlice";

function EditEvent() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function getFormValues() {
    const storedValues = localStorage.getItem("events");
    if (!storedValues)
      return {
        title: [],
        categories: "",
        events: "",
        guest: "",
        date: "",
        status1: false,
        status2: false,
        price: "",
        description: "",
        sponsorship: "",
      };
    return JSON.parse(storedValues);
  }

  const [value, setValue] = useState(getFormValues);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    localStorage.setItem("event", JSON.stringify(value, null, 2));
  }, [value, dispatch, setValue]);

  function onSubmit(e) {
    e.preventDefault();
    dispatch(events(value));
    navigate("/organizer");
  }

  const onChange = (e) => {
    setValue((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
  };

  function handleKeyDown(e) {
    if (e.key !== "Enter") return;
    const value = e.target.value;
    if (!value.trim()) return;
    setTags([...tags, value]);
    e.target.value = "";
  }

  function removeTag(index) {
    setTags(tags.filter((el, i) => i !== index));
  }

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
                  name="file"
                  id=""
                  className="select-events"
                  onChange={onChange}
                >
                  <option value={value.categories}>{value.categories}</option>
                  <option value="events">Events</option>
                  <option value="projects">Projects</option>
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
              <div className="tags-input-container">
                {tags.map((tag, index) => (
                  <div className="tag-item" key={index}>
                    <span className="text">{tag}</span>
                    <span className="close" onClick={() => removeTag(index)}>
                      &times;
                    </span>
                  </div>
                ))}
                <input
                  onKeyDown={handleKeyDown}
                  type="text"
                  className="tags-input"
                  placeholder="Type something"
                />
              </div>
            </div>
            <div className="form-control">
              <div className="form-details">
                <div className="details">
                  <p>Expected Number of guests</p>
                  <input
                    type="number"
                    name="number"
                    id="number"
                    onChange={onChange}
                    value={value.number}
                  />
                </div>
              </div>
              <div className="form-checkbox">
                <div>
                  <input
                    type="checkbox"
                    name="status1"
                    id="status1"
                    onChange={onChange}
                    checked={value.status1}
                  />
                  <p>Online</p>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="status2"
                    id="status2"
                    onChange={onChange}
                    checked={value.status2}
                  />
                  <p>Physical</p>
                </div>
              </div>
            </div>
            <div className="form-control">
              <div>
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
                <div className="price">
                  <p>Price</p>
                  <input
                    type="number"
                    placeholder="₦"
                    id="price"
                    name="price"
                    onChange={onChange}
                    value={value.price}
                  />
                </div>
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

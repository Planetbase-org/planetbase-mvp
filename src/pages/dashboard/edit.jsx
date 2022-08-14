import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import EventLayout from '../../layouts/events-layout';
import FileUpload from "../../assets/file-upload.svg"

function EditEvent() {

    const [input, setInput] = useState('');
    const [tags, setTags] = useState([]);
    const [isKeyReleased, setIsKeyReleased] = useState(false);


    const onKeyDown = (e) => {
        const { key } = e;
        const trimmedInput = input.trim();

        if (key === ',' && trimmedInput.length && !tags.includes(trimmedInput)) {
            e.preventDefault();
            setTags(prevState => [...prevState, trimmedInput]);
            setInput('');
        }

        if (key === "Backspace" && !input.length && tags.length && isKeyReleased) {
            const tagsCopy = [...tags];
            const poppedTag = tagsCopy.pop();
            e.preventDefault();
            setTags(tagsCopy);
            setInput(poppedTag);
        }

        setIsKeyReleased(false);
    };

    const onKeyUp = () => {
        setIsKeyReleased(true);
    }


    const onChange = (e) => {
        const { value } = e.target;
        setInput(value);
    };


    const deleteTag = (index) => {
        setTags(prevState => prevState.filter((tag, i) => i !== index));
        preventDefault()
    }
    return (
        <EventLayout>
            <div className="event-form">
                <h1>List Your Upcoming Event</h1>
                <form>
                    <div className='form'>
                        <div className="form-control">
                            <div>
                                <p>Event title</p>
                                <input type="text" />
                            </div>
                            <div>
                                <p>Event Organizer/host</p>
                                <select name="file" id="" className='select-events'>
                                    <option value="">Select a file</option>
                                    <option value="events">Events</option>
                                    <option value="projects">Projects</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-control">
                            <div>
                                <p>Event type/category</p>
                                <input type="text" />
                            </div>
                            <div className="form-tags">
                                <p>Event tags</p>
                                <div className="tags-section">
                                    <div className="container">
                                        <div className="tag-btn">
                                            {tags.map((tag, index) => (
                                                <div className="tag">
                                                    <span>{tag}</span>
                                                    <button type="button" onClick={() => deleteTag(index)}>x</button>
                                                </div>
                                            ))}
                                        </div>
                                        <input
                                            className='input-tag'
                                            type="text"
                                            value={input}
                                            placeholder="Enter a tag"
                                            onKeyUp={onKeyUp}
                                            onKeyDown={onKeyDown}
                                            onChange={onChange}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-control">
                            <div className='form-details'>
                                <div className="details">
                                    <p>Expected Number of guests</p>
                                    <input type="number" />
                                </div>
                            </div>
                            <div className="form-checkbox">
                                <div>
                                    <input type="checkbox" />
                                    <p>Online</p>
                                </div>
                                <div>
                                    <input type="checkbox" />
                                    <p>Physical</p>
                                </div>
                            </div>
                        </div>
                        <div className="form-control">
                            <div>
                                <div className="details">
                                    <p>Scheduled data</p>
                                    <input type="date" />
                                </div>
                                <div className='price'>
                                    <p>Price</p>
                                    <input type="number" placeholder='₦'/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="description">
                            <h1>Event Description</h1>
                            <textarea name="" id="" cols="30" rows="10" placeholder="Briefly describe what your event is all about">
                            </textarea>
                        </div>
                        <div className="description">
                            <h1>Sponsorship Package</h1>
                            <textarea name="" id="" cols="30" rows="10" placeholder="Provide sponsor's benefit here">
                            </textarea>
                        </div>
                        <div className="form-upload">
                            <img src={FileUpload} alt="file-upload" />
                            <input type="file" name="" id="" />
                        </div>
                    </div>
                    <Link to="/">
                        <button>
                            <span>Save and continue</span>
                        </button>
                    </Link>
                </form>
            </div>
        </EventLayout>
    )
}

export default EditEvent
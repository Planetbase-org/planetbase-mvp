import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import EventLayout from '../../layouts/events-layout';
import FileUpload from "../../assets/file-upload.svg";
import ImageUploading from "react-images-uploading";
import { useDispatch } from "react-redux";
import { saveEvent } from '../../redux/eventSlice'
import TagsInput from '../../components/TagInput/TagInput';


function EditEvent() {

    const dispatch = useDispatch();

    function getFormValues() {
    const storedValues = localStorage.getItem('event');
        if (!storedValues) return {
            title: '',
            categories: '',
            events: '',
            tags: "",
            guest: "",
            date: "",
            status1: false,
            status2:false,
            price: "",
            description: "",
            sponsorship: "",
        }
        return JSON.parse(storedValues);
    };


    const [value, setValue] = useState(getFormValues);
    const [input, setInput] = useState('');
    const [tags, setTags] = useState([]);
    const [isKeyReleased, setIsKeyReleased] = useState(false);
    const [images, setImages] = React.useState([]);
    const maxNumber = 69;

    useEffect(() => {
        localStorage.setItem('event', JSON.stringify(value, null, 2));
    }, [value]);

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(saveEvent(value));
    }

    const onKeyDown = (e) => {
        const { key } = e;
        const trimmedInput = input.trim();

        if (key === ',' && trimmedInput.length && !tags.includes(trimmedInput)) {
            e.preventDefault();
            setTags(prevState => [...prevState, trimmedInput]);
            setInput('');
        }

        if (key === "Backspace" && !value.length && tags.length && isKeyReleased) {
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
        setValue((prevValues) => ({
            ...prevValues,
            [e.target.name]: e.target.value
        }))
    }

    const handleChange = (imageList, addUpdateIndex) => {
        // data for submit
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
    };

    const deleteTag = (index) => {
        setTags(prevState => prevState.filter((tag, i) => i !== index));
        preventDefault()
    }
    return (
        <EventLayout>
            <div className="event-form">
                <h1>List Your Upcoming Event</h1>
                <form onSubmit={handleSubmit}>
                    <div className='form'>
                        <div className="form-control">
                            <div>
                                <p>Event title</p>
                                <input
                                    type="text"
                                    name='title'
                                    id='title'
                                    onChange={onChange}
                                    value={value.title}
                                />
                            </div>
                            <div>
                                <p>Event Organizer/host</p>
                                <select name="file"
                                    id="" className='select-events'
                                    onChange={onChange}
                                    // value={value.categories}
                                >
                                    <option value={value.categories}>Select a file</option>
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
                                    name='events'
                                    id='events'
                                    onChange={onChange}
                                    value={value.events}
                                />
                            </div>
                            <div className="form-tags">
                                <p>Event tags</p>
                                <TagsInput />
                            </div>
                        </div>
                        <div className="form-control">
                            <div className='form-details'>
                                <div className="details">
                                    <p>Expected Number of guests</p>
                                    <input
                                        type="number"
                                        name='number'
                                        id='number'
                                        onChange={onChange}
                                        value={value.number}
                                    />
                                </div>
                            </div>
                            <div className="form-checkbox">
                                <div>
                                    <input
                                        type="checkbox"
                                        name='status1'
                                        id='status1'
                                        onChange={onChange}
                                        checked={value.status1}
                                    />
                                    <p>Online</p>
                                </div>
                                <div>
                                    <input
                                        type="checkbox"
                                        name='status2'
                                        id='status2'
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
                                        id='date'
                                        name='date'
                                        onChange={onChange}
                                        value={value.date}
                                    />
                                </div>
                                <div className='price'>
                                    <p>Price</p>
                                    <input
                                        type="number"
                                        placeholder='₦'
                                        id='price'
                                        name='price'
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
                            >
                            </textarea>
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
                                onChange={onChange}>
                            </textarea>
                        </div>
                        <div className="form-upload">
                            <div className="upload">
                                <ImageUploading
                                    multiple
                                    value={images}
                                    onChange={handleChange}
                                    maxNumber={maxNumber}
                                    dataURLKey="data_url"
                                    acceptType={["jpg"]}
                                >
                                    {({
                                        imageList,
                                        onImageUpload,
                                        onImageRemoveAll,
                                        onImageUpdate,
                                        onImageRemove,
                                        isDragging,
                                        dragProps
                                    }) => (
                                        // write your building UI
                                        <div className="upload__image-wrapper">
                                            <button
                                                type='button'
                                                style={isDragging ? { color: "red" } : null}
                                                onClick={onImageUpload}
                                                {...dragProps}
                                            >
                                                Click or Drop here
                                            </button>
                                            &nbsp;
                                            <button type='button' onClick={onImageRemoveAll}>Remove all images</button>
                                            <img src={FileUpload} alt="file-upload" />
                                            {imageList.map((image, index) => (
                                                <div key={index} className="image-item">
                                                    <img src={image.data_url} alt="" width="100" />
                                                    <div className="image-item__btn-wrapper">
                                                        <button onClick={() => onImageUpdate(index)}>Update</button>
                                                        <button onClick={() => onImageRemove(index)}>Remove</button>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </ImageUploading>
                            </div>
                            <div className="upload-instruction">
                                <p>Give your event a visual expression to make it more noticeable.</p>
                                <span>Upload photos in JPEG, JPG, PNG and ensure the size is 424 by 250 pixels.</span>
                            </div>
                        </div>
                    </div>
                    <div className="update-event">
                        {/* <Link to="/organizer">
                            <button
                            type='submit'
                            >
                                <span>Save and continue</span>
                            </button>
                        </Link> */}
                    </div>
                </form>
            </div>
        </EventLayout>
    )
}

export default EditEvent
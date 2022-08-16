// src/components/TagsInput.js
import { useState } from 'react'
import "./TagInput.css"

function TagsInput({ handleChange, value }) {

    function getFormValue() {
        if (!storedValues) return {
            tag: [],
        }
    
        return JSON.parse(storedValues);
    };

    const [tags, setTags] = useState(getFormValue);
    const storedValues = localStorage.getItem('event');


    function handleKeyDown(e) {
        if (e.key !== 'Enter') return
        const value = e.target.value
        if (!value.trim()) return
        setTags([...tags, value])
        e.target.value = ''
    }

    function removeTag(index) {
        setTags(tags.filter((el, i) => i !== index))
    }

    return (
        <div className="tags-input-container">
            {tags.map((tag, index) => (
                <div className="tag-item" key={index}>
                    <span className="text">{tag}</span>
                    <span className="close" onClick={() => removeTag(index)}>&times;</span>
                </div>
            ))}
            <input
                onKeyDown={handleKeyDown}
                type="text"
                className="tags-input"
                placeholder="Type something"
                onChange={handleChange}
            // value={value.tags}
            />
        </div>
    )
}

export default TagsInput

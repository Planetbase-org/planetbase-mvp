export default function FormInput({ label, ...rest }) {
  return (
    <div className="form-group">
      <label>{label}</label>
      <textarea rows="6" {...rest} />
      <style jsx>{`
        .form-group {
          margin-bottom: 1rem;
        }
        label {
          display: block;
          margin-bottom: 0.5rem;
        }
        textarea {
          display: block;
          font-family: inherit;
          width: 100%;
          padding: 0.5rem;
          font-size: 1rem;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        
        textarea:focus {
          outline: none;
          border-color: #0070f3;
        }
      `}</style>
    </div>
  );
}
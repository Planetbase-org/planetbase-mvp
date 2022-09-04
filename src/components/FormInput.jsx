export default function FormInput({ label, ...rest }) {
  return (
    <div className="form-group">
      <label>{label}</label>
      <input {...rest} />
      <style jsx>{`
        .form-group {
          margin-bottom: 1rem;
        }
        label {
          display: block;
          margin-bottom: 0.5rem;
        }
        input {
          display: block;
          width: 100%;
          padding: 0.5rem;
          font-size: 1rem;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        input:focus {
          outline: none;
          border-color: #0070f3;
        }
      `}</style>
    </div>
  );
}
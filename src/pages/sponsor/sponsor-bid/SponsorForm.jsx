import "../style.css";

const SponsorForm = ({
  bidFrom,
  email,
  bidDate,
  bidAmount,
  bidDesc,
  changeState,
  onSubmit,
  isLoading,
}) => {
  return (
    <form className="sponsor-form form-group" onSubmit={onSubmit}>
      <h2>Bid For Event</h2>
      <label className="label">Bid From</label>
      <input
        type="text"
        className="input"
        name="bidFrom"
        placeholder="Your Company Name"
        onChange={changeState}
        value={bidFrom}
      />
      <label className="label">Email Address</label>
      <input
        type="email"
        className="input"
        name="email"
        placeholder="yourcompany@mail.com"
        onChange={changeState}
        value={email}
      />
      <label className="label">Bid Date</label>
      <input
        type="date"
        className="input"
        name="bidDate"
        onChange={changeState}
        value={bidDate}
      />
      <label className="label">Bid Amount</label>
      <input
        type="number"
        className="input"
        placeholder="100"
        name="bidAmount"
        onChange={changeState}
        value={bidAmount}
      />
      <label className="label">Bid Description</label>
      <textarea
        placeholder="Bid Description"
        rows="6"
        name="bidDesc"
        onChange={changeState}
        value={bidDesc}
      ></textarea>
      <button type="submit" className="btn-primary">
        {isLoading ? "Loading..." : "Save and Continue"}
      </button>
      <style jsx="true">{`
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
        button {
          margin-top: 0.5rem;
        }
      `}</style>
    </form>
  );
};

export default SponsorForm;

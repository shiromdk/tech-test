const LeadJobInformation = ({ id, suburb, postcode, category }) => {
  return (
    <div className="flex flex-row pl-5 pt-3 pb-3 border-b-1">
      <div className="pr-1">
        <svg
          viewBox="0 0 21 21"
          fill="currentColor"
          height="1.5em"
          width="1.5em"
        >
          <g
            fill="none"
            fillRule="evenodd"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="translate(4 2)"
          >
            <path d="M6.5 16.54l.631-.711c.716-.82 1.36-1.598 1.933-2.338l.473-.624c1.975-2.661 2.963-4.773 2.963-6.334C12.5 3.201 9.814.5 6.5.5s-6 2.701-6 6.033c0 1.561.988 3.673 2.963 6.334l.473.624a54.84 54.84 0 002.564 3.05z" />
            <path d="M9 6.5 A2.5 2.5 0 0 1 6.5 9 A2.5 2.5 0 0 1 4 6.5 A2.5 2.5 0 0 1 9 6.5 z" />
          </g>
        </svg>
      </div>
      <div className="pr-4">{`${suburb} ${postcode}`}</div>
      <div className="pr-2">
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          height="1.5em"
          width="1.5em"
        >
          <path d="M19 6.5h-3v-1a3 3 0 00-3-3h-2a3 3 0 00-3 3v1H5a3 3 0 00-3 3v9a3 3 0 003 3h14a3 3 0 003-3v-9a3 3 0 00-3-3zm-9-1a1 1 0 011-1h2a1 1 0 011 1v1h-4zm10 13a1 1 0 01-1 1H5a1 1 0 01-1-1v-5.05h3v1.05a1 1 0 002 0v-1.05h6v1.05a1 1 0 002 0v-1.05h3zm0-7H4v-2a1 1 0 011-1h14a1 1 0 011 1z" />
        </svg>
      </div>
      <div className="pr-4">{`${category}`}</div>
      <div>{`Job ID: ${id}`}</div>
    </div>
  );
};

export default LeadJobInformation;

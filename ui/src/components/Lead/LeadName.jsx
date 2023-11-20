import formatDate from "../../util/formatDate";
const LeadName = ({ name, date, invited }) => {
  return (
    <div className="flex flex-row  border-solid border-b-1">
      <div className="pl-7 pt-3 pr-3 pb-3">
        <div className="w-12 h-12 rounded-full inline-flex items-center justify-center bg-hipages-orange text-xl ">
          <p className="text-white">{name[0]}</p>
        </div>
      </div>
      <div>
        {invited ? (
          <p className="pt-3 font-bold">{name.split(" ")[0]}</p>
        ) : (
          <p className="pt-3 font-bold">{name}</p>
        )}

        <p className="text-sm">{formatDate(date)}</p>
      </div>
    </div>
  );
};

export default LeadName;

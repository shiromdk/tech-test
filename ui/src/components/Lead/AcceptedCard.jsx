import LeadName from "./LeadName";
import LeadJobInformation from "./LeadJobInformation";
import LeadDescription from "./LeadDescription";
import LeadCustomerDetails from "./LeadCustomerDetails";
const AcceptedCard = ({ job }) => {
  return (
    <div className="bg-white mb-4">
      <LeadName name={job.contact_name} date={job.created_at} invited={false} />
      <LeadJobInformation
        id={job.id}
        suburb={job.suburb_name}
        postcode={job.postcode}
        category={job.category}
      />
      <LeadCustomerDetails
        phone={job.contact_phone}
        email={job.contact_email}
      />
      <LeadDescription description={job.description} />
    </div>
  );
};

export default AcceptedCard;

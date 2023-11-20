import LeadDescription from "./LeadDescription";
import LeadInvitedButtonGroup from "./LeadInvitedButtonGroup";
import LeadJobInformation from "./LeadJobInformation";
import LeadName from "./LeadName";
const InvitedCard = ({ job }) => {
  return (
    <div className="bg-white mb-4">
      <LeadName name={job.contact_name} date={job.created_at} invited={true} />
      <LeadJobInformation
        id={job.id}
        suburb={job.suburb_name}
        postcode={job.postcode}
        category={job.category}
      />
      <LeadDescription description={job.description} />
      <LeadInvitedButtonGroup id={job.id} price={job.price} />
    </div>
  );
};

export default InvitedCard;

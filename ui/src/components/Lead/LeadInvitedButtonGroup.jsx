import { useContext } from "react";
import { InvitedPageContext } from "../InvitedPage";
const LeadInvitedButtonGroup = ({ id, price }) => {
  const context = useContext(InvitedPageContext);

  const updateJob = async (status) => {
    const response = await fetch(`http://localhost:8080/api/leads/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: status }),
    });
    if (response.ok) {
      return true;
    } else {
      return false;
    }
  };

  const handleAcceptLead = () => {
    updateJob("accepted").then((success) => {
      if (success) {
        const data = context.data.filter((job) => job.id !== id);
        context.setData(data);
      }
    });
  };
  const handleDeclineLead = () => {
    updateJob("declined").then((success) => {
      if (success) {
        const data = context.data.filter((job) => job.id !== id);
        context.setData(data);
      }
    });
  };

  return (
    <div className="flex flex-row gap-10 p-5 border-t-1">
      <button
        onClick={handleAcceptLead}
        className="bg-hipages-orange hover:bg-hipages-darkorange px-8 py-3 border-b-3 border-hipages-darkorange shadow-md transform active:scale-y-75 transition-transform flex"
      >
        Accept
      </button>
      <button
        onClick={handleDeclineLead}
        className="bg-slate-100 px-8 py-3 hover:bg-slate-400 border-b-3 border-slate-400 shadow-md transform active:scale-y-75 transition-transform flex"
      >
        Decline
      </button>
      <div className="flex flex-row gap-1 p-3">
        <p className="font-bold">{`$${price}`}</p>
        <p>Lead Invitation</p>
      </div>
    </div>
  );
};

export default LeadInvitedButtonGroup;

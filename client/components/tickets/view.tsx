import Ticket from "@/lib/types/ticket";
import Button from "../ui/button";

interface TicketViewProps {
  className?: string;
  ticket?: Ticket;
  onDismiss: () => void;
}

export default function TicketView({
  className = "",
  ticket,
  onDismiss,
}: TicketViewProps) {
  if (!ticket) {
    return <div>Loading...</div>;
  }

  const createdOn = new Date(ticket.createdOn).toDateString();
  const updatedAt = new Date(ticket.updatedAt).toDateString();

  return (
    <div className={className}>
      <p>{ticket.id}</p>
      <p>{ticket.title}</p>
      <p>{ticket.priority}</p>
      <p>{ticket.description}</p>
      <p>{ticket.category}</p>
      <p>{ticket.site}</p>
      {ticket.assignedTo ? (
        <p>Assigned to {ticket.assignedTo}</p>
      ) : (
        <p>Unassigned</p>
      )}
      <p>Created by {ticket.createdBy}</p>
      <p>Created on {createdOn}</p>
      <p>Last modified on {updatedAt}</p>
      <Button onClick={onDismiss}>Close</Button>
    </div>
  );
}

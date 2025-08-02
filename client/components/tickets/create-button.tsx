import { useState } from "react";
import Button from "../ui/button";
import Modal from "../ui/modal";
import CreateTicketForm from "./create-form";

export default function CreateTicketButton() {
  const [active, setActive] = useState(false);

  const handleClick = () => setActive(true);
  const handleDismiss = () => setActive(false);

  return (
    <>
      <Button onClick={handleClick}>create new</Button>
      <Modal active={active}>
        <CreateTicketForm onDismiss={handleDismiss} />
      </Modal>
    </>
  );
}

import React from "react";
import ContactItem from "@/components/side-bar/contact-item";
import type { Contact } from "@/types/config";

import "@/styles/side-bar/contact-list.css";

interface ContactsListProps {
  contacts: Contact[];
}

function ContactsList({ contacts }: ContactsListProps) {
  return (
    <ul className="contacts-list">
      {contacts.map((contact, index) => (
        <React.Fragment key={index}>
          <ContactItem contact={contact} />
        </React.Fragment>
      ))}
    </ul>
  );
}

export default ContactsList;

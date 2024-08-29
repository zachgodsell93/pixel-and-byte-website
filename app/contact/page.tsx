import { ContactFormGridWithDetails } from "@/components/contact/contact-grid";
import React from "react";

type Props = {};

export default function Contact({}: Props) {
  return (
    <div className="pt-20">
      <ContactFormGridWithDetails />
    </div>
  );
}

"use client";

import styles from "./ContactInfo.module.css";
import { ContactItem } from "./types";
import { MapPin, Phone, Mail as MailIcon } from "lucide-react";
import Map from "../Map/Map";

const contactData: ContactItem[] = [
  {
    icon: <MailIcon className={styles.icon} />,
    title: "Email",
    lines: ["lotus.request@email.com", "lotus@email.com"],
  },
  {
    icon: <Phone className={styles.icon} />,
    title: "Phone",
    lines: ["+1 (234) 567 89 00", "+1 (234) 567 89 01"],
  },
  {
    icon: <MapPin className={styles.icon} />,
    title: "Address",
    lines: ["59 Queen Street,", "New York, NY 10002"],
  },
];

export default function ContactInfo() {
  return (
    <section
      className={styles.contactSection}
      id="contacts"
      itemScope
      itemType="https://schema.org/Organization"
    >
      <div className="container">
        <h2 className="subtitle" itemProp="name">
          Contacts
        </h2>
        <p className={styles.highlight}>Contact us now!</p>

        <div className={styles.wrapper}>
          <div className={styles.map} itemProp="hasMap">
            <Map />
          </div>

          <address
            className={styles.info}
            itemProp="address"
            itemScope
            itemType="https://schema.org/PostalAddress"
          >
            {contactData.map((item, index) => (
              <div key={index} className={styles.item}>
                <div className={styles.iconWrapper}>{item.icon}</div>
                <div>
                  <h3 className={styles.title}>{item.title}</h3>

                  {item.title === "Address" &&
                    item.lines.map((line, i) => (
                      <p
                        key={i}
                        className={styles.text}
                        itemProp="streetAddress"
                      >
                        {line}
                      </p>
                    ))}

                  {item.title === "Phone" &&
                    item.lines.map((line, i) => (
                      <a
                        key={i}
                        href={`tel:${line.replace(/[^+\d]/g, "")}`}
                        className={styles.text}
                        itemProp="telephone"
                      >
                        {line}
                      </a>
                    ))}

                  {item.title === "Email" &&
                    item.lines.map((line, i) => (
                      <a
                        key={i}
                        href={`mailto:${line}`}
                        className={styles.text}
                        itemProp="email"
                      >
                        {line}
                      </a>
                    ))}
                </div>
              </div>
            ))}
          </address>
        </div>
      </div>
    </section>
  );
}

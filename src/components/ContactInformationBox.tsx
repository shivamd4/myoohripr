import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

const ContactInformationBox = ({
  location,
  phone,
  emails,
}: {
  location: string;
  phone: string;
  emails: string[];
}) => {
  return (
    <div className="p-4 bg-blue-900 text-white flex flex-col gap-y-7 rounded-lg mt-4">
      <div className="flex gap-x-3 items-center">
        <FaLocationDot className="text-green-500" size={23} />
        <p>{location}</p>
      </div>
      <div className="flex gap-x-3 items-center">
        <FaPhoneAlt className="text-green-500" size={23} />
        <a
          href={`tel:${phone}`}
          className="hover:text-blue-600 delay-100 transition-all"
        >
          {phone}
        </a>
      </div>
      <div className="flex gap-x-3 items-center">
        <IoMail className="text-green-500" size={23} />
        <div className="flex flex-col">
          {emails.map((email) => {
            return (
              <a
                href={`mailto:${email}`}
                key={email}
                className="hover:text-blue-600 delay-100 transition-all"
              >
                {email}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ContactInformationBox;

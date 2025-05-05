import { FaWhatsapp } from "react-icons/fa6";
import { Link } from "react-router-dom";

const WhatsAppIcon = () => {
  return (
    <div className="fixed bottom-4 right-4">
      <Link
        to={"https://wa.me//+13172134371"}
        className="flex justify-center items-center w-16 h-16 hover:scale-110 delay-75 transition-all rounded-full bg-green-600"
      >
        <FaWhatsapp size={40} color="white" />
      </Link>
    </div>
  );
};

export default WhatsAppIcon;

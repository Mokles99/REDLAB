import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaClock } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const {t}=useTranslation();
  return (
    <div className="text-white" id="contact">
      <h2 className="text-3xl font-bold mb-8 text-center tracking-w">
        {t("ContactUs")}
      </h2>
      <div className="flex flex-wrap justify-center">
      <div className="flex flex-col items-center p-8 m-2 w-72 rounded-xl bg-[#00FF00]">
          <FaClock className="text-[#5ce1e6] text-4xl mb-4" />
          <h4 className="text-2xl mb-2">{t("OpenHours")}</h4>
          <span className="font-semibold text-gray-400 text-lg mb-4">
            {t("MondayToFriday")} <br />
            {/* {t("NineToFive")} */}
          </span>
        </div>

        <div className="flex flex-col items-center p-8 m-2 w-72 rounded-xl bg-[#FFA500]">
          <FaMapMarkerAlt className="text-[#5ce1e6] text-4xl mb-4" />
          <h4 className="text-2xl mb-2">{t("Address")}</h4>
          <span className="font-semibold text-gray-400 text-lg mb-4">
            {t("street")}<br />
           ERREUR 404
          </span>
        </div>

        <div className="flex flex-col items-center p-8 m-2 w-72 rounded-xl bg-[#4B0082]">
          <FaEnvelope className="text-[#5ce1e6] text-4xl mb-4" />
          <h4 className="text-2xl mb-2">{t("Email")}</h4>
          <span className="font-semibold text-gray-400 text-lg mb-4">
           NO INFORMATION
          </span>
        </div>

        <div className="flex flex-col items-center p-8 m-2 w-72 rounded-xl bg-[#FFC0CB]"> 
          <FaPhone className="text-[#5ce1e6] text-4xl mb-4" />
          <h4 className="text-2xl mb-2">{t("CallUs")}</h4>
          <span className="font-semibold text-gray-400 text-lg mb-4">
            PAS AJOURD'HUI
          </span>
        </div>
      </div>
    </div>
  );
};
export default Contact;

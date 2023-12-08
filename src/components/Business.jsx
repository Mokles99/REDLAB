import { features } from "../constants";
import React, { useState, useEffect } from "react";
import styles, { layout } from "../style";
import Button from "./Button";
import { useTranslation } from "react-i18next";
import "../STL/style.css"
import "../STL/theme4.css";
import "../STL/theme5.css";
import "../STL/theme6.css";
import "../STL/theme7.css";
import PrincessDialog from "./PrincessModals";
import DataDialog from "./DataModal";
import ButtonTwo from "./Button2";

const FeatureCard = ({ icon, titleKey, contentKey, index }) => {
  const { t } = useTranslation();
  return (
    <div className={`feature-card spooky-card ${index % 2 === 0 ? 'animate-left' : 'animate-right'}`}>
      <div
        className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue animation-icon`}
      >
        <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
      </div>
      <div className="flex-1 flex flex-col ml-3">
        <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1 spooky-text">
          {t(titleKey)}
        </h4>
        <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
          {t(contentKey)}
        </p>
      </div>
    </div>
  );
}


const Business = () => {

  const [isModalOneOpen, setIsModalOneOpen] = useState(false);
  const [isModalTwoOpen, setIsModalTwoOpen] = useState(false);
  
  const openModalOne = () => setIsModalOneOpen(true);
  const closeModalOne = () => setIsModalOneOpen(false);
  
  const openModalTwo = () => setIsModalTwoOpen(true);
  const closeModalTwo = () => setIsModalTwoOpen(false);

  const { t } = useTranslation();
  const climateThemes = [
    'theme-rising-seas',  // Thème pour la montée des eaux
    'theme-forest-fires', // Thème pour les incendies de forêt
    'theme-glacial-melt', // Thème pour la fonte des glaces
    'theme-heatwave',     // Thème pour les vagues de chaleur
    // Ajoutez d'autres thèmes ici
  ];
  const [theme, setTheme] = useState(climateThemes[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTheme(prevTheme => {
        const nextIndex = (climateThemes.indexOf(prevTheme) + 1) % climateThemes.length;
        return climateThemes[nextIndex];
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  return (
    <section id="features" className={`${layout.section} ${theme}`}>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2} spooky-text`}>
          {t("YouDoTheBusiness")} <br className="sm:block hidden" /> {t("WeHandleTheSolution")}
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          {t("WithTheRightSoftwareSolution")}
        </p>

        <Button styles={`mt-10 ghost-button`} onClick={openModalOne} />
        <ButtonTwo styles={`mt-10 ghost-button`} onClick={openModalTwo} />
        
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
      <PrincessDialog open={isModalOneOpen} onClose={closeModalOne} />
      <DataDialog open={isModalTwoOpen} onClose={closeModalTwo} />
    </section>
  );
};



export default Business;

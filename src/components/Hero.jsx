import React, { useState, useEffect } from "react";
import styles from "../style";
// Importez vos fichiers CSS pour les thèmes
import "../STL/theme1.css"
import "../STL/theme2.css"
import "../STL/theme3.css"
import "../STL/style.css"

import { discount, robot, home, logoslss, robot2, sls1 } from "../assets";
import GetStarted from "./GetStarted";
import { useTranslation } from "react-i18next";
import FormDialog from "./FormDialog";

const Hero = () => {

  const [buttonPosition, setButtonPosition] = useState({ top: '50%', left: '50%' });
  const [isDodgingButtonRight, setIsDodgingButtonRight] = useState(false);

  const handleDodgingButtonClick = () => {
    setIsDodgingButtonRight(!isDodgingButtonRight);
  };
  const moveButton = () => {
    const newTop = Math.random() * 100;
    const newLeft = Math.random() * 100;
    setButtonPosition({ top: `${newTop}%`, left: `${newLeft}%` });
  };
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
 
  const themes = ['theme-nature-florissante', 'theme-secheresse-desertification', 'theme-monde-submerge '];
  const [theme, setTheme] = useState('');

  useEffect(() => {
    // Sélection aléatoire d'un thème au chargement
    const selectedTheme = themes[Math.floor(Math.random() * themes.length)];
    setTheme(selectedTheme);
  }, []);
  const changeTheme = (newTheme) => {
    setTheme(newTheme);
  };
  const { t } = useTranslation();
  return (
    <section
    id="home"
    className={`flex md:flex-row flex-col ${styles.paddingY} mt-[-30px] ${theme}`}
  >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row items-center px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
  <span className="text-white">{t('Software')}</span> {t('Crafted')} 
  <span className="text-white">{t('to')}</span> {t('Perfection')}
</p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            {t("TheNext")} <br className="sm:block hidden" />{" "}
            <span className="text-gradient">{t("Generation")}</span>{" "}
          </h1>
          <div className={`ss:flex hidden md:mr-4 mr-0`}>
        <GetStarted  onClick={openModal} />
 <button className="bouton-esquive">
        NOOOOO 
        YESSSSSS
        </button>
        <button
          className={`dodging-button ${isDodgingButtonRight ? 'move-right' : 'move-left'}`}
          onMouseEnter={handleDodgingButtonClick}
        >
          Catch me to connect
        </button>

      </div>
     

        
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          {t("SolutionsMethod")}
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          {t("OurTeam1")}
        </p>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        {/* <img
          src={sls1}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        /> */}

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
      {themes.map((t, index) => (
        <button key={index} onClick={() => changeTheme(t)}>
          {`Thème ${index + 1}`}
        </button>
      ))}
      <FormDialog open={isModalOpen} onClose={closeModal} />
    </section>
    

    
  );
};

export default Hero;

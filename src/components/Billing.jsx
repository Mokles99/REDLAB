import { apple, bill, google, logoslss, code, image1 } from "../assets";
import styles, { layout } from "../style";
import { useTranslation } from "react-i18next";
import "../STL/style.css"
const Billing = () => {
  const { t } = useTranslation();

  return (
    <section id="product" className={`${layout.sectionReverse} disordered-layout`}>
    <div className={`${layout.sectionImgReverse} disordered-image-container`}>
      <img
        src={image1}
        alt="billing"
        className="disordered-image"
      />

        {/* gradient start */}
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
        {/* gradient end */}
      </div>

      <div className={`${layout.sectionInfo} disordered-text-container`}>
        <h2 className="disordered-heading">
          {t("CraftingCodePart1")} <br className="sm:block hidden" />{" "}
          {t("CraftingCodePart2")}
        </h2>
        <p className="disordered-paragraph">
          {t("BillingParagraph")}
        </p>

        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <img
            src={apple}
            alt="google_play"
            className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer"
          />
          <img
            src={google}
            alt="google_play"
            className="w-[144.17px] h-[43.08px] object-contain cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
};

export default Billing;

import { useTranslation } from "react-i18next";
import Header from "../components/Header";
import { platziDiplomas, EnglishDiplomas, othersDiplomas } from "../services/database";
import "./Diploma.css";

const Diploma = () => {
  const { t} = useTranslation();

  function right(id) {
    const contenedor = document.getElementById(id);
    contenedor.scrollBy({ left: 400, behavior: "smooth" });
  }

  function left(id) {
    const contenedor = document.getElementById(id);
    contenedor.scrollBy({ left: -400, behavior: "smooth" });
  }

  return (
    <>
      <Header />
      <main>
        <h2 className="category">{t("diplomas.programming")}</h2>
        <div className="target-diploma-container">
          <button
            className="scroll-btn left"
            onClick={() => left("platzi")}
          ><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-left-icon lucide-chevron-left"><path d="m15 18-6-6 6-6" /></svg></button>
          <div id="platzi" className="diploma-container">
            {platziDiplomas.map((item, index) => (
              <div className="diploma-card" key={index}>
                <a href={item.img} target="_blank" rel="noopener noreferrer">
                  <img src={item.img} alt={`diploma-${index}`} />
                </a>
              </div>
            ))}
          </div>
          <button
            onClick={() => right("platzi")}
            className="scroll-btn right"
          ><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg></button>
        </div>
        <h2 className="category">{t("diplomas.english")}</h2>
        <div className="target-diploma-container">
          <button
            className="scroll-btn left"
            onClick={() => left("english")}
          ><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-left-icon lucide-chevron-left"><path d="m15 18-6-6 6-6" /></svg></button>
          <div id="english"  className="diploma-container">
            {EnglishDiplomas.map((item, index) => (
              <div className="diploma-card" key={index}>
                <a href={item.img} target="_blank" rel="noopener noreferrer">
                  <img src={item.img} alt={`diploma-${index}`} />
                </a>
              </div>
            ))}
          </div>
          <button
            onClick={() => right("english")}
            className="scroll-btn right"
          ><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg></button>
        </div>
        <h2 className="category">{t("diplomas.other")}</h2>
        <div className="target-diploma-container">
          <button
            className="scroll-btn left"
            onClick={() => left("others")}
          ><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-left-icon lucide-chevron-left"><path d="m15 18-6-6 6-6" /></svg></button>
          <div id="others" className="diploma-container">
            {othersDiplomas.map((item, index) => (
              <div className="diploma-card" key={index}>
                <a href={item.img} target="_blank" rel="noopener noreferrer">
                  <img src={item.img} alt={`diploma-${index}`} />
                </a>
              </div>
            ))}
          </div>
          <button
            onClick={() => right("others")}
            className="scroll-btn right"
          ><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg></button>
        </div>
      </main>
    </>
  );
};

export default Diploma;

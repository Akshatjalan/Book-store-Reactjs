// scrollToSection.js
import Product from "./Products/Product/Product";
const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error(`Section with ID ${sectionId} not found`);
    }
  };
  export default scrollToSection;
import React from "react";
import "./DescriptionBox.css";
const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox_navigator">
        <div className="descriptionbox-nav-box">
          Description
          <span>
            {" "}
            <div className="descriptionbox-nav-box fade">
              Reviews (122)
            </div>{" "}
          </span>
        </div>
      </div>
      <div className="descriptionbox-description">
        <p>
          An e-commerce website is a digital platform that facilitates the
          buying and selling of goods, services, or data over the internet. It
          allows customers to browse products, add them to a virtual shopping
          cart, and complete purchases through secure online transactions. Key
          features include product catalogs, payment processing systems, and
          often, customer accounts and order tracking.
        </p>
        <p>
          Traditional Nepali attire reflects the country’s rich ethnic
          diversity, with each community showcasing unique styles, fabrics, and
          symbolism Those garments are worn during festivals, weddings, rituals,
          and cultural performances, and are deeply tied to Nepal’s identity.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;

import { companyLogos } from "../constants";

const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50">
        H
      </h5>
      <ul className="flex">
        {companyLogos.map((logo, index) => 
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;

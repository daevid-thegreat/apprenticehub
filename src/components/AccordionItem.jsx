import { Collapse } from "react-collapse";
import {FaTimes} from "react-icons/fa";
import {AiOutlinePlus} from "react-icons/ai";

const Accord = ({ open, toggle, title, description }) => {
  return (
    <div className="my-14">
      <div className="flex justify-between" onClick={toggle}>
        <p className="font-Poppins font-bold text-primary text-md self-start">{title}</p>
        <div className="text-primary">{open ? <FaTimes /> : <AiOutlinePlus />}</div>
      </div>
      <div>
        <Collapse isOpened={open}>
          <p className="font-Poppins font-regular text-secondary text-sm self-start my-4">{description}</p>
        </Collapse>
      </div>
    </div>
  );
};

export default Accord;

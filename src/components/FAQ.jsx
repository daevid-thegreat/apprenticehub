import React, { useState } from 'react';
import Image from "next/image";
import Accord from "./AccordionItem";


const FAQ = () => {
  const [open, setOpen] = useState(false);
  const toggle = (index) => {
    if (open === index) {
      return setOpen(null);
    }

    setOpen(index);
  };

  const accordionData = [
    {
      title: "What types of skills can I learn through an apprenticeship?",
      content:
        "A flat is a self-contained unit in a building, usually on one floor. A house is a building that is usually detached from other buildings, and is usually on more than one floor.",
    },
    {
      title: "How long does an apprenticeship typically last?",
      content:
        "A flat is a self-contained unit in a building, usually on one floor. A house is a building that is usually detached from other buildings, and is usually on more than one floor.",
    },
    {
      title:
        "Do I need any qualifications or experience to become an apprentice?",
      content:
        "A flat is a self-contained unit in a building, usually on one floor. A house is a building that is usually detached from other buildings, and is usually on more than one floor.",
    },
    {
      title: "Will I be paid as an apprentice?",
      content:
        "A flat is a self-contained unit in a building, usually on one floor. A house is a building that is usually detached from other buildings, and is usually on more than one floor.",
    },
    {
      title:
        "Will I receive any qualifications or certifications upon completion of the apprenticeship?",
      content:
        "A flat is a self-contained unit in a building, usually on one floor. A house is a building that is usually detached from other buildings, and is usually on more than one floor.",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-1 justify-center align-items-center px-32 md:px-6 md:my-8 my-28">
      <div className=''>
        <Image src="/flat.png" alt="" width={533} height={523}  />
      </div>
      <div className='align-items-center'>
        <div className='font-Poppins font-bold text-primary text-2xl self-start my-14'>Frequently Asked Questions</div>
        <div>
        {accordionData.map((item, index) => {
          return (
            <div>
              <Accord
                key={index}
                open={index === open}
                toggle={() => toggle(index)}
                title={item.title}
                description={item.content}
              />
            </div>
          );
        })}
        </div>
        
      </div>
    </div>
  );
};

export default FAQ;

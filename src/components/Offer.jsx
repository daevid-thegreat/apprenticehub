import Offering from "./Offering";
import Skill from "./Skill";

const oneheading = "Practical Work Experience"
const oneparagraph = "Develop practical skills and knowledge that are relevant to your chosen career."

const twoheading = "Earning While Learning"
const twoparagraph = "Earn a salary while you learn, which can help you to support yourself financially."

const threeheading = "Industry Recognition"
const threeparagraph = "Get industry-recognized qualifications and certifications, which can help to enhance your job prospects."

const fourheading = "Greater Workforce"
const fourparagraph = "By training apprentices, you can help to improve productivity, quality, and competitiveness."

const fiveheading = "Diverse Perspectives"
const fiveparagraph = "New perspectives and ideas as apprentices may come from a different background or have different experiences."

const sixheading = "Future-Proofing"
const sixparagraph = "Ensure that you have a pipeline of skilled workers who can help to meet future challenges and opportunities."


const Offer = () => {
  return (
    <div className="flex-col justify-items-center px-28 items-center">
      <div className="flex py-16 place-content-center">
        <h2 className="font-Lexend  font-bold text-primary text-4xl self-center mr-8">
          What We Offer
        </h2>
        <span className="font-Lexend text-gray text-lg self-center ml-8">
          We are all in for Artisans, Students, Interns, ... EVERYONE!!!
        </span>
      </div>

      <div className="justify-center">
        <div className="font-Lexend  font-bold text-primary text-xl flex justify-center py-12">
          For Apprentice
        </div>
        <div className="grid grid-cols-3 md:grid-cols-1">
          <Offering heading={oneheading} paragraph={oneparagraph}/>
          <Offering heading={twoheading} paragraph={twoparagraph}/>
          <Offering heading={threeheading} paragraph={threeparagraph} />
        </div>
      </div>
      <div className="justify-center">
        <div className="font-Lexend  font-bold text-primary text-xl flex justify-center p-12">
          For Skill Masters
        </div>
        <div className="grid grid-cols-3 md:grid-cols-1">
          <Offering heading={fourheading} paragraph={fourparagraph}/>
          <Offering heading={fiveheading} paragraph={fiveparagraph}/>
          <Offering heading={sixheading} paragraph={sixparagraph}/>
        </div>
      </div>

      <div className="skills">
        <div className="font-Lexend text-primary font-bold text-4xl leading-normal pt-20">Connecting Great Skills<br/>TO Great People</div>
        
        <div className="flex justify-between md:grid md:grid-cols-1">
            <Skill icon={"/fashion.png"} text={'Fashion Design'} />
            <Skill icon={"/hair.png"} text={'Beauty'} />
            <Skill icon={"/repair.png"} text={'Electronics Repair'} />
        </div>
        <div className="flex justify-between md:grid md:grid-cols-1">
            <Skill icon={"/technician.png"} text={'Installation Technician'} />
            <Skill icon={"/plumbing.png"} text={'Plumbing'} />
            <Skill icon={"/wood.png"} text={'Wood Works'} />
        </div>
        <div className="flex justify-between md:grid md:grid-cols-1">
            <Skill icon={"/auto.png"} text={'Auto Mechanic'} />
            <Skill icon={"/house.png"} text={'Contruction'} />
            <Skill icon={"/elect.png"} text={'Electrician'} />
        </div>
        <div className="flex justify-center md:grid md:grid-cols-1">
            <Skill icon={"/more.png"} text={'And Many More...'} />
        </div>
      </div>
    </div>
  );
};

export default Offer;

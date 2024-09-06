import Card from "../../card/Card";
import InfoWork from "./infoWork/InfoWork";
import CandidateProfile from "./candidateProfile/CandidateProfile";

const TaskTwo = () => {
  return (
    <div className=" md:ps-20 lg:ps-28 pe-4 flex flex-col lg:flex-row gap-4">
      <div className="flex flex-col gap-3">
        <Card>
          <InfoWork />
        </Card>
        <Card>
          <CandidateProfile
            name="John Doe"
            image="https://via.placeholder.com/150"
            jobTitle="Software Engineer"
            location="New York, USA"
            education="Bachelor's Degree, Computer Science"
            experience="5 Years"
            email="john@example.com"
            phone="+987 654 3210"
          />
        </Card>
      </div>
      <Card grow={true}>
        <h1 className="text-[18px] font-semibold">{`Activities on CV`}</h1>
      </Card>
    </div>
  );
};

export default TaskTwo;

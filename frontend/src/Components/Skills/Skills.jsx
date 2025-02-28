import SkillItem from "./SkillItem";
import "./Skills.css";

const Skills = ({ skills }) => {
  return (
    <div>
      {/* Render Existing Terms */}
      {skills.length &&
        skills.map((skill) => <SkillItem key={skill._id} skill={skill} />)}
    </div>
  );
};

export default Skills;

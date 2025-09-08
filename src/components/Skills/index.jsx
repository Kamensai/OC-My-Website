import SkillsData from '../../datas/skills';

import Skill from '../SkillCard';
function Skills() {
  return (
    <section id="skills" className="skills">
      <h2>Technologies</h2>
      <div className="line" />
      <div className="skills__container">
        <div className="skills__column">
          <h3 className="skills__heading">Front-end</h3>
          <ul className="skills__list" role="list">
            {SkillsData.front.map((s) => (
              <Skill key={s.name} {...s} />
            ))}
          </ul>
        </div>

        <div className="skills__column">
          <h3 className="skills__heading">Back-end</h3>
          <ul className="skills__list" role="list">
            {SkillsData.back.map((s) => (
              <Skill key={s.name} {...s} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;

function Skill({ name, icon }) {
  return (
    <li className="skill">
      <i className={`${icon} skill__icon`} aria-hidden="true" />
      <span className="skill__label">{name}</span>
    </li>
  );
}

export default Skill;

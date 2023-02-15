import "./Perks.css";

type PerkProps = {
  img: string;
  title: string;
  desc: string;
  alt: string;
};

const Perks = () => {
  return (
    <section className="perks">
      <Perk
        img="/illustration-passions.svg"
        alt="passion"
        title="Indulge your passions"
        desc="Your passions shouldn't be just for the weekend. Earn a living doing what you love."
      />
      <Perk
        img="/illustration-financial-freedom.svg"
        alt="freedom"
        title="Gain financial freedom"
        desc="Start making money work for you. There's nothing quite like earning
        while you sleep."
      />
      <Perk
        img="/illustration-lifestyle.svg"
        alt="lifestyle"
        title="Choose your lifestyle"
        desc="Own your daily schedule. Fancy a lie-in? Go for it. Take charge of
        your week."
      />
      <Perk
        img="/illustration-work-anywhere.svg"
        alt="work-anywhere"
        title="Work from anywhere"
        desc="Selling online means not being pinned down. Want to work AND travel?
        Go for it."
      />
    </section>
  );
};

const Perk = (props: PerkProps) => {
  return (
    <div className="perk">
      <div className="img flex">
        <img src={props.img} alt={props.alt} />
      </div>
      <div className="exp">
        <h4>{props.title}</h4>
        <h6>{props.desc}</h6>
      </div>
    </div>
  );
};

export default Perks;

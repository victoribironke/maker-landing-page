import "./Pricing.css";

type TierProps = {
  img: string;
  alt: string;
  title: string;
  desc: string;
  perks: string[];
  type: string;
};

const Pricing = () => {
  return (
    <section className="pricing flex">
      <h4>Our pricing plans</h4>
      <h6>
        We only make money when our creators make money. Our plans are always
        affordable, and it's completely free to get started.
      </h6>
      <div className="tiers">
        <Tier
          img="/icon-free.svg"
          alt="free"
          title="Dip your toe"
          type="free"
          desc="Just getting started? No problem at all! Our free plan will take you a long way."
          perks={[
            "Unlimited products",
            "Basic analytics",
            "Limited marketplace exposure",
            "10% fee per transaction",
          ]}
        />
        <Tier
          img="/icon-paid.svg"
          alt="paid"
          title="Dive right in"
          type="paid"
          desc="Ready for the big time? Our paid plan will help you take your business to the next level."
          perks={[
            "Custom domains",
            "Advanced analytics and reports",
            "High  marketplace visibility",
            "5% fee per transaction",
          ]}
        />
      </div>
    </section>
  );
};

const Tier = (props: TierProps) => {
  return (
    <div className={`tier flex ${props.type == "free" ? "" : "cyan"}`}>
      <img src={props.img} alt={props.alt} />
      <h4>{props.title}</h4>
      <h6>{props.desc}</h6>
      {props.type == "free" ? (
        <h5>Free</h5>
      ) : (
        <div className="price">
          $25.00 <span className="month">/month</span>
        </div>
      )}
      {props.perks.map((perk) => (
        <div className="bonus" key={props.perks.indexOf(perk)}>
          <img
            src={
              props.type == "free"
                ? "/icon-check-cyan.svg"
                : "/icon-check-dark-blue.svg"
            }
            alt="check"
          />
          <h5>{perk}</h5>
        </div>
      ))}
    </div>
  );
};

export default Pricing;

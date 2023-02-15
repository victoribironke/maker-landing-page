import { useRef } from "react";
import "./Footer.css";

const Footer = () => {
  const email = useRef<HTMLInputElement>(null);

  const runCheck = (str: string): boolean => {
    if (str.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) return true;

    return false;
  };

  const checkEmail = (): void => {
    const value = email.current!.value;

    if (value == "") {
      alert("Oops! Please add your email.");
      return;
    }

    if (runCheck(value)) {
      email.current!.value = "";
      alert("Thank you! You will recieve a notification when we launch!");
    } else {
      alert("Oops! Please enter a valid email.");
    }
  };

  return (
    <footer className="flex">
      <p>Get notified when we launch</p>
      <div className="email">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email address"
          ref={email}
        />
        <button onClick={checkEmail}>Get notified</button>
      </div>
    </footer>
  );
};

export default Footer;

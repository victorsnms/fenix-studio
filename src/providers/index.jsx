import { CommonInfoProvider } from "./CommonContext";

const Providers = ({ children }) => {
  return <CommonInfoProvider>{children}</CommonInfoProvider>;
};

export default Providers;

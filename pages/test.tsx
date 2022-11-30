import React from "react";
import { useAccount, useToken, useConnect } from "wagmi";
import addressList from "../constants/address-list";

const TestPage = () => {
  const tokenResult = useToken({ address: addressList.getAddress("RWToken") });
  React.useEffect(() => {
    console.log("tokenResult", tokenResult.data);
  }, []);
  return (
    <div>
      <div>test</div>
    </div>
  );
};

export default TestPage;

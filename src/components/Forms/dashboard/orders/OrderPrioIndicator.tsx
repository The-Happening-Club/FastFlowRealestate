import React, { useState, useEffect } from "react";

interface IOrderPrioIndicator {
  rank: number;
}

const OrderPrioIndicator: React.FC<IOrderPrioIndicator> = ({ rank }) => {
  const [prio, setPrio] = useState({
    bgColor: "bg-blue-light",
    textColor: "text-blue-default",
    text: "ohne",
  });

  useEffect(() => {
    switch (rank) {
      case 1:
        setPrio({
          bgColor: "bg-green-success",
          textColor: "text-green-dark",
          text: "Niedrig",
        });
        break;

      case 2:
        setPrio({
          bgColor: "bg-yellow-moderate",
          textColor: "text-yellow-dark",
          text: "Moderat",
        });
        break;

      case 3:
        setPrio({
          bgColor: "bg-red-500",
          textColor: "text-red-900",
          text: "Hoch",
        });
        break;

      default:
        setPrio({
          bgColor: "bg-blue-light",
          textColor: "text-blue-default",
          text: "ohne",
        });
        break;
    }
  }, [rank]); // Abhängigkeit von rank

  return (
    <div className={`w-24 px-3 rounded-sm text-center ${prio.bgColor} ${prio.textColor}`}>
      <p>{prio.text}</p>
    </div>
  );
};

export default OrderPrioIndicator;
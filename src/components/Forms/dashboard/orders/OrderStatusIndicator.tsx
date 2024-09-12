import React, { useState, useEffect } from "react";

interface IOrderstatusIndicator {
  rank: number;
}

const OrderStatusIndicator: React.FC<IOrderstatusIndicator> = ({ rank }) => {
  const [status, setStatus] = useState({
    textColor: "text-green-400",
    text: "Neu",
  });

  useEffect(() => {
    switch (rank) {
      case 1:
        setStatus({
          textColor: "text-green-dark",
          text: "in Abnahme",
        });
        break;

      case 2:
        setStatus({
          textColor: "text-blue-default",
          text: "warten",
        });
        break;

      case 3:
        setStatus({
          textColor: "text-red-error",
          text: "in Arbeit",
        });
        break;

      default:
        setStatus({
            textColor: "text-green-400",
            text: "Neu",
        });
        break;
    }
  }, [rank]); // Abhängigkeit von rank

  return (
    <div className={`w-36 px-3 rounded-sm text-center ${status.textColor}`}>
         <p>{status.text}</p>
    </div>
  );
};

export default OrderStatusIndicator;
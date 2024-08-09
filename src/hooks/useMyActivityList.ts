import { useContext } from "react";
import { MyActivityListContext } from "@context/MyActivityListContext";
import { MyActivityListContextType } from "@context/MyActivityListContext";

// Import context type if needed

const useMyActivityList = (): MyActivityListContextType => {
  const context = useContext(MyActivityListContext);

  if (!context) {
    throw new Error(
      "useMyActivityList must be used within a MyActivityListProvider",
    );
  }

  return context;
};

export default useMyActivityList;

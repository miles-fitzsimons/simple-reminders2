import React from "react";

import Button from "./Button";
import Main from "./Main";
import RemindersList from "./RemindersList";

import ReminderProvider from "../contexts/ReminderProvider";

const Home = () => {
  const [data, setData] = useState(null);
  const context = useContext(ReminderContext);
  console.log("CONTE", context);
  useEffect(() => {
    const getItems = async () => {
      await AsyncStorage.getItem("tempData")
        // await AsyncStorage.setItem("tempData", JSON.stringify(initialState))
        .then(res => {
          context.addReminder(res[0]);
          setData(JSON.parse(res));
        })
        .catch(e => {
          console.log("Err", e);
        });
    };

    getItems();
  }, []);

  return (
    <ReminderProvider>
      <Main>
        <RemindersList />
        <Button />
      </Main>
    </ReminderProvider>
  );
};

export default Home;

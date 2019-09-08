import React from "react";

import Button from "./Button";
import Main from "./Main";
import RemindersList from "./RemindersList";

const Home = () => (
  <>
    <Main>
      <RemindersList />
      <Button />
    </Main>
  </>
);

export default Home;

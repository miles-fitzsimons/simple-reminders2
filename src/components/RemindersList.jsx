import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { AsyncStorage } from "react-native";

const initialState = [
  {
    reminderText: "Feed the cat",
    repeats: false,
    dueDate: new Date(2019, 11, 21, 9, 0)
  }
];

const RemindersList = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const getItems = async () => {
      console.log("In get ITEMS");
      await AsyncStorage.getItem("tempData")
        //   await AsyncStorage.setItem("tempData", JSON.stringify(initialState))
        .then(res => {
          console.log("res", res);
          setData(JSON.parse(res));
        })
        .catch(e => {
          console.log("Err", e);
        });
    };

    getItems();
  }, []);

  console.log("REMIDERS", data);

  return (
    <>
      <Text>Reminders Liiiss</Text>
      {data &&
        data.map((item, i) => {
          const date = new Date(item.dueDate);
          console.log("RemindersList.jsx -> %cdate:", "color: red", date);
          return (
            <View key={`Reminder ${i}`}>
              <Text>{item.reminderText}</Text>
              <Text>{`Due ${date.getDate()} ${date.getMonth()} ${date.getFullYear()}`}</Text>
            </View>
          );
        })}
    </>
  );
};

export default RemindersList;

// const useLoginApi = history => {
//   const userContext = useContext(UserContext);

//   const isFirstRender = useRef(true);
//   const [data, setData] = useState({});

//   const [state, dispatch] = useReducer(dataApiReducer, {
//     isLoading: false,
//     isError: false
//   });

//   useEffect(() => {
//     let didCancel = false;

//     if (isFirstRender.current === true) {
//       isFirstRender.current = false;
// //       return;
// //     }

// //     const postLogin = async () => {
//       dispatch({ type: "POST_BEGIN" });

//       const client = axios.create({
//         baseURL: "http://127.0.0.1:5000/"
//       });

//       await client
//         .post("/auth/login", data)
//         .then(result => {
//           if (!didCancel) {
//             dispatch({ type: "POST_SUCCESS" });
//             userContext.setToken(result.data.authorization);
//             userContext.setUserId(result.data.userId);
//             history.push("/winelist");
//           }
//         })
//         .catch(() => {
//           if (!didCancel) {
//             dispatch({ type: "POST_FAILURE" });
//           }
//         });
//     };

//     postLogin();

//     return () => {
//       didCancel = true;
//     };
//   }, [data, history, userContext]);

//   return [state, setData];
// };

// export default useLoginApi;
//

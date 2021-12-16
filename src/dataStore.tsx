import axios from "axios";
interface dataStoreInterface {
  get: () => void;
  create: (arg1: string, arg2: string, arg3: string | null) => void;
}

export const dataStore: dataStoreInterface = {
  get: async function () {
    try {
      console.log("get");

      let res = await axios.get(
        "https://firestore.googleapis.com/v1beta1/projects/expense-list-f8587/databases/(default)/documents/list?&key=BJp_eHaiYahOy_pHrUpQa7alaKZcS1YhNFhSXYM9aoZmJIcA5of6b8st0bfJ0dk-7igAzTDEauA76RdlOqQnusY"
      );
      if (res.status === 200) {
      }
      return res.data;
    } catch (err) {
      console.error(err);
    }
  },
  create: async function (name, amount, date) {
    try {
      console.log("create");
      let res = await axios.post(
        "https://firestore.googleapis.com/v1beta1/projects/expense-list-f8587/databases/(default)/documents/list?&key=BJp_eHaiYahOy_pHrUpQa7alaKZcS1YhNFhSXYM9aoZmJIcA5of6b8st0bfJ0dk-7igAzTDEauA76RdlOqQnusY",
        {
          fields: {
            name: { stringValue: name },
            date: { stringValue: date },
            amount: { stringValue: amount },
            type: { stringValue: "expenseEntry" }
          }
        }
      );
      if (res.status === 200) {
        // test for status you want, etc
      }
      return res.data;
    } catch (err) {
      console.error(err);
    }
  }
};

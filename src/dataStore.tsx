import axios from "axios";

export const dataStore = {
  get: async function () {
    try {
      let res = await axios.get(
        "https://firestore.googleapis.com/v1beta1/projects/expense-list-f8587/databases/(default)/documents/list?&key=BJp_eHaiYahOy_pHrUpQa7alaKZcS1YhNFhSXYM9aoZmJIcA5of6b8st0bfJ0dk-7igAzTDEauA76RdlOqQnusY"
      );
      if (res.status === 200) {
        // test for status you want, etc
        // console.log(res.status);
      }
      // Don't forget to return something
      return res.data;
    } catch (err) {
      // console.error(err);
    }
  },
  create: function () {
    axios
      .post(
        "https://firestore.googleapis.com/v1beta1/projects/expense-list-f8587/databases/(default)/documents/list?&key=BJp_eHaiYahOy_pHrUpQa7alaKZcS1YhNFhSXYM9aoZmJIcA5of6b8st0bfJ0dk-7igAzTDEauA76RdlOqQnusY",
        { fields: { Field2: { integerValue: 1212 } } }
      )
      .then(function (response) {})
      .catch(function (error) {});
  }
};

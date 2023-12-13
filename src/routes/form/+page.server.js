export const actions = {
  default: async ({ cookies, request }) => {
    try {
      const data = await request.formData();
      const name = data.get("name");
      const email = data.get("email");
      const password = data.get("password");
      //   return { name: name, email: email, pass: password };

      //------------------validation-----------------
      if (!name || !email || !password) {
        throw new Error("Incomplete Credentials");
      }
      if (name.length < 3 || password.length < 6) {
        throw new Error("Name and password is Invalid");
      }
      const userData = { name, email, password };

      return userData;
    } catch (err) {
      console.log("Error while fetching data", err);
      return { error: err.message };
    }
  },
};

export const actions = {
  default: async ({ cookies, request }) => {
    const data = await request.formData();
    const name = data.get("name");
    const email = data.get("email");
    const password = data.get("password");
    return { name: name, email: email, pass: password };
    // console.log(email, password);

    //-----------cookie set------------------
    // cookies.set("name", email, { path: "/" });
    // let x = cookies.getAll();
    // console.log(x);
  },
};

export const actions = {
  default: async ({ cookies, request }) => {
    const data = await request.formData();
    const email = data.get("name");
    const password = data.get("password");
    return { name: email, pass: password };
    // console.log(email, password);

    //-----------cookie set------------------
    // cookies.set("name", email, { path: "/" });
    // let x = cookies.getAll();
    // console.log(x);
  },
};

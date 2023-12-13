//Not use-------------------------->>>>>>>>>>>
// import { json } from "@sveltejs/kit";
// export async function POST({ request, cookies }) {
//   const data = await request.json();
//   const { name, email, password } = data;
//   if (!name || !email || !password) {
//     return json(
//       { message: "Missing credentials" },
//       {
//         status: 400,
//       }
//     );
//   }
//   cookies.set("name", name, { path: "/" });
//   // let newname = cookies.get("name");

//   return json({ message: "Log In" });
// }

// /** @type {import('./$types').LayoutServerLoad} */
// export async function load({ cookies }) {
//   const sessionid = cookies.get("name");
//   console.log(sessionid);
//   return {
//     sessionid,
//   };
// }

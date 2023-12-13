<script>
//   import { json } from "@sveltejs/kit";
//   import {POST} from "./+server";
 
 
 
// // <POST /> 
// let name = "";
// let email="";
// let password="";
// let message="";

//-------------------------------No need to add submitHandler--------------------
// const submitHandler = async() => {
//     message=""
// 	const resp = await fetch('/form',{
// 		method: 'POST',
// 		body: JSON.stringify({
// 			name,
// 			email,
// 			password
// 		})
// 	})
// 	const data = await resp.json()
//     message = data.message;
// 	console.log(data)
// }
export let form;
console.log(form)
</script>
{form?.name}
{form?.email}
{form?.pass}

<svelte:head>
	<title>Form</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="w-8/12 flex mx-auto">
	<form class="flex flex-col gap-3 justify-between mx-auto items-center" method="post">
        <p></p>
		<div class="flex justify-between gap-2">
			<label class="text-center">Name</label>
			<input type="text" name="name"  class="border rounded-md"/>
		</div>
		<div class="flex justify-between gap-2">
			<label class="text-center">Email</label>
			<input type="text" name="email"  class="border rounded-md "/>
		</div>
		<div class="flex justify-between gap-2">
			<label class="text-center">Password</label>
			<input type="password" name="password" class="border rounded-md "/>
		</div>
		<button class="bg-green-400 px-3 py-1 rounded-md text-white">Submit</button>
	</form>
</section>
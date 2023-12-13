<script>
    // import {actions} from "./+page.server"
export let form;
console.log(form);

// async function handleSubmit(){
// 	const res = await actions.default({cookies, request});
	
// 	if(res.err){
// 		console.error("Error: ",res.err);
// 	}
// }

</script>
<!-- {form?.name}
{form?.email}
{form?.password} -->

<svelte:head>
	<title>Form</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="w-8/12 flex mx-auto">
	<form class="flex flex-col gap-3 justify-between mx-auto items-center" method="post" on:submit={handleSubmit}>
        
		<div class="flex justify-between gap-2">
			<label class="text-center">Name</label>
			<input type="text" name="name" value={form?.name ?? ''} class="border rounded-md"/>
            <!-- <p>{err}</p> -->
		</div>
		<div class="flex justify-between gap-2">
			<label class="text-center">Email</label>
			<input type="text" name="email" value={form?.email ?? ''} class="border rounded-md "/>
		</div>
		<div class="flex justify-between gap-2">
			<label class="text-center">Password</label>
			<input type="password" name="password" value={form?.password ?? ''} class="border rounded-md "/>
            <!-- <p>{err}</p> -->
		</div>
		<button class="bg-green-400 px-3 py-1 rounded-md text-white">Submit</button>
	</form>
</section>


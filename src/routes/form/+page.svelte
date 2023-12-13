<script>
    // import {actions} from "./+page.server"
export let form;
console.log(form);

</script>
<!-- {form?.name}
{form?.email}
{form?.password} -->

<svelte:head>
	<title>Form</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>
<!-- {#if form?.inValid}
	<h1>gswfiusfhwfjw</h1>
{/if} -->
<section class="w-10/12 flex mx-auto">
	<form class="flex flex-col gap-3 justify-between mx-auto items-center" method="post">
        
		<div class="flex justify-between w-full">
			<label >Name</label>
			<input type="text" name="name" value={form?.name ?? ''} class="border rounded-md"/>
           <div class="flex flex-col"> {form?.inValid ? "Please enter valid name" : ""}</div>
		</div>
		<div class="flex justify-between w-full">
			<label >Email</label>
			<input type="text" name="email" value={form?.email ?? ''} class="border rounded-md "/>
			
		</div>
		<div class="flex justify-between w-full">
			<label>Password</label>
			<input type="password" name="password" value={form?.password ?? ''} class="border rounded-md "/>
            <!-- <p>{err}</p> -->
		</div>
		<button class="bg-green-400 px-3 py-1 rounded-md text-white">Submit</button>
	</form>
</section>


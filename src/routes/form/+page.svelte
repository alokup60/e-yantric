<script>
export let form;
console.log(form)
</script>
{form?.name}
{form?.email}
{form?.password}

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
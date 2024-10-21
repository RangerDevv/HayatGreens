<script lang="ts">

    let appetizers = [
        {
            name: 'Item 1',
            price: 10
        },
        {
            name: 'Item 2',
            price: 20
        },
        {
            name: 'Item 3',
            price: 30
        },
        {
            name: 'Item 4',
            price: 40
        },
        {
            name: 'Item 5',
            price: 50
        }
    ]

    let cart = []

    let page = 1

    function addItemToCart(e:any){

    }

</script>

<main class="flex flex-col-reverse sm:flex-row justify-around px-16 gap-10">
    <div class="w-1/2">
        <h1 class="text-4xl font-bold">Menu</h1>
        <div class="flex flex-col gap-4 pt-6 items-left h-[80vh] overflow-y-scroll w-full p-4 text-lg">
            {#each appetizers as item}
                <div class="flex justify-between hover:bg-[#FF4221] hover:text-white p-2 rounded-full transition-all px-3">
                    <p>{item.name}</p>--------------------------------------
                    <p>{item.price}</p>
                </div>
            {/each}
        </div>
    </div>
    <div class="flex flex-col items-center h-[80vh] justify-center sm:w-1/2 bg-[#F1E6BA] rounded-2xl">
        {#if page==1}
        <img src="https://via.placeholder.com/150" alt="menu" class="rounded-lg">
        <a href="/order"><button class="bg-[#D6FA32] text-black px-10 h-12 rounded-full mr-2">Order Now</button></a>
        {/if}
    </div>
</main>
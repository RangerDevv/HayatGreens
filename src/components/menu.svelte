<script lang="ts">

    let appetizers = [
        {
            name: 'Item 1',
            image: 'https://media.istockphoto.com/id/159037492/photo/saltine-soda-cracker-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=4BuPnLh4AbOjtNOxZ7aqfHbmnGNCHEybq-UdndwyPWQ=',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat',
            price: 10
        },
        {
            name: 'Item 2',
            image: 'https://media.istockphoto.com/id/159037492/photo/saltine-soda-cracker-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=4BuPnLh4AbOjtNOxZ7aqfHbmnGNCHEybq-UdndwyPWQ=',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat',
            price: 20
        },
        {
            name: 'Item 3',
            image: 'https://media.istockphoto.com/id/159037492/photo/saltine-soda-cracker-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=4BuPnLh4AbOjtNOxZ7aqfHbmnGNCHEybq-UdndwyPWQ=',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat',
            price: 30
        },
        {
            name: 'Item 4',
            image: 'https://media.istockphoto.com/id/159037492/photo/saltine-soda-cracker-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=4BuPnLh4AbOjtNOxZ7aqfHbmnGNCHEybq-UdndwyPWQ=',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat',
            price: 40
        },
        {
            name: 'Item 5',
            image: 'https://media.istockphoto.com/id/159037492/photo/saltine-soda-cracker-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=4BuPnLh4AbOjtNOxZ7aqfHbmnGNCHEybq-UdndwyPWQ=',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat',
            price: 50
        }
    ]

    let cart = [] as any;
    let currItem = [
        {
            name: '',
            image: '',
            description: '',
            price: 0
        }
    ] as any;

    function setCurrentItem(item: any) {
        // console.log(item);
        currItem.length = 0;
        currItem = item;
    }

    function addToCart(item: any, quantity = 1) {
        cart.push(item);
        console.log(cart);
    }

    function removeFromCart(index: number) {
        cart=[...cart.slice(0, index), ...cart.slice(index + 1)]
    }

    let page = 1

</script>

<main class="flex flex-col-reverse sm:flex-row justify-around px-16 gap-10">
{#if page==1}
    <div class="w-1/2">
        <h1 class="text-4xl font-bold">Menu</h1>
        <div class="flex flex-col gap-4 pt-6 items-left h-[80vh] overflow-y-scroll w-full p-4 text-lg">
            {#each appetizers as appetizers}
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <!-- svelte-ignore a11y-no-static-element-interactions -->
                 <!-- click the buton to view the appetizers -->
                <button class="flex justify-between hover:bg-[#FF4221] hover:text-white p-2 rounded-full transition-all px-3" on:click={() => setCurrentItem(appetizers)}>
                    <p>{appetizers.name}</p>--------------------------------------
                    <p>{appetizers.price}</p>
                </button>
            {/each}
        </div>
    </div>
    <div class="flex flex-col items-center h-[80vh] justify-center sm:w-1/2 bg-[#F1E6BA] rounded-2xl">
            <div class="flex flex-col gap-4 pt-6 items-left justify-between h-[80vh] overflow-y-scroll w-full p-4 text-lg">
                {#if currItem.length!=1}
                    <div class="flex flex-col justify-between p-2 rounded-full transition-all px-3">
                        <img src={currItem.image} alt={currItem.name} class="w-1/2 rounded-lg mx-auto"/>
                        <div class="flex flex-row justify-between w-full text-2xl font-semibold pt-10 px-5">
                        <p>{currItem.name}</p>
                        <p>${currItem.price}</p>
                        </div>
                        <p class="px-5 mt-5">{currItem.description}</p>
                    </div>
                    <div class="flex flex-row w-full justify-between bottom-0 ">
                        <button class="bg-[#D6FA32] text-black shadow-md p-2 rounded-full transition-all px-10 mt-5" on:click={() => addToCart(currItem)}>Add to Cart</button>
                        <button class="bg-[#FF4221] text-white shadow-md p-2 rounded-full transition-all px-10 mt-5" on:click={() => page = 2}>Checkout</button>
                    </div>
                {:else}
                    <p class="text-center"> Please click on a menu item </p>
                {/if}
            </div>
    </div>
{/if}
{#if page==2}
    <div class="w-1/2">
        <h1 class="text-4xl font-bold">Cart</h1>
        <div class="flex flex-col gap-4 pt-6 items-left h-[80vh] overflow-y-scroll w-full p-4 text-lg">
            {#each cart as checkoutCart}
                <div class="flex justify-between p-2 rounded-full transition-all px-3">
                    <p>{checkoutCart.name}</p>
                    <p>{checkoutCart.price}</p>
                    <button class="bg-[#FF4221] text-white shadow-md p-2 rounded-full transition-all px-10" on:click={() => removeFromCart(cart.indexOf(checkoutCart))}>Remove</button>
                </div>
            {/each}
        </div>
    </div>
    <div class="flex flex-col sm:w-1/2 bg-[#F1E6BA] rounded-2xl">
        <div class="flex flex-col gap-4 pt-6 items-left justify-between w-full p-4 text-lg">
            <div class="flex flex-col justify-between p-2 rounded-full transition-all px-3">
                <p>Thank you for placing an order at our restaurant. Your order will be ready in 30 minutes. Please wait for the notification.</p>
                <p><br>If you are a dine in customer, please order from the website and notify the waiter that you have placed your order and your order number. Tips can be paid at the cashier table. Thank you!</p>
                <div class="flex flex-row justify-between w-full text-lg pt-10 px-5">
                    <p>Tax</p>
                    <p>$15.30</p>
                </div>
                <div class="flex flex-row justify-between w-full text-lg px-5">
                    <p>Subtotal</p>
                    <p>${cart.reduce((acc, curr) => acc + curr.price, 0)}</p>
                </div>
                <div class="flex flex-row justify-between w-full text-2xl font-semibold px-5">
                    <p>Total</p>
                    <p>${cart.reduce((acc, curr) => acc + curr.price, 0)+15.30}</p>
                </div>
            </div>
            <div class="flex flex-row w-full justify-between bottom-0 ">
                <button class="bg-[#D6FA32] text-black shadow-md p-2 rounded-full transition-all px-10 mt-5" on:click={() => page = 1}>Back to Menu</button>
                <button class="bg-[#FF4221] text-white shadow-md p-2 rounded-full transition-all px-10 mt-5" on:click={() => alert('Order Placed')}>Place Order</button>
            </div>
        </div>
    </div>
{/if}
</main>

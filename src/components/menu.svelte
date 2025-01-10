<script lang="ts">

    let appetizers = [
        {
            name: 'Edamame',
            image: 'https://thymeofseason.com/wp-content/uploads/2021/11/edamame-bowl_site_featured-scaled.jpg',
            description: 'Steamed young soybeans with a sprinkle of sea salt.',
            price: 5
        },
        {
            name: 'Goma-ae',
            image: 'https://www.diversivore.com/wp-content/uploads/2017/01/Shungiku-no-Goma-ae-square.jpg',
            description: 'Blanched spinach with a sesame dressing.',
            price: 6
        },
        {
            name: 'Seaweed Salad',
            image: 'https://images.immediate.co.uk/production/volatile/sites/2/2023/05/Seaweed-Salad-9d306d2.jpg?quality=90&resize=556,505',
            description: 'Fresh seaweed salad with a light sesame dressing.',
            price: 7
        },
        {
            name: 'Miso Soup',
            image: 'https://thehealthyepicurean.com/wp-content/uploads/2022/03/Spicy-Miso-Soup-with-Ramen-2-scaled.jpg',
            description: 'Traditional Japanese soup with tofu and seaweed.',
            price: 3
        },
        {
            name: 'Cucumber Sunomono',
            image: 'https://imagesvc.meredithcorp.io/v3/mm/image?q=60&c=sc&poi=[681%2C681]&w=1420&h=710&url=https:%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F44%2F2022%2F10%2F06%2Fjapanese-cucumber-salad-hero03.jpg',
            description: 'Cucumber salad with a sweet vinegar dressing.',
            price: 5
        },
        {
            name: 'Tofu Skewers',
            image: 'https://thehealthyfoodie.com/wp-content/uploads/2019/09/Buffalo-Tofu-Skewers-11.jpg',
            description: 'Grilled tofu skewers with teriyaki sauce.',
            price: 6
        },
        {
            name: 'Shishito Peppers',
            image: 'https://www.wholesomeyum.com/wp-content/uploads/2023/04/wholesomeyum-Shishito-Peppers-Recipe-1.jpg',
            description: 'Blistered shishito peppers with sea salt.',
            price: 5
        },
        {
            name: 'Lotus Root Chips',
            image: 'https://th.bing.com/th/id/R.b0ea86966f16d003550f29dcf5a75e08?rik=3CPYFSKCfmAXZg&riu=http%3a%2f%2fwww.builicious.com%2fwp-content%2fuploads%2f2015%2f11%2fLotus-Chips-1024x1024.jpg&ehk=CViCZPlhCNzwQmToP%2bNXvkqmbyB%2fGhYt94CbdIRoLpM%3d&risl=&pid=ImgRaw&r=0',
            description: 'Crispy lotus root chips with a hint of sea salt.',
            price: 4
        },
    ];

    let starters = [
        {
            name: 'Agedashi Tofu',
            image: 'https://th.bing.com/th/id/R.2ce67521e5b13ff4a2cad664a862e255?rik=P4HVjAECJvZyRQ&riu=http%3a%2f%2fsudachirecipes.com%2fwp-content%2fuploads%2f2022%2f11%2fagedashi-tofu-sq.jpg&ehk=CpkTSLBpaCnjzgUAmd0XuSMzLXrIH8zrJ5nmZSyxnaY%3d&risl=&pid=ImgRaw&r=0',
            description: 'Fried tofu in a flavorful dashi broth.',
            price: 7
        },
        {
            name: 'Vegetable Tempura',
            image: 'https://www.connoisseurusveg.com/wp-content/uploads/2021/07/vegetable-tempura-square.jpg',
            description: 'Assorted vegetables lightly battered and fried.',
            price: 8
        },
        {
            name: 'Spring Rolls',
            image: 'https://tse1.mm.bing.net/th/id/OIP.JbPZs7xn3CN351T8bYux4QHaHa?rs=1&pid=ImgDetMain',
            description: 'Crispy vegetable spring rolls with dipping sauce.',
            price: 6
        },
        {
            name: 'Stuffed Mushrooms',
            image: 'https://tse2.mm.bing.net/th/id/OIP.QioAI8pxrKQfggU9zVzP2wHaHa?rs=1&pid=ImgDetMain',
            description: 'Mushrooms stuffed with a savory tofu filling.',
            price: 7
        },
        {
            name: 'Vegetable Gyoza',
            image: 'https://sudachirecipes.com/wp-content/uploads/2020/07/tofu-veg-gyoza-thumb.jpg',
            description: 'Pan-fried vegetable dumplings.',
            price: 8
        },
        {
            name: 'Tofu Katsu',
            image: 'https://tse4.mm.bing.net/th/id/OIP.Afq4kDSc0HvL85_9gBZh6AHaJQ?rs=1&pid=ImgDetMain',
            description: 'Breaded and fried tofu cutlets.',
            price: 9
        },
        {
            name: 'Nasu Dengaku',
            image: 'https://tse4.mm.bing.net/th/id/OIP.iPsROQeXbtQs8FA4o-tDJAAAAA?rs=1&pid=ImgDetMain',
            description: 'Grilled eggplant with miso glaze.',
            price: 7
        },
    ];

    let main = [
        {
            name: 'Vegetable Sushi',
            image: 'https://th.bing.com/th/id/R.cae3ab300a447df0195aeeed0ec18171?rik=%2bUuc3xaS7UZMvg&pid=ImgRaw&r=0',
            description: 'Assorted vegetable sushi rolls.',
            price: 12
        },
        {
            name: 'Vegan Ramen',
            image: 'https://thehappypear.ie/wp-content/uploads/2021/11/FullSizeRender-125-1536x1536.jpg',
            description: 'Ramen noodles in a rich vegetable broth with tofu and vegetables.',
            price: 14
        },
        {
            name: 'Vegetable Udon',
            image: 'https://www.cilantroandcitronella.com/wp-content/uploads/2016/08/udon-stir-fry_1_07-720x720.jpg',
            description: 'Udon noodles with assorted vegetables in a savory broth.',
            price: 13
        },
        {
            name: 'Tofu Teriyaki',
            image: 'https://www.noracooks.com/wp-content/uploads/2023/07/teriyaki-tofu-1-2-500x500.jpg',
            description: 'Grilled tofu with teriyaki sauce, served with rice and vegetables.',
            price: 15
        },
        {
            name: 'Vegetable Donburi',
            image: 'https://www.borderlesscomfort.com/wp-content/uploads/2023/03/shrimp-donburi.jpg',
            description: 'Rice bowl topped with assorted vegetables and tofu.',
            price: 12
        },
        {
            name: 'Vegan Yakisoba',
            image: 'https://flouredframe.com/wp-content/uploads/2020/08/yakisoba-thumbnail.jpg',
            description: 'Stir-fried noodles with vegetables and tofu.',
            price: 13
        },
        {
            name: 'Miso Glazed Eggplant',
            image: 'https://www.peelwithzeal.com/wp-content/uploads/2023/05/miso-eggplant-720x720.jpg',
            description: 'Grilled eggplant with a miso glaze, served with rice.',
            price: 14
        },
        {
            name: 'Vegetable Curry',
            image: 'https://tse4.mm.bing.net/th/id/OIP.ICQIgFuhsX7hf_VFirqvcQAAAA?rs=1&pid=ImgDetMain',
            description: 'Japanese-style vegetable curry served with rice.',
            price: 13
        },
        {
            name: 'Tofu Katsu Curry',
            image: 'https://cupfulofkale.com/wp-content/uploads/2019/03/Tofu-Katsu-Curry-720x720.jpeg',
            description: 'Breaded tofu cutlets with Japanese curry sauce, served with rice.',
            price: 15
        },
        {
            name: 'Vegan Sushi Platter',
            image: 'https://th.bing.com/th/id/R.95f07291f6fcf3029007fd58320ea888?rik=b2%2bAUCQO0nGuUA&riu=http%3a%2f%2fshujisushi.com.au%2fimages%2fVegetarian-Sushi-Platter-1467011210JMl7L.jpg&ehk=W%2fFGe5Avlbn8OY3%2bZdaQlrHq3ECplY8kro0hSReDqgM%3d&risl=&pid=ImgRaw&r=0',
            description: 'Assorted vegan sushi rolls and nigiri.',
            price: 18
        }
    ];

    let dessert = [
        {
            name: 'Mochi Ice Cream',
            image: 'https://tse3.mm.bing.net/th/id/OIP.LNXb-aozsMOPav5rTEwzBAHaHa?rs=1&pid=ImgDetMain',
            description: 'Sweet rice cake filled with ice cream.',
            price: 5
        },
        {
            name: 'Matcha Green Tea Cake',
            image: 'https://tse3.mm.bing.net/th/id/OIP.XwQlkA15Pkj5Q3G-KUcxoAHaHa?rs=1&pid=ImgDetMain',
            description: 'Light and fluffy cake with matcha green tea flavor.',
            price: 6
        },
        {
            name: 'Dorayaki',
            image: 'https://blog.giallozafferano.it/meraviglieincucina/wp-content/uploads/2020/04/Dorayaki-alla-nutella-scaled.jpg',
            description: 'Japanese red bean pancake.',
            price: 4
        },
    ];

    let beverages = [
        {
            name: 'Green Tea',
            image: 'https://1.bp.blogspot.com/-hAI6QNtR5AI/VDYmBauDSPI/AAAAAAAAG2Y/PGHpM_oTDxM/s1600/Green-Tea1.jpg',
            description: 'Traditional Japanese green tea.',
            price: 3
        },
        {
            name: 'Matcha Latte',
            image: 'https://tse1.mm.bing.net/th/id/OIP.x2cUioL4Ri4_LOej1nswUQHaJQ?rs=1&pid=ImgDetMain',
            description: 'Creamy matcha green tea latte.',
            price: 5
        },
    ];

    let cart = [] as any;
    let currItem = [
        {
            name: '',
            image: '',
            description: '',
            price: 0
        }
    ] as any;

    let showNotification = false;
    let notificationMessage = '';

    function setCurrentItem(item: any) {
        currItem.length = 0;
        currItem = item;
    }

    function addToCart(item: any, quantity = 1) {
        cart.push(item);
        showNotification = true;
        notificationMessage = `${item.name} added to cart. Total: $${cart.reduce((acc, curr) => acc + curr.price, 0)}`;
        setTimeout(() => showNotification = false, 3000);
    }

    function removeFromCart(index: number) {
        cart = [...cart.slice(0, index), ...cart.slice(index + 1)];
    }

    let page = 1;

</script>

<style>
    .notification {
        animation: slideIn 0.5s ease-out, slideOut 0.5s ease-in 2.5s;
        background-color: #F1E6BA;
        border: 2px solid #32CD32;
        color: #000;
        padding: 1rem;
        position: fixed;
        top: 1rem;
        left: 50%;
        transform: translateX(-50%);
        width: 80%;
        max-width: 500px;
        text-align: center;
        z-index: 1000;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateX(-50%) translateY(-20px);
        }
        to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
    }

    @keyframes slideOut {
        from {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
        to {
            opacity: 0;
            transform: translateX(-50%) translateY(-20px);
        }
    }
</style>

<main class="flex flex-col-reverse sm:flex-row justify-around px-16 gap-10">
    {#if showNotification}
        <div class="notification">
            {notificationMessage}
        </div>
    {/if}
    {#if page == 1}
        <div class="sm:w-1/2">
            <h1 class="text-4xl font-bold">Menu</h1>
            <div class="flex flex-col gap-4 pt-6 items-left h-[80vh] overflow-y-scroll sm:p-4 text-lg">
                <h2 class="text-2xl font-semibold">Appetizers</h2>
                {#each appetizers as item}
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <!-- svelte-ignore a11y-no-static-element-interactions -->
                    <button class="flex justify-between hover:bg-[#ff9583] hover:text-white p-2 rounded-full transition-all px-3" on:click={() => setCurrentItem(item)}>
                        <p>{item.name}</p><span class="hidden sm:block">--------------------------------------</span>
                        <p>{item.price}</p>
                    </button>
                {/each}
                <h2 class="text-2xl font-semibold">Starters</h2>
                {#each starters as item}
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <!-- svelte-ignore a11y-no-static-element-interactions -->
                    <button class="flex justify-between hover:bg-[#ff9583] hover:text-white p-2 rounded-full transition-all px-3" on:click={() => setCurrentItem(item)}>
                        <p>{item.name}</p><span class="hidden sm:block">--------------------------------------</span>
                        <p>{item.price}</p>
                    </button>
                {/each}
                <h2 class="text-2xl font-semibold">Main</h2>
                {#each main as item}
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <!-- svelte-ignore a11y-no-static-element-interactions -->
                    <button class="flex justify-between hover:bg-[#ff9583] hover:text-white p-2 rounded-full transition-all px-3" on:click={() => setCurrentItem(item)}>
                        <p>{item.name}</p><span class="hidden sm:block">--------------------------------------</span>
                        <p>{item.price}</p>
                    </button>
                {/each}
                <h2 class="text-2xl font-semibold">Dessert</h2>
                {#each dessert as item}
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <!-- svelte-ignore a11y-no-static-element-interactions -->
                    <button class="flex justify-between hover:bg-[#ff9583] hover:text-white p-2 rounded-full transition-all px-3" on:click={() => setCurrentItem(item)}>
                        <p>{item.name}</p><span class="hidden sm:block">--------------------------------------</span>
                        <p>{item.price}</p>
                    </button>
                {/each}
                <h2 class="text-2xl font-semibold">Beverages</h2>
                {#each beverages as item}
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <!-- svelte-ignore a11y-no-static-element-interactions -->
                    <button class="flex justify-between hover:bg-[#ff9583] hover:text-white p-2 rounded-full transition-all px-3" on:click={() => setCurrentItem(item)}>
                        <p>{item.name}</p><span class="hidden sm:block">--------------------------------------</span>
                        <p>{item.price}</p>
                    </button>
                {/each}
            </div>
        </div>
        <div class="flex flex-col items-center h-[80vh] justify-center sm:w-1/2 bg-[#F1E6BA] rounded-2xl">
            <div class="flex flex-col gap-4 pt-6 items-left justify-between h-[80vh] overflow-y-scroll w-full p-4 text-lg">
                {#if currItem.length != 1}
                    <div class="flex flex-col justify-between p-2 rounded-full transition-all px-3">
                        <img src={currItem.image} alt={currItem.name} class="w-1/2 rounded-lg mx-auto"/>
                        <div class="flex flex-row justify-between w-full text-2xl font-semibold pt-10 px-5">
                            <p>{currItem.name}</p>
                            <p>${currItem.price}</p>
                        </div>
                        <p class="px-5 mt-5">{currItem.description}</p>
                    </div>
                    <div class="flex flex-col sm:flex-row w-full justify-between bottom-0 ">
                        <button class="bg-[#D6FA32] text-black shadow-md p-2 rounded-full transition-all px-10 mt-5" on:click={() => addToCart(currItem)}>Add to Cart</button>
                        <button class="bg-[#ff9583] text-white shadow-md p-2 rounded-full transition-all px-10 mt-5" on:click={() => page = 2}>Checkout</button>
                    </div>
                {:else}
                    <p class="text-center"> Please click on a menu item </p>
                {/if}
            </div>
        </div>
    {/if}
    {#if page == 2}
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
                    <div class="flex flex-row justify-between w-full text-lg px-5">
                        <p>Subtotal</p>
                        <p>${cart.reduce((acc, curr) => acc + curr.price, 0)}</p>
                    </div>                
                    <div class="flex flex-row justify-between w-full text-lg pt-10 px-5">
                        <p>Tax</p>
                        <p>$15.30</p>
                    </div>
                    <div class="flex flex-row justify-between w-full text-2xl font-semibold px-5">
                        <p>Total</p>
                        <p>${cart.reduce((acc, curr) => acc + curr.price, 0)+15.30}</p>
                    </div>
                </div>
                <div class="flex flex-col sm:flex-row w-full justify-between bottom-0 ">
                    <button class="bg-[#D6FA32] text-black shadow-md p-2 rounded-full transition-all px-10 mt-5" on:click={() => page = 1}>← Back to Menu</button>
                    <button class="bg-[#ff9583] text-white shadow-md p-2 rounded-full transition-all px-10 mt-5" on:click={() => alert('Order Placed')}>Place Order</button>
                </div>
            </div>
        </div>
    {/if}
</main>

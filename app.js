const { createApp } = Vue

createApp({
    data() {
        return {
            navLinks: ["Anasayfa", "Hakkımızda"],
            activeFilters: [],
            items,
            activeImage: {},
            timers: {},
            isDark: document.documentElement.classList.contains("dark"),
            cart: [],
            cartOpen: false,
            menuOpen: false,
            filterOpen: false,
            contactOpen: false,
            form: {
                name: "",
                phone: "",
                email: "",
                subject: "",
                message: ""
            }
        }
    },

    computed: {
        filteredItems() {
            if (this.activeFilters.length === 0) return this.items

            return this.items.filter(item =>
                this.activeFilters.some(f =>
                    item.type.includes(f) || item.ayar === f
                )
            )
        },

        cartCount() {
            return this.cart.reduce((t, i) => t + i.quantity, 0)
        },

        cartTotal() {
            return this.cart.reduce(
                (sum, item) => sum + item.price * item.quantity,
                0
            )
        }
    },

    methods: {

        toggleDark() {
            this.isDark = !this.isDark

            if (this.isDark) {
                document.documentElement.classList.add("dark")
                localStorage.setItem("theme", "dark")
            } else {
                document.documentElement.classList.remove("dark")
                localStorage.setItem("theme", "light")
            }
        },


        addFilter(f) {
            if (!this.activeFilters.includes(f)) {
                this.activeFilters.push(f)
            }
        },

        removeFilter(f) {
            this.activeFilters = this.activeFilters.filter(x => x !== f)
        },

        addToCart(item) {
            const found = this.cart.find(cartItem => cartItem.id === item.id)

            if (found) {
                found.quantity++
            } else {
                this.cart.push({
                    ...item,
                    quantity: 1
                })
            }

            this.saveCart()
        },

        saveCart() {
            localStorage.setItem("cart", JSON.stringify(this.cart))
        },

        removeFromCart(id) {
            this.cart = this.cart.filter(p => p.id !== id)
            this.saveCart()
        },

        increaseQty(item) {
            item.quantity++
            this.saveCart()
        },

        decreaseQty(item) {
            if (item.quantity > 1) {
                item.quantity--
            } else {
                this.removeFromCart(item.id)
            }
            this.saveCart()
        },

        startSlider(id) {
            if (this.timers[id]) return

            this.timers[id] = setInterval(() => {
                const imgs = this.items.find(i => i.id === id).images
                this.activeImage[id] = ((this.activeImage[id] || 0) + 1) % imgs.length
            }, 3000)
        },

        stopSlider(id) {
            clearInterval(this.timers[id])
            this.timers[id] = null
            this.activeImage[id] = 0
        },

        handleNav(link) {
            if (link === "Anasayfa") {
                document.getElementById("products").scrollIntoView({ behavior: "smooth" })
            }
            if (link === "Hakkımızda") {
                document.getElementById("about").scrollIntoView({ behavior: "smooth" })
            }
        },

        scrollTo(id) {
            document.getElementById(id).scrollIntoView({ behavior: "smooth" })
            this.menuOpen = false
        },

        submitForm() {
            const { name, phone, email, subject, message } = this.form

            if (!name || !phone || !email || !subject || !message) {
                alert("Eksik bilgi girişi")
                return
            }

            alert("Başarıyla Gönderildi")
            this.resetForm()
        },

        resetForm() {
            this.form = {
                name: "",
                phone: "",
                email: "",
                subject: "",
                message: ""
            }
        }



    },

    mounted() {
        const savedCart = localStorage.getItem("cart")
        if (savedCart) {
            this.cart = JSON.parse(savedCart)
        }
    }
}).mount("#app")

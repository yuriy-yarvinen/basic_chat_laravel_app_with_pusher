export default {

    data() {
        return {
            size_per_page: 20,
            page_number: 0,
            elements_number: 0
        }
    },

	methods: {
		nextPage() {
            this.page_number++;
        },
        prevPage() {
            this.page_number--;
        },
    },
    
    watch: {
        number_of_pages() {
            this.page_number = 0;
        },
    },

    computed: {
        number_of_pages() {
            return Math.ceil(this.elements_number / this.size_per_page);
        },
    }
}
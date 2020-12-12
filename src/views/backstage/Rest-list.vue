<template>
    <div>
        <h2>餐廳清單</h2>
        <div v-if="restaurantData.length > 0">
            <ul class="list">
                <li v-for="res of restaurantData" :key="res._id">{{res.name}}
                    <ul class="list" v-if="res.menuCategory.length > 0">
                        <li v-for="category of res.menuCategory" :key="category._id">{{category.categoryName}}
                            <ul class="list" v-if="category.meal.length > 0">
                                <li v-for="meal of category.meal" :key="meal._id">
                                    {{meal.mealName}}:{{meal.mealPrice}}元
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <div v-else>
            (尚未取得餐廳清單)
        </div>
        <ApiReturn :returnValue="returnValue"></ApiReturn>
    </div>
</template>

<script>
import axios from "axios"
import ApiReturn from "@/components/ApiReturn.vue"
export default {
    name: 'rest-list',
    components: {
        ApiReturn
    },
    mounted() {
        this.getRestaurantData()
    },
    data() {
        return {
            restaurantData: [],
			returnValue: "(空的)",
        }
    },
    methods: {
        getRestaurantData() {
            const url = `${this.GLOBAL.baseUrl}/doc/restaurant`
            axios.get(url).then(res => {
                this.restaurantData = res.data.data
                this.returnValue = res.data.data
            }).catch(err => {
                this.returnValue = err
            })
        }
    }
}
</script>
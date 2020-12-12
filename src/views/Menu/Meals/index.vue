<style scoped src="./style.css"></style>
<template>
	<div>
        <section class="mealList">
            <li v-for="m of meal" :key="m._id" class="meal">
                <img src="../../../assets/meal.svg" alt="">
                <div>{{m.mealName}}</div>
            </li>
        </section>
		<ApiReturn :returnValue="returnValue"></ApiReturn>
	</div>
</template>
<script>
import axios from "axios";
import ApiReturn from "@/components/ApiReturn.vue";

export default {
    name: "Meals",
    components: {
        ApiReturn
    },
	data() {
		return {
			returnValue: "(空的)",
            category_id: null,
            meal: null
		};
	},
	beforeMount() {
        this.category_id = this.$route.params.category_id
        if(this.category_id == 'fake' || !this.category_id) {
            this.getFakeData()
        } else {
            this.initMeal()
        }
	},
	methods: {
		initMeal() {
            (async () => {
                try {
                    const url = `${this.GLOBAL.baseUrl}/mealFindByMenuCategoryId/${this.category_id}`
                    const res = await axios.get(url)
                    console.log(res.data)
                    this.meal = res.data.data
                    this.returnValue = res.data.data
                } catch (error) {
                    this.returnValue = error
                }
            })()
        },
        getFakeData() {
            this.returnValue = '(使用假資料)'
            this.meal = [
        {
            "_id": "5fb0af526c37c124f8e237d3",
            "menuCategory_id": "5fb0ad9b6c37c124f8e237c6",
            "mealName": "小冠軍雞塊（5個）",
            "mealPrice": 30
        },
        {
            "_id": "5fb0af606c37c124f8e237d4",
            "menuCategory_id": "5fb0ad9b6c37c124f8e237c6",
            "mealName": "波霸薯條",
            "mealPrice": 30
        },
        {
            "_id": "5fb0af7b6c37c124f8e237d5",
            "menuCategory_id": "5fb0ad9b6c37c124f8e237c6",
            "mealName": "洋蔥圈（6個）",
            "mealPrice": 30
        },
        {
            "_id": "5fb0af8f6c37c124f8e237d6",
            "menuCategory_id": "5fb0ad9b6c37c124f8e237c6",
            "mealName": "薯餅（5個）",
            "mealPrice": 30
        },
        {
            "_id": "5fb0afa46c37c124f8e237d7",
            "menuCategory_id": "5fb0ad9b6c37c124f8e237c6",
            "mealName": "起士條（2個）",
            "mealPrice": 30
        }
    ]
        }
    },
    watch : {
		$route() {
            this.category_id = this.$route.params.category_id
            if(this.category_id == 'fake' || !this.category_id) {
            this.getFakeData()
        } else {
            this.initMeal()
        }
		}
	}
};
</script>
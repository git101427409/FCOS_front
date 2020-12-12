<template>
    <div>
        <h2>新增餐點</h2>
        <fieldset>
            <!-- <div>選中的餐廳id是：{{selectRestaurant}}</div>
            <div>選中的分類id是：{{selectCategory}}</div>
            <div>categoryList: {{categoryList}}</div> -->
            <label for="restaurant">餐廳：</label>
            <select id="restaurant" v-model="selectRestaurant">
                <option value="">選擇一個餐廳</option>
                <option v-for="res in restaurantList" :key="res._id" :value="res._id">{{ res.name }}</option>
            </select>
            <label for="menuCategory">菜單分類：</label>
            <select id="menuCategory" v-model="selectCategory" v-if="categoryList">
                <option value="">選擇一個分類</option>
                <option v-for="category in categoryList" :key="category.id" :value="category.id">{{category.name}}</option>
            </select>
            <span v-else>(尚未建立分類)</span>
            <label for="mealName">餐點名稱︰</label>
            <input type="text" id="mealName" v-model.trim="mealName">
            <label for="mealPrice">價格︰</label>
            <input type="text" id="mealPrice" v-model.number.trim="mealPrice">
            <button @click="handleAddMeal">提交</button>
        </fieldset>
        <ApiReturn :returnValue="returnValue"></ApiReturn>
    </div>
</template>
<script>
// 先拿restaurant list => ok
// 接著從restaurant_id拿菜單 => ok
// 接著 建立select表單選項 => ok
// 拿菜單分類的id => ok
import axios from 'axios'
// components
import ApiReturn from '@/components/ApiReturn.vue'

export default {
    name: 'meal-create',
    components: {
        ApiReturn
    },
    data() {
        return {
            restaurantList: [],
            menuCategoryList: [],
            mealName: '',
            mealPrice: '',
            selectRestaurant: '',
            // 選中的餐廳id
            selectCategory: '',
            // 選中的分類id
            returnValue: '(空的)'
        }
    },
    computed: {
        categoryList: function() {
            let list
            for (const obj of this.menuCategoryList) {
                if(obj.restaurant_id == this.selectRestaurant) {
                    list = obj.menuCategorys
                }
            }
            return list
        }
    },
    mounted() {
        this.getRestaurantList()
    },
    methods: {
        getRestaurantList() {
            const url = `${this.GLOBAL.baseUrl}/restaurants/`
            axios.get(url).then(res => {
                this.restaurantList = res.data.data
                this.getMenuCategoryList()
            }).catch(err => {
                this.returnValue = err
            })
        },
        getMenuCategoryList() {
            for (const restaurant of this.restaurantList) {
                if(restaurant._id) {
                    const url = `${this.GLOBAL.baseUrl}/menuCategoryFindByRestaurantId/${restaurant._id}`
                    axios.get(url).then(res => {
                        const docs = res.data.data
                        const menuCategorys = []
                        for (const doc of docs) {
                            if(doc._id && doc.categoryName) {
                                menuCategorys.push({
                                    id: doc._id,
                                    name: doc.categoryName,
                                    })
                            }
                        }
                        this.menuCategoryList.push({ restaurant_id: restaurant._id, menuCategorys})
                    }).catch(err => {
                        this.returnValue = err
                    })
                }
            }
        },
        handleAddMeal() {
            if(!this.selectRestaurant || !this.selectCategory || !this.mealName || !this.mealPrice) {
                alert('表單尚未填寫完成')
            } else {
                const url = `${this.GLOBAL.baseUrl}/meal/create`
                const obj = {
                    'menuCategory_id': this.selectCategory,
                    'mealName': this.mealName,
                    'mealPrice': this.mealPrice
                }
                axios.post(url, obj).then(res => {
                    this.returnValue = res.data
                    this.mealName = '',
                    this.mealPrice = ''
                }).catch(err => {
                    this.returnValue = err
                })
            }
        }
    }
}
</script>
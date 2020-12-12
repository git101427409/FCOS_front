<template>
	<div>
		<h2>新增菜單分類</h2>
		<fieldset>
            <div>選中的餐廳id是：{{selectRestaurant}}</div>
            <div>填寫的分類名稱：{{categoryName}}</div>
            <div>categoryList: {{categoryList}}</div>
			<label for="restaurant"></label>
			<select id="restaurant" v-model="selectRestaurant">
				<option value="">選擇一個餐廳</option>
				<option
					v-for="res in restaurantList"
					:key="res._id"
					:value="res._id"
				>
					{{ res.name }}
				</option>
			</select>
            <label for="categoryName">分類名稱：</label>
			<input type="text" id="categoryName" v-model.trim="categoryName">
            <button @click="handleAddMenuCategory">提交</button>
			<div>
				<h3>已建立的分類：</h3>
				<ul v-if="categoryList" class="list">
					<li v-for="category of categoryList" :key="category">
						{{ category.name }}
					</li>
				</ul>
                <span v-else>(尚無分類)</span>
			</div>
		</fieldset>
		<ApiReturn :returnValue="returnValue"></ApiReturn>
	</div>
</template>
<script>
import axios from "axios";
import ApiReturn from "@/components/ApiReturn.vue";
export default {
	name: "menuCategory-create",
    components: {
		ApiReturn
    },
    mounted() {
        this.getRestaurantList()
    },
	data() {
		return {
			restaurantList: [],
			menuCategoryList: [],
            selectRestaurant: "",
            categoryName: '',
			returnValue: "(空的)",
		};
	},
	computed: {
		categoryList: function () {
			let list;
			for (const obj of this.menuCategoryList) {
				if (obj.restaurant_id == this.selectRestaurant) {
					list = obj.menuCategorys;
				}
            }
			return list;
		},
	},
	methods: {
		getRestaurantList() {
			const url = `${this.GLOBAL.baseUrl}/restaurants/`;
			axios
				.get(url)
				.then((res) => {
					this.restaurantList = res.data.data;
					this.getMenuCategoryList();
				})
				.catch((err) => {
					this.returnValue = err;
				});
		},
		getMenuCategoryList() {
			for (const restaurant of this.restaurantList) {
				if (restaurant._id) {
					const url = `${this.GLOBAL.baseUrl}/menuCategoryFindByRestaurantId/${restaurant._id}`;
					axios
						.get(url)
						.then((res) => {
							const docs = res.data.data;
							const menuCategorys = [];
							for (const doc of docs) {
								if (doc._id && doc.categoryName) {
									menuCategorys.push({
										id: doc._id,
										name: doc.categoryName,
									});
								}
							}
							this.menuCategoryList.push({
								restaurant_id: restaurant._id,
								menuCategorys,
							});
						})
						.catch((err) => {
							this.returnValue = err;
						});
				}
			}
        },
        handleAddMenuCategory() {
            if(!this.selectRestaurant || !this.categoryName) {
                alert('表單尚未填寫完成')
            } else {
                const url = `${this.GLOBAL.baseUrl}/menuCategory/create`
                const obj = {
                    restaurant_id: this.selectRestaurant,
                    categoryName: this.categoryName
                }
                axios.post(url, obj).then(res => {
                    this.returnValue = res.data
                    this.categoryName = ''
                    this.getRestaurantList()
                }).catch(err => {
                    this.returnValue = err
                })
            }
        }
	},
};
</script>
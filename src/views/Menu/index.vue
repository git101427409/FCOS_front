<style scoped src="./style.css"></style>
<template>
	<div>
		<div class="menu">
			<nav class="category-nav">
				<router-link tag="h4" :to="{name: 'Meals', params: {category_id: m._id}}" v-for="m of menu" :key="m._id">{{ m.categoryName }}</router-link>
			</nav>
			<router-view></router-view>
		</div>
		<ApiReturn :returnValue="returnValue"></ApiReturn>
	</div>
</template>
<script>
import axios from "axios";
import ApiReturn from "@/components/ApiReturn.vue";

export default {
	name: "Menu",
	components: {
		ApiReturn,
	},
	beforeMount() {
		console.log('params:', this.$route.params.restaurant_id)
		if (
			this.$route.params.restaurant_id == "fake" ||
			!this.$route.params.restaurant_id
		) {
			this.getFakeData();
		} else {
			this.initMenu();
		}
	},
	data() {
		return {
			restaurant_id: null,
			returnValue: "(空的)",
			menu: null,
		};
	},
	methods: {
		initMenu() {
			this.restaurant_id = this.$route.params.restaurant_id;
			(async () => {
				const url = `${this.GLOBAL.baseUrl}/menuCategoryFindByRestaurantId/${this.restaurant_id}`;
				try {
					const res = await axios.get(url);
					console.log('res.data', res.data);
					this.menu = res.data.data;
					this.returnValue = res.data.data;
				} catch (error) {
					this.returnValue = error;
				}
			})();
		},
		getFakeData() {
			this.returnValue = '(使用假資料)'
			this.menu = [
				{
					_id: "fake",
					categoryName: "桶餐",
					meal: [
						{
							_id: "5fb0ae006c37c124f8e237c7",
							mealName: "全家餐-雞腿x2+雞塊x3+雞翅x3",
							mealPrice: 249,
						},
						{
							_id: "5fb0ae586c37c124f8e237c8",
							mealName: "雞腿x8",
							mealPrice: 315,
						},
						{
							_id: "5fb0ae676c37c124f8e237c9",
							mealName: "雞塊x8",
							mealPrice: 275,
						},
						{
							_id: "5fb0ae886c37c124f8e237ca",
							mealName: "雞腿x4+雞翅x4",
							mealPrice: 255,
						},
						{
							_id: "5fb0aeb66c37c124f8e237cb",
							mealName: "雞腿x4+雞塊x4",
							mealPrice: 295,
						},
					],
				},
				{
					_id: "fake",
					categoryName: "炸雞",
					meal: [
						{
							_id: "5fb0aed76c37c124f8e237cc",
							mealName: "泰式酸辣雞翅（盒）",
							mealPrice: 119,
						},
						{
							_id: "5fb0aee96c37c124f8e237cd",
							mealName: "雞米球",
							mealPrice: 50,
						},
						{
							_id: "5fb0aefd6c37c124f8e237ce",
							mealName: "紐奧良香雞排",
							mealPrice: 55,
						},
						{
							_id: "5fb0af0b6c37c124f8e237cf",
							mealName: "泰式雞排",
							mealPrice: 60,
						},
						{
							_id: "5fb0af176c37c124f8e237d0",
							mealName: "雞腿",
							mealPrice: 40,
						},
						{
							_id: "5fb0af236c37c124f8e237d1",
							mealName: "雞塊",
							mealPrice: 35,
						},
						{
							_id: "5fb0af316c37c124f8e237d2",
							mealName: "雞翅",
							mealPrice: 25,
						},
					],
				},
				{
					_id: "fake",
					categoryName: "點心",
					meal: [
						{
							_id: "5fb0af526c37c124f8e237d3",
							mealName: "小冠軍雞塊（5個）",
							mealPrice: 30,
						},
						{
							_id: "5fb0af606c37c124f8e237d4",
							mealName: "波霸薯條",
							mealPrice: 30,
						},
						{
							_id: "5fb0af7b6c37c124f8e237d5",
							mealName: "洋蔥圈（6個）",
							mealPrice: 30,
						},
						{
							_id: "5fb0af8f6c37c124f8e237d6",
							mealName: "薯餅（5個）",
							mealPrice: 30,
						},
						{
							_id: "5fb0afa46c37c124f8e237d7",
							mealName: "起士條（2個）",
							mealPrice: 30,
						},
					],
				},
			];
		},
	}
};
</script>
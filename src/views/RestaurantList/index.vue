<template>
	<div>
		<div class="restaurantlist">
			<section v-for="li of list" :key="li._id" class="restaurant">
				<div>
					<img src="../../assets/logo.svg" alt="">
				</div>
				<div>
					<h3>{{ li.name }}</h3>
					<div class="address">{{ li.address }}</div>
					<div class="phone">{{ li.phone }}</div>
				</div>
			</section>
		</div>
		<ApiReturn :returnValue="returnValue"></ApiReturn>
	</div>
</template>

<style scoped src="./style.css"></style>

<script>
import axios from "axios";
import ApiReturn from "@/components/ApiReturn.vue";
export default {
	name: "RestaurantList",
	components: {
		ApiReturn,
	},
	props: {
		propList: {
			type: String,
			default: null,
		},
	},
	data() {
		return {
			returnValue: "(空的)",
			list: [],
		};
	},
	beforeMount() {
		// 使用假資料或接口
		this.getfakeData()
		// this.initList()
	},
	mounted() {},
	methods: {
		getfakeData() {
			this.returnValue = "使用假資料"
			this.list = [
				{
					_id: "5f5753968368211d3ca84311",
					name: "麥當勞-豐原和平店",
					address: "420台中市豐原區中正路138號",
					phone: "+886425225129",
					menuCategory: [
						{
							_id: "5fad093d3ff3f41578b3d977",
							categoryName: "麥脆雞",
							meal: [],
						},
					],
				},
				{
					_id: "5f9f6be18864801c3c7a8315",
					name: "炸雞爌肉披薩",
					address: "未指定",
					phone: "20201101",
					menuCategory: [],
				},
				{
					_id: "5fa0a3900e70c22c3c4a8f47",
					name: "興炸食貨豐洲店",
					address: "429台中市神岡區豐洲路140號",
					phone: "0425203663",
					menuCategory: [
						{
							_id: "5fa0a4510e70c22c3c4a8f48",
							categoryName: "炸雞",
							meal: [
								{
									_id: "5fa0b42b01346a0524af42a0",
									mealName: "香雞排",
									mealPrice: 60,
								},
								{
									_id: "5fa0b45901346a0524af42a1",
									mealName: "鹹酥雞（小）",
									mealPrice: 50,
								},
								{
									_id: "5fa0b46301346a0524af42a2",
									mealName: "鹹酥雞（大）",
									mealPrice: 100,
								},
								{
									_id: "5fa0b46f01346a0524af42a3",
									mealName: "三角骨（小）",
									mealPrice: 50,
								},
								{
									_id: "5fa0b47901346a0524af42a4",
									mealName: "三角骨（大）",
									mealPrice: 100,
								},
								{
									_id: "5fa0b48101346a0524af42a5",
									mealName: "雞皮（小）",
									mealPrice: 50,
								},
								{
									_id: "5fa0b48c01346a0524af42a6",
									mealName: "雞皮（大）",
									mealPrice: 100,
								},
							],
						},
						{
							_id: "5fa0a4740e70c22c3c4a8f49",
							categoryName: "店家推薦",
							meal: [
								{
									_id: "5faca71e011a8a0d58372ee8",
									mealName: "魷魚酥（小）",
									mealPrice: 50,
								},
								{
									_id: "5faca74a011a8a0d58372ee9",
									mealName: "魷魚酥（大）",
									mealPrice: 100,
								},
								{
									_id: "5faca757011a8a0d58372eea",
									mealName: "甜不辣（小）",
									mealPrice: 30,
								},
								{
									_id: "5faca764011a8a0d58372eeb",
									mealName: "甜不辣（大）",
									mealPrice: 50,
								},
								{
									_id: "5faca776011a8a0d58372eec",
									mealName: "馬鈴薯條（小）",
									mealPrice: 30,
								},
								{
									_id: "5faca77c011a8a0d58372eed",
									mealName: "馬鈴薯條（大）",
									mealPrice: 50,
								},
							],
						},
						{
							_id: "5fa0a47f0e70c22c3c4a8f4a",
							categoryName: "其他",
							meal: [],
						},
					],
				},
				{
					_id: "5fa763183a4e1e2d20262b7b",
					name: "熊貓",
					address: "安康路50號",
					phone: "04-12345678",
					menuCategory: [
						{
							_id: "5fad0ea26320971d2058a2ac",
							categoryName: "熊貓分類1",
							meal: [],
						},
					],
				},
				{
					_id: "5fb0ac816c37c124f8e237c3",
					name: "昌平炸雞王豐原大明店",
					address: "420台中市豐原區大明路7號",
					phone: "0965 607 860",
					menuCategory: [
						{
							_id: "5fb0ad5d6c37c124f8e237c4",
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
							_id: "5fb0ad846c37c124f8e237c5",
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
							_id: "5fb0ad9b6c37c124f8e237c6",
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
					],
				},
			]
		},
		initList() {
			if (!this.propList) {
				(async () => {
					try {
						const url = `${this.GLOBAL.baseUrl}/doc/restaurant`;
						const res = await axios.get(url);
						this.list = res.data.data;
						this.returnValue = res.data.data;
					} catch (error) {
						this.returnValue = error;
					}
				})();
			} else {
				this.list = this.propList;
			}
		},
	},
};
</script>
<template>
	<div class= "slideshow-container">
		<div class="slides-container">
			<div
				v-show="idx == slideIndex"
				v-for="(img, idx) of images"
				:key="img"
				class="slides fade"
			>
				<div class="numbertext">{{ idx + 1 }}/{{ images.length }}</div>
				<router-link :to="{path: 'backstage'}">
					<div class="img">
						<img :src="img" alt="" />
					</div>
				</router-link>
				<div class="text">Caption {{ idx + 1 }}</div>
			</div>

			<span
				class="prev"
				@click="
					stopPlay();
					changeSlide(slideIndex - 1);
				"
				>&#10094;</span
			>
			<span class="next" @click="stopPlay();changeSlide(slideIndex + 1)"
				>&#10095;</span
			>
		</div>
		<div class="slideshow-dots">
			<span
				v-for="(img, idx) in images"
				:key="img"
				class="dot"
				:class="{ active: idx == slideIndex }"
				@click="changeSlide(idx)"
			></span>
		</div>
	</div>
</template>

<style scoped>
.slideshow-container {
	max-width: 1200px;
}
.slides-container {
	position: relative;
	margin-bottom: 0.5em;
}
.slides-container a {
	display: block;
}
.img > img {
	width: 100%;
}
/* Next & previous buttons */
.prev,
.next {
	cursor: pointer;
	position: absolute;
	top: 50%;
    transform: translateY(-50%);
	width: auto;
	padding: 16px;
	color: white;
	font-weight: bold;
	font-size: 18px;
	transition: 0.6s ease;
	user-select: none;
}
.prev {
    left: 0;
    border-radius: 0 3px 3px 0;
}
.next {
	right: 0;
	border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover,
.next:hover {
	background-color: rgba(0, 0, 0, 0.8);
}

/* Caption text */
.text {
	color: #f2f2f2;
	font-size: 15px;
	padding: 8px 12px;
	position: absolute;
	bottom: 8px;
	width: 100%;
	text-align: center;
}

/* Number text (1/3 etc) */
.numbertext {
	color: #f2f2f2;
	font-size: 12px;
	padding: 8px 12px;
	position: absolute;
	top: 0;
}

/* The dots/bullets/indicators */
.slideshow-dots {
	text-align: center;
}
.dot {
	cursor: pointer;
	height: 15px;
	width: 15px;
	margin: 0 2px;
	background-color: #bbb;
	border-radius: 50%;
	display: inline-block;
	transition: background-color 0.6s ease;
}

.active,
.dot:hover {
	background-color: #717171;
}

/* Fading animation */
.fade {
	-webkit-animation-name: fade;
	-webkit-animation-duration: 1.5s;
	animation-name: fade;
	animation-duration: 1.5s;
}

@-webkit-keyframes fade {
	from {
		opacity: 0.4;
	}
	to {
		opacity: 1;
	}
}

@keyframes fade {
	from {
		opacity: 0.4;
	}
	to {
		opacity: 1;
	}
}
</style>

<script>
export default {
	name: "Slideshow",
	data() {
		return {
			joe: "joe",
			slideIndex: 0,
			autoPlay: null,
			images: [
				require("../assets/banner/1.jpg"),
				require("../assets/banner/2.jpg"),
				require("../assets/banner/3.jpg"),
				require("../assets/banner/4.jpg"),
				require("../assets/banner/5.jpg"),
			],
		};
	},
	computed: {
		countImg() {
			return this.images.length;
		},
	},
	mounted() {
		this.autoPlay = setInterval(() => {
			this.changeSlide(this.slideIndex + 1);
		}, 3000);
	},
	methods: {
		changeSlide(n) {
			this.slideIndex = (parseInt(n, 10) + this.countImg) % this.countImg;
		},
		stopPlay() {
			clearInterval(this.autoPlay);
		},
	},
};
</script>
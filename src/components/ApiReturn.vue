<template>
	<div class="apiReturn">
		<h3>回傳值</h3>
        <p v-if="returnValue.status === 0 || returnValue.status === 1">
            API調用完成
            <span v-if="returnValue.status === 0">
                (成功)
            </span>
            <span v-else>
                (錯誤)
            </span>
        </p>
		<p>{{ returnValue }}</p>
	</div>
</template>

<script>
export default {
    name: "ApiReturn",
    props: {
        returnValue: {
            type: String,
            required: true
        }
    }
};
</script>

<style scoped>
    .apiReturn {
            border: 1px solid black;
            margin-top: 20px;
        }
</style>
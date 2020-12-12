<template>
    <div>
        <h2>新增餐廳</h2>
        <fieldset>
            <label for="name">餐廳名稱︰</label>
            <input type="text" id="name" v-model.trim="name">
            <label for="address">地址︰</label>
            <input type="text" id="address" v-model.trim="address">
            <label for="phone">電話︰</label>
            <input type="text" id="phone" v-model.trim="phone">
            <button @click="handleAddRestaurant">提交</button>
        </fieldset>
        <ApiReturn :returnValue="returnValue"></ApiReturn>
    </div>
</template>

<script>
import axios from 'axios'
// components
import ApiReturn from '@/components/ApiReturn.vue'

export default {
    name: 'rest-create',
    components: {
        ApiReturn
    },
    data() {
        return {
            name: '',
            address: '',
            phone: '',
            returnValue: '(空的)'
        }
    },
    methods: {
        handleAddRestaurant() {
            if(this.name.length == 0 || this.address.length == 0 || this.phone.length == 0) {
                alert('表格不能為空白')
            } else {
                const url = `${this.GLOBAL.baseUrl}/restaurant/create`
                const obj = {
                    'name': this.name,
                    'address': this.address,
                    'phone': this.phone,
                }
                axios.post(url, obj).then(res => {
                    this.returnValue = res.data
                    this.name = ''
                    this.address = ''
                    this.phone = ''
                    // console.log(res.data)
                }).catch(err => {
                    this.returnValue = err
                    // console.log(err)
                })
            }
        }
    }
}
</script>
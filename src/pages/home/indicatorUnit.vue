<template>
    <div class="lrm-container">
        <div class="a">
            <img :src="obj.img" />
            <div class="right">
                <div>{{obj.name}}</div>
                <div class="value">{{obj.value + '(万)'}}</div>
            </div>
        </div>

    </div>

</template>

<script>
export default {
    data() {
        return {}
    },
    props: {
        obj: {
            type: Object,
            required: true
        }
    },
    created() {},
    methods: {}
}
</script>
<style lang='less' scoped>
.lrm-container {
    float: left;
    color: white;
    width: 100%;
    font-size: 18px;
    text-align: center;
    padding: 5px;
    margin-bottom: 20px;
    box-sizing: border-box;
    .a {
        padding: 0 15px;
        background: url(../../assets/img/blur-bg-blurred.jpg) no-repeat fixed;
        background-size: cover;
        height: 74px;
        vertical-align: middle;
        padding-top: 12px;
        img {
            width: 60px;
            height: 60px;
            float: left;
        }
        .right {
            float: right;
            .value {
                font-size: 24px;
            }
        }
    }
}

@media screen and (max-width: 1436px) and (min-width: 900px) {
    .lrm-container {
        width: 50%;
    }
}
@media screen and (min-width: 1436px) {
    .lrm-container {
        width: 25%;
    }
}
</style>

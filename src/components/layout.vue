<template>
    <div>
        <component :is="layout"></component>
    </div>
</template>
<script>
import Layouts from './layouts/Index.vue'
import Layouts2 from './layouts2/Index.vue'
export default {
    data() {
        return {
            layout: localStorage.getItem('layout') || 'Layouts'
        }
    },
    created() {
        const self = this
        this.bus.$on('set-layout', function(id) {
            self.layout = id
            localStorage.setItem('layout', id)
        })
    },
    components: {
        Layouts,
        Layouts2
    }
}
</script>

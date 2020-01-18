<template>
    <div class="view-container">
        <div>
            <el-tabs v-model="activeName" type="card">
                <el-tab-pane label="基本用户" name="first">
                    <first/>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>
<script>
import first from "./first/first";
export default {
    data() {
        return {
            activeName: "first"
        }
    },
    components: {
        first
    }
}
</script>
<style scoped>

</style>



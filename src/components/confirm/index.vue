<template>
    <div @click="confirm" style="display:inline-block;">
        <slot></slot>
    </div>
</template>
<script>
export default {
    props: {
        text: {
            type: String,
            default: "是否继续操作?"
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        confirm: function() {
            if (this.disabled) {
                return;
            }
            this.$confirm(this.text, "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning"
            }).then(() => {
                this.$emit("confirm");
            }).catch(() => {
                this.$emit("cancel");
            });
        }
    }
};
</script>
<style scoped>
</style>



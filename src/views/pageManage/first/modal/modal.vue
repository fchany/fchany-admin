<template>
    <div>
        <el-dialog title="新增用户" :visible.sync="visible" :before-close="close" style="height:1000px">
            <el-form ref="form" :model="form" :rules="rules">
                <el-form-item prop="name" label="用户姓名" label-width="120px">
                    <el-input style="width:300px;" v-model="form.name" :placeholder="'请输入用户姓名'"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="close">取 消</el-button>
                <el-button type="primary" @click="confirm">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
export default {
    props: {
        visible: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            form: {
                name: ""
            },
            rules: {
                name: [
                    { required: true, message: '请输入用户姓名', trigger: 'blur' },
                ]
            }
        }
    },
    methods: {
        close() {
            this.$emit("update:visible", false);
            this.resetForm();
        },
        confirm() {
            this.submitForm("form", () => {
                this.resetForm();
                this.$emit("confirm");
                this.close();
            });
        },
        submitForm(formName, event) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    event();
                } else {
                    return false;
                }
            });
        },
        resetForm() {
            this.$refs.form.resetFields();
        }
    }
}
</script>




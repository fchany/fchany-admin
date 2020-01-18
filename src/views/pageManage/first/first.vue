<template>
    <div>
        <el-row :gutter="10">
            <el-col :xs="24" :sm="6">
                <el-form label-width="80px">
                    <el-form-item label="用户姓名">
                        <el-input placeholder="请输入用户姓名"></el-input>
                    </el-form-item>
                </el-form>
            </el-col>
            <el-col :xs="24" :sm="6">
                <el-form label-width="80px">
                    <el-form-item label="角色类型">
                        <el-select v-model="type" placeholder="请选择角色类型" class="w_100">
                            <el-option value="1" label="普通用户"></el-option>
                            <el-option value="2" label="经纪人"></el-option>
                            <el-option value="3" label="企业人"></el-option>
                            <el-option value="4" label="代理人"></el-option>
                        </el-select>
                    </el-form-item>
                </el-form>
            </el-col>
            <div class="pull-left">
                <el-form>
                    <el-form-item>
                        <el-button icon="el-icon-search" type="primary">搜 索</el-button>
                    </el-form-item>
                </el-form>
            </div>
            <div class="pull-right pr5">
                <transition name="el-zoom-in-center">
                    <Confirm v-if="delList.length != 0">
                        <el-button type="danger" icon="el-icon-delete">批量删除</el-button>
                    </Confirm>
                </transition>
                <el-button type="primary" icon="el-icon-plus" @click="toggleModal('addModal', true)">新增用户</el-button>
            </div>
        </el-row>
        <el-row>
            <el-table
                :data="tableData"
                @selection-change="handleSelectionChange">
                <el-table-column label="基本用户">
                    <el-table-column type="selection" width="55" align="center"></el-table-column>
                    <el-table-column label="头像" align="center" width="100">
                        <template slot-scope="scope">
                            <div>
                                <img :src="scope.row.avatar" class="avatar">
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column label="昵称" align="center" prop="name"></el-table-column>
                    <el-table-column label="注册时间" align="center" prop="regDate"></el-table-column>
                    <el-table-column label="用户身份" align="center" prop="type"></el-table-column>
                    <el-table-column label="操作" align="center" width="100">
                        <template slot-scope="scope">
                            <Confirm>
                                <el-button type="danger">删 除</el-button>
                            </Confirm>
                        </template>
                    </el-table-column>
                </el-table-column>
            </el-table>
            <div class="clear-fix">
                <div class="pull-right pt20">
                    <el-pagination
                        background
                        layout="total, prev, pager, next"
                        small
                        :total="1000">
                    </el-pagination>
                </div>
            </div>
        </el-row>
        <!-- 弹框 -->
        <modal :visible.sync="addModal"/>
    </div>
</template>
<script>
import modal from "./modal/modal";
export default {
    data() {
        return {
            addModal: false,
            type: "",
            tableData: [
                {id: 1, type: "经纪人", regDate: "2019-06-10", name: "叫我王富贵", avatar: "http://5b0988e595225.cdn.sohucs.com/images/20171030/26ed195281334ba4b1752394b60eb29a.jpeg"},
                {id: 1, type: "经纪人", regDate: "2019-06-10", name: "叫我王富贵", avatar: "http://5b0988e595225.cdn.sohucs.com/images/20171030/26ed195281334ba4b1752394b60eb29a.jpeg"},
                {id: 1, type: "经纪人", regDate: "2019-06-10", name: "叫我王富贵", avatar: "http://5b0988e595225.cdn.sohucs.com/images/20171030/26ed195281334ba4b1752394b60eb29a.jpeg"},
                {id: 1, type: "经纪人", regDate: "2019-06-10", name: "叫我王富贵", avatar: "http://5b0988e595225.cdn.sohucs.com/images/20171030/26ed195281334ba4b1752394b60eb29a.jpeg"},
                {id: 1, type: "经纪人", regDate: "2019-06-10", name: "叫我王富贵", avatar: "http://5b0988e595225.cdn.sohucs.com/images/20171030/26ed195281334ba4b1752394b60eb29a.jpeg"},
            ],
            delList: []
        }
    },
    methods: {
        loadList() {
            // console.log(1)
        },
        toggleModal(type, flag) {
            this[type] = flag;
        },
        handleSelectionChange(e) {
            this.delList = e;
        }
    },
    components: {
        modal
    }
}
</script>
<style scoped>
.avatar{
    width:40px;
    height:40px;
    border-radius:50%;
}
</style>



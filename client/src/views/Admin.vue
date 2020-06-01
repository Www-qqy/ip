<template>
  <div class="admin">
    <div class="admin-login">
      <div class="el-icon-user"></div>
      <div class="admin-login-user">
        <el-dropdown>
          <span class="el-dropdown-link">
            {{email}}
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>email: {{email}}</el-dropdown-item>
            <el-dropdown-item>role: {{role}}</el-dropdown-item>
            <el-dropdown-item>ip: {{ip}}</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <el-table
      class="admin-table"
      :data="applyTableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%"
    >
      <el-table-column label="Id" prop="id"></el-table-column>
      <el-table-column label="Email" prop="email"></el-table-column>
      <el-table-column label="Reason" prop="reason"></el-table-column>

      <el-table-column align="right">
        <!-- <template slot="header">
          <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
        </template>-->
        <template slot-scope="scope">
          <el-button size="mini" @click="agree(scope.row)">同意</el-button>
          <el-button size="mini" type="danger" @click="refuse(scope.row)">拒绝</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-table
      class="admin-table"
      :data="userTableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%"
    >
      <el-table-column label="Id" prop="id"></el-table-column>
      <el-table-column label="Email" prop="email"></el-table-column>
      <el-table-column label="Role" prop="role"></el-table-column>
      <!-- <el-table-column align="right">
        <template slot="header">
          <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
        </template>
        <template>
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">同意</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">拒绝</el-button>
        </template>
      </el-table-column>-->
    </el-table>
    <el-table
      class="attack-table"
      :data="attackTableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%"
    >
      <el-table-column label="Id" prop="id"></el-table-column>
      <el-table-column label="Atk-country" prop="atk"></el-table-column>
      <el-table-column label="Suf-country" prop="suf"></el-table-column>
      <el-table-column label="Time" prop="time"></el-table-column>
      <el-table-column label="Means" prop="means"></el-table-column>

      <!-- <el-table-column align="right">
        <template slot="header">
          <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
        </template>
        <template>
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">同意</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">拒绝</el-button>
        </template>
      </el-table-column>-->
    </el-table>
  </div>
</template>
<script>
import UserService from '../services/UserService'
import AttackService from '../services/AttackService'
import RoleApplyService from '../services/RoleApplyService'

export default {
  data() {
    return {
      user: 'Admin',
      email: '1111111111@qq.com',
      role: 'admin',
      ip: '192.168.0.126',
      applyTableData: [],
      userTableData: [],
      attackTableData: [],
      search: ''
    }
  },
  mounted: function() {
    this.getUserAll()
    this.getAttackAll()
    this.getApplyAll()
    this.email = this.$route.params.email
    this.role = this.$route.params.role

    console.log('hi', this.role)
    console.log('hii', this.email)
    console.log('hii', this.ip)

    // this.getIp()
  },
  components: {},
  methods: {
    agree(Email) {
      console.log('5555555555555', Email.email)
      UserService.update({
        email: Email.email,
        role: 'professional-user'
      })
      alert('权限更新成功')
      // RoleApplyService.delete(Email.id)
      console.log('22222222222222222222222')
    },
    refuse(row) {
      RoleApplyService.delete(row.id)
    },

    async getApplyAll() {
      try {
        const response = await RoleApplyService.getApplyAll()
        console.log('applyyyyyyyyyyyyyyyy', response.apply)
        for (var i = 0; i < response.apply.length; i++) {
          this.applyTableData.push(response.apply[i])
        }
      } catch (error) {}
    },
    async getUserAll() {
      try {
        const response = await UserService.getUserAll()
        console.log(response, response.user.length)
        for (var i = 0; i < response.user.length; i++) {
          this.userTableData.push(response.user[i])
        }
      } catch (error) {}
    },
    async getAttackAll() {
      try {
        const response = await AttackService.getAttackAll()
        console.log(response, response.attack.rows[1].atk.country)
        for (var i = 0; i < response.attack.rows.length; i++) {
          var temp = {
            id: response.attack.rows[i].id,
            atk: response.attack.rows[i].atk.country,
            suf: response.attack.rows[i].suf.country,
            time: response.attack.rows[i].time,
            means: response.attack.rows[i].means
          }
          this.attackTableData.push(temp)
        }
      } catch (error) {}
    }
  }
}
</script>
<style>
.admin {
  border: 1px solid rgb(12, 53, 126);
  background-color: rgb(1, 28, 75);
  background-image: url('../assets/map-bg.jpg');
  position: relative;
  width: 100%;
  height: 100vh;
}
.admin-login {
  height: 60px;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: rgba(7, 10, 10, 0.3);
  z-index: 102;
  line-height: 60px;
}

.admin-login-user {
  width: 180px;
  color: rgba(255, 255, 255, 0.685);

  float: right;
}

.el-icon-user {
  color: rgba(255, 255, 255, 0.651);
  position: absolute;
  float: right;
  right: 190px;
  top: 50%;
  transform: translate(0, -50%);
  background-color: rgb(11, 51, 94, 0.8);
  width: 30px;
  height: 30px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.el-dropdown-link {
  cursor: pointer;
  color: #ffffff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.el-dropdown-menu__item {
  margin-left: 20px;
  margin-right: 20px;
}
.el-table {
  background: rgb(51, 28, 28);
}
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
/* .admin-table {
  top: 20%;
  background: rgb(2, 32, 59);
  transform: translate(0, -50%);
} */
.el-table th,
.el-table tr {
  background-color: rgba(102, 30, 30, 0.2);
}
.el-table th,
.el-table tr {
  background-color: rgba(102, 30, 30, 0.2);
}
.el-table__row :hover {
  color: rgb(16, 3, 51);
}
.el-table {
  color: rgb(177, 100, 100);
  margin-top: 80px;
  background: rgb(2, 32, 59);
}

.attack-table {
  top: 0%;
}
</style>

<template>
  <div class="login-container">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label-width="0">
        <el-input
          v-model="form.username"
          prefix-icon="el-icon-user"
          placeholder="请输入用户名"
        ></el-input>
      </el-form-item>
      <el-form-item label-width="0">
        <el-input
          v-model="form.password"
          prefix-icon="el-icon-key"
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>
      <el-form-item label-width="0">
        <el-button type="primary" @click="onSubmit">登录</el-button>
        <!-- <el-button>注册</el-button> -->
      </el-form-item>
    </el-form>
    <vue-particles
      color="#dedede"
      :particleOpacity="0.5"
      :particlesNumber="60"
      shapeType="circle"
      :particleSize="4"
      linesColor="#dedede"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="repulse"
    ></vue-particles>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit() {
      localStorage.setItem('APP_TOKEN', '123456')
      this.$router.push({ path: '/home' })
    }
  }
}
</script>

<style lang="scss" scoped>
.login-container {
  height: 100%;
  background: url('../../assets/images/sky.jpg') no-repeat center;
  background-size: cover;
  overflow: hidden;
  .el-form {
    box-sizing: border-box;
    position: fixed;
    right: 250px;
    top: 50%;
    padding: 55px 50px;
    margin-top: -200px;
    width: 450px;
    height: auto;
    background-color: rgba(85, 85, 85, 0.4);
    border-radius: 10px;
    .el-form-item {
      &:last-child {
        margin: 48px 0 0 0;
      }
    }
  }
}
</style>

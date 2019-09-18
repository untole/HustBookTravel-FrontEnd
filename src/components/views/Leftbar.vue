<template>
  <el-col :span="3" class="col">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      
      <el-menu-item index="1">
        <template slot="title">
          <i class="el-icon-notebook-2"></i>
          <a href="">书单</a>
        </template>
      </el-menu-item>  

      <el-submenu index="2" >
          <template slot="title">
          <i class="el-icon-edit"></i>
          <span>评论区</span>
        </template>
        
        <el-menu-item index="2-1" class="item-hover">
            <a href="">评论区</a>
        </el-menu-item>
        <el-menu-item index="2-2" class="item-hover">
            <a href="">我的评论</a>
        </el-menu-item>
      </el-submenu>

      <el-menu-item index="3" >
        <template slot="title">
          <i class="el-icon-s-promotion"></i>
          <a href="">意见反馈</a> 
        </template>
      </el-menu-item>

    </el-menu>
  </el-col>
</template>

<script>
  export default {
    name:'Leftbar'
  }
</script>

<style>
    .col{
        margin: 0;
        padding: 0;
        position: fixed;
        display: left;
        border-right: 1px solid rgba(0, 0,0, 0.2); 
        height:100%
    }

    a, span{
        font-size: 16px;
        color: rgb(138, 148, 153);

    }
    a:hover,span:hover{
        /* color:rgb(88, 83, 83); */
        color: rgb(69, 160, 206);
    }

    .item-hover:before{
        content: "";
        position: absolute;
        width: 6px;
        height:100%;
        /* background: #3787c9; */
        background:  rgb(85, 161, 199);
        left:0;
        top:0;
        transition:0.4s;
        opacity: 0;
    }
    .item-hover:hover::before{
        opacity: 1;
    }

</style>
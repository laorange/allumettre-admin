<script setup lang="ts">

import {useStore} from "../../../store/counter";
import urls from "../../../utils/urls";

const store = useStore()

const redirect = (url: string) => {
  store.coursePlanAdmin.clickCourseInfoDialog.whetherShow = false
  window.open(url)
}
</script>

<template>
  <el-drawer
      v-model="store.coursePlanAdmin.clickCourseInfoDialog.whetherShow"
      :title="store.coursePlanAdmin.clickCourseInfoDialog.courseInfo?.ch_name ?? '暂无课程信息'"
      size="30%"
  >
    <div id="ClickCourseInfoDialogBody">
      <el-button type="primary"
                 @click="redirect(urls.admin.changeCourseInfo(store.coursePlanAdmin.clickCourseInfoDialog.courseInfo?.info_id))">
        编辑课程信息
      </el-button>

      <el-button type="primary"
                 @click="redirect(urls.admin.addCoursePlan(store.coursePlanAdmin.clickCourseInfoDialog.courseInfo?.info_id, 'Course'))">
        新增理论课(Course)
      </el-button>

      <el-button type="primary"
                 @click="redirect(urls.admin.addCoursePlan(store.coursePlanAdmin.clickCourseInfoDialog.courseInfo?.info_id, 'TD'))">
        新增习题课(TD)
      </el-button>

      <el-button type="primary"
                 @click="redirect(urls.admin.addCoursePlan(store.coursePlanAdmin.clickCourseInfoDialog.courseInfo?.info_id, 'TP'))">
        新增实验课(TP)
      </el-button>

      <el-button type="primary"
                 @click="redirect(urls.admin.addCoursePlan(store.coursePlanAdmin.clickCourseInfoDialog.courseInfo?.info_id, 'Exam'))">
        新增考试安排(Exam)
      </el-button>
    </div>

    <template #footer>
      <el-button @click="store.coursePlanAdmin.clickCourseInfoDialog.whetherShow = false">取消</el-button>
    </template>
  </el-drawer>
</template>

<style>
#ClickCourseInfoDialogBody {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

#ClickCourseInfoDialogBody > * {
  margin-top: 10px;
  margin-bottom: 10px;
}

#ClickCourseInfoDialogBody .el-button + .el-button {
  margin-left: 0;
}
</style>
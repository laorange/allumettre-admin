<script setup lang="ts">
import {useApiToolkit, useStore} from "../../../store/counter";
import {watch} from "vue";

import GroupSelector from "../../GroupSelector.vue";


const apiToolkit = useApiToolkit();
const store = useStore();

const multiple = {multiple: true}

watch(() => store.selectedSemesters, (): void => {
  store.updatePlanOptions()
}, {deep: true})

</script>

<template>

  <el-drawer
      v-model="store.courseAdmin.whetherShowSelectPlanDialog"
      title="请选择教学计划"
      size="400px"
      direction="ttb"
      :append-to-body="true"
  >
    <div class="SelectPlanDialog">
      <group-selector></group-selector>

      <div class="PlanPartSelectPlanDialog">
        <el-cascader-panel
            v-model="store.courseAdmin.rawSelectedPlans"
            :show-all-levels="true"
            :options="store.courseAdmin.planOptions"
            :props="multiple"
            clearable/>
      </div>
    </div>

    <template #footer>
      <el-button @click="store.courseAdmin.whetherShowSelectPlanDialog = false" type="success">完成</el-button>
      <el-button @click="store.courseAdmin.rawSelectedPlans = []" type="default"
                 :disabled="store.courseAdmin.rawSelectedPlans.length===0">
        取消选中
      </el-button>
    </template>
  </el-drawer>

</template>

<style>
.PlanPartSelectPlanDialog {
  display: flex;
  justify-content: center;
}

.SelectPlanDialog {
  display: flex;
  justify-content: space-around;
}
</style>
<script setup lang="ts">
import CoursePlanTable from "./CoursePlanTable.vue";
import {useApiToolkit} from "../../store/counter";
import GroupSelector from "../GroupSelector.vue";

import ClickCourseInfoDialog from "./Dialogs/ClickCourseInfoDialog.vue";
import ClickCoursePlanDialog from "./Dialogs/ClickCoursePlanDialog.vue";
import ClickWeeklyHoursDialog from "./Dialogs/ClickWeeklyHoursDialog.vue";


const apiToolkit = useApiToolkit();

</script>

<template>
  <h1>{{ apiToolkit.semesterConfig.first()?.current_period_display ?? "本学期" }}</h1>
  <h2>教学计划</h2>
  <div>
    <h4 id="descriptionBeforeGroupSelector">选择: 年级 & 分组</h4>
    <group-selector></group-selector>
  </div>
  <course-plan-table></course-plan-table>

  <!-- region Dialogs -->
  <click-course-info-dialog></click-course-info-dialog>
  <click-course-plan-dialog></click-course-plan-dialog>
  <click-weekly-hours-dialog></click-weekly-hours-dialog>
  <!-- endregion -->
</template>

<style scoped>
#descriptionBeforeGroupSelector {
  margin-bottom: 5px;
}
</style>
<script setup lang="ts">
import dayjs from "dayjs";

import {computed} from "vue";
import {useApiToolkit, useStore} from "../../../store/counter";
import {Course, WhatDay, WhichLesson} from "../../../types/api";
import {getIsoWeekDay, getWeeksBetweenTwoDayFrom0} from "../../../utils/dateUtils";
import CourseCard from "../../CourseCard.vue";


const store = useStore();
const apiToolkit = useApiToolkit()

const week = computed<number>(() => store.coursePlanAdmin.clickWeeklyHoursDialog.week)

function filterCourse(whatDay: WhatDay | number, whichLesson: WhichLesson | number): Course[] {
  return (store.coursePlanAdmin.clickWeeklyHoursDialog.planContainer?.courses ?? []).filter(
      (course: Course) => {
        return getIsoWeekDay(dayjs(course.date)) === whatDay
            && whichLesson === course.which_lesson
            && getWeeksBetweenTwoDayFrom0(dayjs(course.date), dayjs(apiToolkit.semesterConfig.first()?.week1_monday_date)) + 1 === week.value
      })
}

</script>

<template>
  <el-drawer v-model="store.coursePlanAdmin.clickWeeklyHoursDialog.whetherShow"
             :title="`第 ${store.coursePlanAdmin.clickWeeklyHoursDialog.week} 周`"
             :fullscreen="false" size="750px">

    <div class="dialogBody">
      <div class="TimeBlock">
        <div class="TimeBlockHead">星期一</div>
        <div class="TimeBlockHead">星期二</div>
        <div class="TimeBlockHead">星期三</div>
        <div class="TimeBlockHead">星期四</div>
        <div class="TimeBlockHead">星期五</div>
        <div class="TimeBlockHead">星期六</div>
        <div class="TimeBlockHead">星期日</div>

        <template v-for="whichLesson in 5" :key="whichLesson">
          <template v-for="whatDay in 7" :key="whatDay">
            <div class="TimeBlockItem">
              <template v-for="course in filterCourse(whatDay, whichLesson)" :key="course.course_id">
                <course-card :course="course"></course-card>
              </template>
            </div>
          </template>
        </template>
      </div>
    </div>
  </el-drawer>
</template>

<style scoped>
.TimeBlock {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  color: black;
  font-size: xx-small;
}

.TimeBlockHead, .TimeBlockItem {
  border: black 1px solid;
  flex: 0 0 13%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  overflow: auto;
}

.TimeBlockItem {
  height: 150px;
  /*cursor: pointer;*/
  /*user-select: none;*/
}

.CourseCard {
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
}

.TimeBlockItem {
  color: black;
}

</style>
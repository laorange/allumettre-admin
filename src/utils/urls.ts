import {methodChoice} from "../types/api";

export let SAME_SITE_AS_DJANGO = true;

function decorateUrl(relativeUrl: string): string {
    if (SAME_SITE_AS_DJANGO) {
        return relativeUrl
        // return "https://siae.top" + relativeUrl
    } else {
        return "https://siae.top" + relativeUrl
    }
}

const urls = {
    api: {
        classroom: decorateUrl("/course/api/Classroom/"),
        course: decorateUrl("/course/api/Course/"),
        courseChangeLog: decorateUrl("/course/api/CourseChangeLog/"),
        courseInfo: decorateUrl("/course/api/CourseInfo/"),
        coursePlan: decorateUrl("/course/api/CoursePlan/"),
        courseType: decorateUrl("/course/api/CourseType/"),
        group: decorateUrl("/course/api/Group/"),
        notice: decorateUrl("/course/api/Notice/"),
        semesterConfig: decorateUrl("/course/api/SemesterConfig/"),
        teacher: decorateUrl("/course/api/Teacher/"),

        courseForPostAdd: decorateUrl(`/course/api/CourseForPost/`),
        courseForPostDelete: (courseId: number): string => decorateUrl(`/course/api/CourseForPost/${courseId}/`)
    },
    docs: "http://docs.siae.top",
    admin: {
        changeCourseInfo(infoId?: number): string {
            if (infoId === undefined) {
                return decorateUrl(`/admin/course/courseinfo/`)
            }
            return decorateUrl(`/admin/course/courseinfo/${infoId}/change/`)
        },
        changeCoursePlan(planId?: number): string {
            if (planId === undefined) {
                return decorateUrl(`/admin/course/courseplan/`)
            }
            return decorateUrl(`/admin/course/courseplan/${planId}/change/`)
        },
        addCoursePlan(infoId?: number, method?: methodChoice): string {
            return decorateUrl(`/admin/course/courseplan/add/?info=${infoId}&method=${method}`)
        },
        changeCourse(courseId: number): string {
            if (courseId === undefined) {
                return decorateUrl(`/admin/course/course/`);
            }
            return decorateUrl(`/admin/course/course/${courseId}/change/`);
        },
    },
}

export default urls
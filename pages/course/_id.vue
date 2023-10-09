<!-- pages/course/_id.vue -->
<template>
    <div>
      <Header :studentName="studentName" />
      <CourseDetails :course="selectedCourse" />
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        studentName: 'John Doe',
        selectedCourse: null,
      };
    },
    async asyncData({ params }) {
      // Fetch course details based on params.id
      const courseId = parseInt(params.id);
      const course = await fetchCourseDetails(courseId);
  
      return {
        selectedCourse: course,
      };
    },
    methods: {
      async fetchCourseDetails(courseId) {
        // Implement course details fetching logic here
      },
    },
  };
  </script>
  
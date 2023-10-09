<!-- pages/index.vue -->
<template>
  <div>
    <Header :studentName="studentName" />
    <CourseList :courses="courses" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      studentName: 'Alli',
      courses: [
        { id: 1, title: 'Fundamentals of Programming', description: 'This is a Fundamentals of Programming course.' },
        { id: 2, title: 'Web Development', description: 'This is a Web Development course.' },
        { id: 3, title: 'Calculus', description: 'This is a Calculus course.' },
        { id: 4, title: 'Understanding the Self', description: 'This is a Understanding the Self course.' },
        { id: 5, title: 'Purposive Communication', description: 'This is a Purposive Communication course.' },
      ],
    };
  },
};
</script>

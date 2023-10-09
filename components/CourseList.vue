<!-- components/CourseList.vue -->
<template>
  <div style="padding-top: 100px;">
  <div class="container mx-auto p-4">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <!-- Left Column: My Courses -->
      <div class="mb-4">
        <h2 class="text-xl font-semibold mb-4">My Courses</h2>
        <div class="bg-white p-2 rounded-lg shadow">
          <ul>
            <li v-for="course in courses" :key="course.id" class="mb-2 flex justify-between items-center ">
              <div>
                <h3 class="text-lg font-semibold text-maroon">{{ course.title }}</h3>
                <p>{{ course.description }}</p>
              </div>
              <div class="relative group">
                <button @click="toggleMenu(course.id)" class="text-gray-600 group-hover:text-black">
                  <!-- Kebab menu icon (three dots) -->
                  <span class="block h-2 w-2 border-b-2 border-gray-600 border-solid"></span>
                  <span class="block h-2 w-2 border-b-2 border-gray-600 border-solid"></span>
                  <span class="block h-2 w-2 border-b-2 border-gray-600 border-solid"></span>
                </button>
                <!-- Menu dropdown -->
                <div v-if="menuOpen === course.id" class="absolute right-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-md py-2 hidden group-hover:block">
                  <a href="#" class="block px-4 py-2 hover:bg-gray-200">Edit</a>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-200">Delete</a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

     <!-- See Your Teacher  Section-->

     <div class="mb-4">
<h2 class="text-xl font-semibold mb-4">See Your Teacher</h2>
<div class="bg-white p-2 rounded-lg shadow grid grid-cols-3 gap-4">
  <!-- Use a flex container for each teacher -->
  <div v-for="teacher in teachers" :key="teacher.id" class="flex flex-col items-center">
    <!-- Avatar picture -->
    <img :src="teacher.avatar" alt="Teacher Avatar" class="w-12 h-12 rounded-full mb-2">
    <!-- Professor name -->
    <h3 class="text-lg font-semibold">{{ teacher.name }}</h3>
    <!-- Room number -->
    <p class="text-gray-500">Room {{ teacher.room }}</p>
    <!-- Lecture hours -->
    <p>{{ teacher.lectureCount }}hrs lecture</p>
  </div>
</div>
</div>
</div>


  <!-- Schedule Section -->
<div class="mb-4">
<div class="container mx-auto p-4">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">

    <div class="bg-white p-2 rounded-lg shadow mt-4">
      <!-- Schedule Title and Date -->
      <div class="flex items-center justify-between mb-2">
          <h2 class="text-xl font-semibold mb-4">Schedule</h2>
        <p class="text-maroon">Oct. 05, 2023</p>
      </div>

      <!-- Schedule Entries -->
      <div class="space-y-4">
        <!-- Example 1 -->
        <div class="flex items-center">
          <!-- Avatar -->
          <div class="w-10 h-10 rounded-full overflow-hidden">
            <img src="https://i.postimg.cc/bwC762kS/teacher-1.png'" alt="Teacher Avatar" class="w-full h-full object-cover">
          </div>
          <!-- Professor's Name and Details -->
          <div class="ml-4">
            <p class="text-lg font-semibold text-maroon">Professor Allison</p>
            <p class="text-sm">Master's in Language</p>
          </div>
          <!-- Time -->
          <div class="ml-4"> <!-- Adjust the ml-4 (or other value) for the time -->
            <p :class="{ 'flex-shrink-0': true }" class="text-gray-600 ml-10">10:00 am - 12:00 pm</p>
          </div>
          <!-- Date -->
          <div class="ml-auto">
            <p class="font-semibold text-black">12 December</p>
            <p class="text-grey">Monday</p>
          </div>
        </div>
        <!-- Divider -->
        <div class="border-t-2 my-4"></div>

        <!-- Example 2 -->
        <div class="space-y-4">
        <!-- Example 2 -->
        <div class="flex items-center">
          <!-- Avatar -->
          <div class="w-10 h-10 rounded-full overflow-hidden">
      <img src="https://i.postimg.cc/023jLrpF/man.png" alt="Teacher Avatar" class="w-full h-full object-cover">
    </div>
          <!-- Professor's Name and Details -->
          <div class="ml-4">
            <p class="text-lg font-semibold text-maroon">Professor John</p>
            <p class="text-sm">Master's in Mathematics</p>
          </div>
          <!-- Time -->
          <div class="ml-4"> <!-- Adjust the ml-4 (or other value) for the time -->
            <p :class="{ 'flex-shrink-0': true }" class="text-gray-600 ml-8">2:00 pm - 4:00 pm</p>
          </div>
          <!-- Date -->
          <div class="ml-auto">
            <p class="font-semibold text-black">13 December</p>
            <p class="text-grey">Tuesday</p>
          </div>
        </div>
        </div>
        
        <!-- Example 3 -->
        <!-- Divider -->
        <div class="border-t-2 my-4"></div>

        <!-- Example 3 -->
        <div class="space-y-4">
        <!-- Example 3 -->
        <div class="flex items-center">
          <!-- Avatar -->
          <div class="w-10 h-10 rounded-full overflow-hidden">
            <img src="https://i.postimg.cc/fTf44Pnd/teacher-2.png" alt="Teacher Avatar" class="w-full h-full object-cover">
          </div>
          <!-- Professor's Name and Details -->
          <div class="ml-4">
            <p class="text-lg font-semibold text-maroon">Professor Doe</p>
            <p class="text-sm">Master's in Philosophy</p>
          </div>
          <!-- Time -->
          <div class="ml-4"> <!-- Adjust the ml-4 (or other value) for the time -->
            <p :class="{ 'flex-shrink-0': true }" class="text-gray-600 ml-10">8:00 am - 10:00 pm</p>
          </div>
          <!-- Date -->
          <div class="ml-auto">
            <p class="font-semibold text-black">15 December</p>
            <p class="text-grey">Friday</p>
          </div>
        </div>
        </div>
         <!-- Example 4 -->
        <!-- Divider -->
        <div class="border-t-2 my-4"></div>
        <div class="space-y-4">
        <div class="flex items-center">
          <!-- Avatar -->
          <div class="w-10 h-10 rounded-full overflow-hidden">
            <img src="https://i.postimg.cc/gk3VgBS6/eskimo.png" alt="Teacher Gen" class="w-full h-full object-cover">
          </div>
          <!-- Professor's Name and Details -->
          <div class="ml-4">
            <p class="text-lg font-semibold text-maroon">Professor Gen</p>
            <p class="text-sm">Master's in Science</p>
          </div>
          <!-- Time -->
          <div class="ml-4"> 
            <p :class="{ 'flex-shrink-0': true }" class="text-gray-600 ml-10"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3:00 am - 6:00 pm</p>
          </div>
          <!-- Date -->
          <div class="ml-auto">
            <p class="font-semibold text-black">07 December</p>
            <p class="text-grey">Thursday</p>
          </div>
        </div>
        </div>
      </div>
    </div>

    
<!-- Right Column: Task To Do -->
<div class="mb-4">
<h2 class="text-xl font-semibold mb-4">Task To Do</h2>
<div class="bg-white p-4 rounded-lg shadow mt-4">
  <div class="space-y-4">
    <!-- Task Example 1 -->
    <div class="flex items-center">
      <!-- Task Title -->
      <div class="w-10 h-10 aspect-w-1 aspect-h-1 overflow-hidden">
            <img src="https://i.postimg.cc/Z5Ky60rM/coding-1.png" alt="icon" class="w-full h-full object-cover">
          </div>
      <div class=" ml-4">
      <p class="text-lg font-semibold text-maroon">Create a Login Page using HTML</p>
      <p class="text-sm">Web Development</p>
  </div>
      <!-- Task Due Date -->
      <p class="ml-auto text-grey">Due: Oct. 23, 2023</p>
    </div>
    <!-- Divider -->
    <div class="border-t-2 my-4"></div>

    <!-- Task Example 2 -->
    <div class="flex items-center">
      <!-- Task Title -->
      <div class="w-10 h-10 aspect-w-1 aspect-h-1 overflow-hidden">
            <img src="https://i.postimg.cc/4NhXqGXx/calculator.png" alt="icon" class="w-full h-full object-cover">
          </div>
      <div class=" ml-4">
      <p class="text-lg font-semibold text-maroon">Find the derivative</p>
      <p class="text-sm">Calculus</p>
  </div>
      <!-- Task Due Date -->
      <p class="ml-auto text-grey">Due: Oct. 18, 2023</p>
    </div>
    <!-- Divider -->
    <div class="border-t-2 my-4"></div>

    <!-- Task Example 3 -->
    <div class="flex items-center">
       <!-- Task Title -->
       <div class="w-10 h-10 aspect-w-1 aspect-h-1 overflow-hidden">
            <img src="https://i.postimg.cc/FKKP79Wy/book.png" alt="icon" class="w-full h-full object-cover">
          </div>
       <div class=" ml-4">
      <p class="text-lg font-semibold text-maroon">Read Chapter 3</p>
      <p class="text-sm">Purposive Communication</p>
  </div>
      <!-- Task Due Date -->
      <p class="ml-auto text-grey">Due: Oct. 20, 2023</p>
    </div>
    <!-- Divider -->
    <div class="border-t-2 my-4"></div>

    <!-- Task Example 4 -->
    <div class="flex items-center">
       <!-- Task Title -->
       <div class="w-10 h-10 aspect-w-1 aspect-h-1 overflow-hidden">
            <img src="https://i.postimg.cc/X7XfbYYd/identity.png" alt="icon" class="w-full h-full object-cover">
          </div>
       <div class=" ml-4">
      <p class="text-lg font-semibold text-maroon">Identity and Beliefs Analysis</p>
      <p class="text-sm">Understanding the Self</p>
  </div>
      <!-- Task Due Date -->
      <p class="ml-auto text-grey">Due: Oct. 29, 2023</p>
    </div>

  </div>
</div>
</div>

<!-- End Section for To Do Task -->
  </div>
</div>
</div>
</div>
</div>


</template>

<script>
export default {

  
  data() {
    return {
      courses: [
      { id: 1, title: 'Fundamentals of Programming', description: 'This is a Fundamentals of Programming course.' },
      { id: 2, title: 'Web Development', description: 'This is a Web Development course.' },
      { id: 3, title: 'Calculus', description: 'This is a Calculus course.' },
      { id: 4, title: 'Understanding the Self', description: 'This is a Understanding the Self course.' },
      { id: 5, title: 'Purposive Communication', description: 'This is a Purposive Communication course.' },
      ],
      
      teachers: [
      { id: 1, name: 'Prof. Allison', room: 10, lectureCount: 2, avatar: 'https://i.postimg.cc/bwC762kS/teacher-1.png' },
      { id: 2, name: 'Prof. John', room: 8, lectureCount: 2, avatar: 'https://i.postimg.cc/023jLrpF/man.png' },
      { id: 3, name: 'Prof. Doe', room: 5, lectureCount: 3, avatar: 'https://i.postimg.cc/fTf44Pnd/teacher-2.png' },
      { id: 4, name: 'Prof. Chase', room: 3, lectureCount: 3, avatar: 'https://i.postimg.cc/9MgMBf1W/student.png' },
      { id: 5, name: 'Prof. Shalom', room: 11,lectureCount: 3, avatar: 'https://i.postimg.cc/Vkm7jshr/teacher.png' },
      { id: 6, name: 'Prof. Gen', room: 6,lectureCount: 3, avatar: 'https://i.postimg.cc/gk3VgBS6/eskimo.png' },
    ],
    menuOpen: null, 
  };
  },
  methods: {
    toggleMenu(courseId) {
      if (this.menuOpen === courseId) {
        this.menuOpen = null; 
      } else {
        this.menuOpen = courseId; 
      }
      
     
  
    },
    
  },
};


</script>

<style scoped>


</style>

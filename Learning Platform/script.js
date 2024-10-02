document.addEventListener('DOMContentLoaded', function() {
    // Course management
    const courseList = document.getElementById('courseList');
    if (courseList) {
        const courses = [
            { name: 'Python Course', link: 'python.html' },
            { name: 'Java Course', link: 'java.html' },
            { name: 'Math Course', link: 'math.html' },
            { name: 'DSA Course', link: 'dsa.html' },
            { name: 'JS Course', link: 'js.html' },
            { name: 'C Course', link: 'c.html' }
        ];

        courses.forEach(course => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.innerText = course.name;
            a.href = course.link;
            li.appendChild(a);
            courseList.appendChild(li);
        });
    }
});

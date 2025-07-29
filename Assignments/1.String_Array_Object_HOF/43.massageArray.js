function massageArray(exampleInputArray, typeOfCourse, CourseDurationDirectory, Category) {
    return exampleInputArray.map(course => {
        // Map courseDuration
        const courseDuration = CourseDurationDirectory[course.courseDuration] || "";

        // Map Category
        const category = Category[course.Category] || "";

        // Map type
        const type = (typeOfCourse.find(t => t.id === course.type) || {}).name || "";

        // Map techTools and techdetails, filter out empty or null entries
        const techTools = Object.keys(course.techTools)
            .filter(key => course.techTools[key] && course.techdetails[key])
            .map(key => ({
                language: course.techTools[key],
                details: course.techdetails[key]
            }));

        // Return the transformed object
        return {
            courseName: course.courseName,
            courseDuration,
            Category: category,
            type,
            techTools
        };
    });
}

// Input data
const typeOfCourse = [
    { id: 1, name: "Developer" },
    { id: 2, name: "Tester" }
];

const CourseDurationDirectory = {
    1: "6 month",
    2: "1 year",
    3: "2 year"
};

const Category = {
    3: "Fullstack",
    4: "manual tester",
    5: "automation tester"
};

const exampleInputArray = [
    {
        courseName: "masai frontend web26",
        courseDuration: 2,
        Category: 3,
        type: 1,
        techTools: {
            1: "HTML",
            2: "CSS",
            3: "javaScript",
            4: "React",
            5: "Redux",
            6: "Node.js",
            7: "Express",
            8: "MongoDB",
            9: "Bootstrap",
        },
        techdetails: {
            1: "HTML is the standard markup language for Web pages.",
            2: "CSS is the language we use to style an HTML document.",
            3: "JavaScript is the programming language of the Web. JavaScript is easy to learn.",
            4: "React is a JavaScript library for building user interfaces.",
            5: "Redux is an open-source JavaScript library for managing and centralizing application state.",
            6: "Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
            7: "Express is a minimal and flexible Node.js web application framework.",
            8: "MongoDB is a document database. It stores data in a type of JSON format called BSON.",
            9: "Bootstrap utilizes Sass for a modular and customizable architecture.",
        }
    },
    {
        courseName: "foundation batch",
        courseDuration: 2,
        Category: 4,
        type: 2,
        techTools: {
            1: "aptitude",
            2: "GitHub",
            3: "C",
        },
        techdetails: {
            1: "1. a natural ability or skill: 2. a natural ability or skill:",
            2: "The open source community is the heart of GitHub and fundamental to how we build software today.",
            3: "C is a general-purpose programming language, developed in 1972",
        }
    },
    {
        courseName: "Java batch",
        courseDuration: 1,
        Category: 5,
        type: 1,
        techTools: {
            1: "ETL",
            2: "Perl",
            3: "C#",
            4: "Python",
            5: "PHP",
        },
        techdetails: {
            1: "ETL is used to replicate and auto sync data from various source databases to a cloud data warehouse",
            2: "Perl is a high-level scripting language",
            3: "C# was originally designed to be easy to learn and use",
            4: "Python is one of the most beginner-friendly programming languages out there.",
            5: "PHP is a scripting language running on the server side",
        }
    }
];

// Calling the function
const eo1 = massageArray(exampleInputArray, typeOfCourse, CourseDurationDirectory, Category);
console.log(JSON.stringify(eo1, null, 2));

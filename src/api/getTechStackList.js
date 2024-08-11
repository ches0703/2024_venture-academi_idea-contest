const data = {
  'front-end' : [
    {
      "id": "JavaScript",
      "label": "JavaScript",
      "value": 345,
    },
    {
      "id": "Redux",
      "label": "Redux",
      "value": 115,
    },
    {
      "id": "Vue.js",
      "label": "Vue.js",
      "value": 192,
    },
    {
      "id": "React",
      "label": "React",
      "value": 700,
    },
    {
      "id": "Jquery",
      "label": "Jquery",
      "value": 78,
    },
    {
      "id": "TypeScript",
      "label": "TypeScript",
      "value": 312,
    },
    {
      "id": "HTML",
      "label": "HTML",
      "value": 222,
    },
    {
      "id": "CSS",
      "label": "CSS",
      "value": 188,
    },
    {
      "id": "Next.js",
      "label": "Next.js",
      "value": 313,
    }
  ],

  'back-end': [
    {
      "id": "Redis",
      "label": "Redis",
      "value": 512,
    },
    
    {
      "id": "Express",
      "label": "Express",
      "value": 178,
    },
    {
      "id": "Java",
      "label": "Java",
      "value": 432,
    },
    {
      "id": "Spring Boot",
      "label": "Spring Boot",
      "value": 487,
    },
    {
      "id": "Django",
      "label": "Django",
      "value": 82,
    },
    {
      "id": "MySQL",
      "label": "MySQL",
      "value": 387,
    },
    {
      "id": "AWS",
      "label": "AWS",
      "value": 612,
    },
    {
      "id": "Oracle",
      "label": "Oracle",
      "value": 234,
    },
    
    {
      "id": "Spring",
      "label": "Spring",
      "value": 158,
    },
    {
      "id": "Node.js",
      "label": "Node.js",
      "value": 212,
    },
    
  ]

}

const getTechStackList = (job) => {
  return data[job]
}

export default getTechStackList
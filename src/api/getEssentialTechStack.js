const data = {
  'front-end' : [
    {
      "id": "React",
      "label": "React",
      "value": 700,
    },
    {
      "id": "Vue.js",
      "label": "Vue.js",
      "value": 192,
    },
    {
      "id": "TypeScript",
      "label": "TypeScript",
      "value": 312,
    },
    {
      "id": "JavaScript",
      "label": "JavaScript",
      "value": 345,
    },
    {
      "id": "HTML",
      "label": "JavaScript",
      "value": 488,
    },
    {
      "id": "Next.js",
      "label": "Next.js",
      "value": 313,
    },
    
  ],
  'back-end': [
    {
      "id": "Node.js",
      "label": "Node.js",
      "value": 212,
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
      "id": "MySQL",
      "label": "MySQL",
      "value": 387,
    },
    {
      "id": "Spring Boot",
      "label": "Spring Boot",
      "value": 532,
    },
    {
      "id": "Spring",
      "label": "Spring",
      "value": 158,
    },
    {
      "id": "Redis",
      "label": "Redis",
      "value": 387,
    },
  ]

}



const getEssentialTechStack = (job) => {
  return data[job]
}

export default getEssentialTechStack
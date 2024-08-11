const data = {
  'front-end' : [
    {
      "id": "React",
      "label": "React",
      "value": 700,
    },
    {
      "id": "Vue",
      "label": "Vue",
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
      "id": "ETC...",
      "label": "ETC...",
      "value": 313,
    }
  ]

}



const getEssentialTechStack = (job) => {
  return data[job]
}

export default getEssentialTechStack
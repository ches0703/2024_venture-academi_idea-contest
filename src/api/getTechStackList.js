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
      "id": "Vue",
      "label": "Vue",
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
      "value": 500,
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
      "id": "ETC...",
      "label": "ETC...",
      "value": 313,
    }
  ]

}

const getTechStackList = (job) => {
  return data[job]
}

export default getTechStackList
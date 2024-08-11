const data = {
  'front-end' : [
    {
      "id": "Github",
      "label": "Github",
      "value": 884,
    },
    {
      "id": "Next.js",
      "label": "Next.js",
      "value": 432,
    },
    {
      "id": "MUI",
      "label": "MUI",
      "value": 287,
    },
    {
      "id": "Redux",
      "label": "Redux",
      "value": 557,
    },
    {
      "id": "Webpack",
      "label": "Webpack",
      "value": 187,
    },
    {
      "id": "Jira",
      "label": "Jira",
      "value": 140,
    },
    {
      "id": "AWS",
      "label": "AWS",
      "value": 225,
    },
  ],
  'back-end': [
    {
      "id": "Github",
      "label": "Github",
      "value": 578,
    },
    {
      "id": "Docker",
      "label": "Docker",
      "value": 328,
    },
    {
      "id": "CI/CD",
      "label": "CI/CD",
      "value": 487,
    },
    {
      "id": "Jira",
      "label": "Jira",
      "value": 140,
    },
    {
      "id": "JWT",
      "label": "JWT",
      "value": 283,
    },
  ]

}

const getPreferentialTechStack = (job) => {
  return data[job]
}

export default getPreferentialTechStack
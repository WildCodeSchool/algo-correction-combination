import  { Group, GroupWithSkills, listGroupSkills, getStudentsSkills } from ".."

describe ("simple test", ()=>{
    it("1+1=2", ()=> {
        expect(1+1).toEqual(2)
    })
})

describe("getStudentsSkills", () => {
    it("get skills of students of a group", () => {
        const input: Group = {
            name: "Group 1", students: [
                { name: "Joseph", skills: ['NodeJS', 'ReactJS'], age: 33 },
                { name: "Alice", skills: ['NodeJS', 'MongoDB'], age: 28 },
                { name: "Toto", skills: ['MySQL', 'PHP'], age: 41 },
            ]
        }

        const output: string[] = [
            "MongoDB",
            "MySQL",
            "NodeJS",
            "PHP",
            "ReactJS"
        ];

        expect(getStudentsSkills(input)).toEqual(output);
    })
})

describe("listGroupSkills", () => {
    it("list the skills of each students in the groups", () => {

        const input:{ groups: Group[] } =  {
            groups: [
                {
                    name: "Group 1", students: [
                        { name: "Joseph", skills: ['NodeJS', 'ReactJS'], age: 33 },
                        { name: "Alice", skills: ['NodeJS', 'MongoDB'], age: 28 },
                        { name: "Toto", skills: ['MySQL', 'PHP'], age: 41 },
                    ]
                },
                {
                    name: "Group 3", students: [
                        { name: "Tom", skills: ['ReactJS', 'Typescript'], age: 21 },
                        { name: "Matin", skills: ['HTML', 'Typescript'], age: 22 },
                        { name: "Mathieu", skills: ['ReactJS', 'PHP', 'MySQL'], age: 28 },
                    ]
                },
                {
                    name: "Group 2", students: [
                        { name: "Thibault", skills: ['PHP', 'NodeJS', 'HTML'], age: 25 },
                        { name: "Joseph", skills: ['PHP', 'NodeJS'], age: 28 },
                        { name: "Marine", skills: ['ReactJS'], age: 28 },
                    ]
                }
            ]
        }

        const output : GroupWithSkills[] =  [
            {
                "name": "Group 1",
                "students": [
                    {
                        "name": "Joseph",
                        "skills": [
                            "NodeJS",
                            "ReactJS"
                        ],
                        "age": 33
                    },
                    {
                        "name": "Alice",
                        "skills": [
                            "NodeJS",
                            "MongoDB"
                        ],
                        "age": 28
                    },
                    {
                        "name": "Toto",
                        "skills": [
                            "MySQL",
                            "PHP"
                        ],
                        "age": 41
                    }
                ],
                "skills": [
                    "MongoDB",
                    "MySQL",
                    "NodeJS",
                    "PHP",
                    "ReactJS"
                ]
            },
            {
                "name": "Group 3",
                "students": [
                    {
                        "name": "Tom",
                        "skills": [
                            "ReactJS",
                            "Typescript"
                        ],
                        "age": 21
                    },
                    {
                        "name": "Matin",
                        "skills": [
                            "HTML",
                            "Typescript"
                        ],
                        "age": 22
                    },
                    {
                        "name": "Mathieu",
                        "skills": [
                            "ReactJS",
                            "PHP",
                            "MySQL"
                        ],
                        "age": 28
                    }
                ],
                "skills": [
                    "HTML",
                    "MySQL",
                    "PHP",
                    "ReactJS",
                    "Typescript"
                ]
            },
            {
                "name": "Group 2",
                "students": [
                    {
                        "name": "Thibault",
                        "skills": [
                            "PHP",
                            "NodeJS",
                            "HTML"
                        ],
                        "age": 25
                    },
                    {
                        "name": "Joseph",
                        "skills": [
                            "PHP",
                            "NodeJS"
                        ],
                        "age": 28
                    },
                    {
                        "name": "Marine",
                        "skills": [
                            "ReactJS"
                        ],
                        "age": 28
                    }
                ],
                "skills": [
                    "HTML",
                    "NodeJS",
                    "PHP",
                    "ReactJS"
                ]
            }
        ]

        expect(listGroupSkills(input)).toEqual(output)

    })
})
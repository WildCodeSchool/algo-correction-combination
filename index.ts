export interface Student {
    name: string;
    age: number;
    skills: string[];
}

export interface Group {
    students: Student[];
    name: string;
}

export interface GroupWithSkills extends Group {
    skills: string[];
}

type Skill = string;

export function getStudentsSkills({ students }: Group):Skill[] {
    const allSkills = students.reduce((acc, { skills })=>[...acc ,...skills], []);
    const uniqSkills = [...new Set(allSkills)];
    return uniqSkills.sort();
}

export function listGroupSkills({ groups }: { groups: Group[] }) {
    return groups.map( group => ({...group, skills: getStudentsSkills(group)}) )
}
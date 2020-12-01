const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addProperty = (obj, newProperty, value) => {
  obj[newProperty] = value;
};

addProperty(lesson2, 'turno', 'manhã');

const getKeys = (obj) => Object.keys(obj);

// console.log(getKeys(lesson1));

const getLength = (obj) => getKeys(obj).length;

// console.log(getLength(lesson1));

const getValues = (obj) => Object.values(obj);

// console.log(getValues(lesson1));

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

// console.log(allLessons);

const sumStudents = (obj) => {
  let sum = 0;
  const lessons = Object.keys(obj);
  lessons.forEach((key) => {
    sum += obj[key].numeroEstudantes;
  });
  return sum;
};

// console.log(sumStudents(allLessons));

const getValueByNumber = (obj, keyNumber) => getValues(obj)[keyNumber];

// console.log(getValueByNumber(lesson1, 0));

const verifyPair = (obj, key, value) => obj[key] === value;

// console.log(verifyPair(lesson3, 'turno', 'noite'));

// console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));

// BÔNUS

const countStudentsPerSubject = (obj, subject) => {
  let sum = 0;
  const lessons = Object.keys(obj);
  lessons.forEach((key) => {
    if (obj[key].materia === subject) {
      sum += obj[key].numeroEstudantes;
    }
  });
  return sum;
};

// console.log(countStudentsPerSubject(allLessons, 'Matemática'));

const createReport = (obj, teacher) => {
  const lessons = Object.keys(obj);
  const teachersLessons = lessons.filter((lesson) => obj[lesson].professor === teacher);
  const aulas = teachersLessons.map((lesson) => obj[lesson].materia);
  let estudantes = 0;
  teachersLessons.forEach((lesson) => estudantes += obj[lesson].numeroEstudantes);
  return {
    professor: teacher,
    aulas,
    estudantes,
  };
};

// console.log(createReport(allLessons, 'Maria Clara'));

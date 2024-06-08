export const setStudentsToLocal = (students) => {
  localStorage.setItem('students', JSON.stringify(students));
}



export const getStudentsFromLocal = () => {
  const data = localStorage.getItem('students');
  return data === null ? [] : JSON.parse(data);
}


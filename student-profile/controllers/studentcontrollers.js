const students = [
    { student_id: 1, name: 'Shane Caisip', email: 'shanecaisip@gmail.com', program: 'Information Technology', year_level: 3 },
    { student_id: 2, name: 'Love Pattranite', email: 'lovepattranite@gmail.com', program: 'Tourism', year_level: 4 }
];

exports.getStudentProfile = (req, res) => { 
    if (!req || !res) { 
    console.error("Request or response object is undefined"); 
    return; 
}

    const studentId = parseInt(req.params.id);
    if (isNaN(studentId)) { 
        return res.status(400).json({ message: "Invalid student ID" }); 
    } 
    
    const student = students.find(s => s.student_id === studentId); 
    if (!student) { 
        return res.status(404).json({ message: "Student not found" }); 
    } 

    res.json(student); 
};
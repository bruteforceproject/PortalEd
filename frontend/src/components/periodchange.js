export function period_1StudentsFunction(period_1Students, period1) {
    // Fetch attendance data for each student
    period_1Students.forEach(async (student) => {
        try {
          const attendanceResponse = await fetch('http://localhost:8000/getAttendance', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ studentID: student.studentID, class_id: period1 }),
          });
          const behaviorResponse = await fetch('http://localhost:8000/getBehavior', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ studentID: student.studentID, class_id: period1 }),
          });
          const academicsResponse = await fetch('http://localhost:8000/getAcademics', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ studentID: student.studentID, class_id: period1 }),
          });
          
          async function loadFile(){
            if (attendanceResponse.ok) {
              const attendanceInfo = await attendanceResponse.json();
              student.attendanceData = attendanceInfo.color;
            } else {
              console.error('Error fetching attendance data for student', student.studentID);
            }
            if (behaviorResponse.ok) {
              const attendanceInfo = await behaviorResponse.json();
              student.behaviourColor = attendanceInfo.color;
            } else {
              console.error('Error fetching attendance data for student', student.studentID);
            }
            if (academicsResponse.ok) {
              const attendanceInfo = await academicsResponse.json();
              student.academicsColor = attendanceInfo.color;
            } else {
              console.error('Error fetching attendance data for student', student.studentID);
            }
          }
          async function startProcess(){
            try{
              await loadFile();
              console.log("File Loaded for One")
            }
            catch(error){
              console.log("File Not Loaded Yet")
            }
          }
          startProcess();
          
          
        } catch (error) {
          console.error('Error fetching attendance data:', error);
        }
      });
}


export function period_0StudentsFunction(period_0Students, period0) {
    // Fetch attendance data for each student
    period_0Students.forEach(async (student) => {
        try {
          const attendanceResponse = await fetch('http://localhost:8000/getAttendance', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ studentID: student.studentID, class_id: period0 }),
          });
          const behaviorResponse = await fetch('http://localhost:8000/getBehavior', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ studentID: student.studentID, class_id: period0 }),
          });
          const academicsResponse = await fetch('http://localhost:8000/getAcademics', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ studentID: student.studentID, class_id: period0 }),
          });
          
          async function loadFile(){
            if (attendanceResponse.ok) {
              const attendanceInfo = await attendanceResponse.json();
              student.attendanceData = attendanceInfo.color;
            } else {
              console.error('Error fetching attendance data for student', student.studentID);
            }
            if (behaviorResponse.ok) {
              const attendanceInfo = await behaviorResponse.json();
              student.behaviourColor = attendanceInfo.color;
            } else {
              console.error('Error fetching attendance data for student', student.studentID);
            }
            if (academicsResponse.ok) {
              const attendanceInfo = await academicsResponse.json();
              student.academicsColor = attendanceInfo.color;
            } else {
              console.error('Error fetching attendance data for student', student.studentID);
            }
          }
          async function startProcess(){
            try{
              await loadFile();
              console.log("File Loaded for Zero")
            }
            catch(error){
              console.log("File Not Loaded Yet")
            }
          }
          startProcess();
          
          
        } catch (error) {
          console.error('Error fetching attendance data:', error);
        }
      });
}
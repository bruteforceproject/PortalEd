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
export function period_2StudentsFunction(period_2Students, period2) {
    // Fetch attendance data for each student
    period_2Students.forEach(async (student) => {
        try {
          const attendanceResponse = await fetch('http://localhost:8000/getAttendance', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ studentID: student.studentID, class_id: period2 }),
          });
          const behaviorResponse = await fetch('http://localhost:8000/getBehavior', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ studentID: student.studentID, class_id: period2 }),
          });
          const academicsResponse = await fetch('http://localhost:8000/getAcademics', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ studentID: student.studentID, class_id: period2 }),
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
              console.log("File Loaded for Two")
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
export function period_3StudentsFunction(period_3Students, period3) {
    // Fetch attendance data for each student
    period_3Students.forEach(async (student) => {
        try {
          const attendanceResponse = await fetch('http://localhost:8000/getAttendance', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ studentID: student.studentID, class_id: period3 }),
          });
          const behaviorResponse = await fetch('http://localhost:8000/getBehavior', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ studentID: student.studentID, class_id: period3 }),
          });
          const academicsResponse = await fetch('http://localhost:8000/getAcademics', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ studentID: student.studentID, class_id: period3 }),
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
              console.log("File Loaded for Three")
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
export function period_4StudentsFunction(period_4Students, period4) {
    // Fetch attendance data for each student
    period_4Students.forEach(async (student) => {
        try {
          const attendanceResponse = await fetch('http://localhost:8000/getAttendance', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ studentID: student.studentID, class_id: period4 }),
          });
          const behaviorResponse = await fetch('http://localhost:8000/getBehavior', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ studentID: student.studentID, class_id: period4 }),
          });
          const academicsResponse = await fetch('http://localhost:8000/getAcademics', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ studentID: student.studentID, class_id: period4 }),
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
              console.log("File Loaded for Four")
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
export function period_5StudentsFunction(period_5Students, period5) {
    // Fetch attendance data for each student
    period_5Students.forEach(async (student) => {
        try {
          const attendanceResponse = await fetch('http://localhost:8000/getAttendance', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ studentID: student.studentID, class_id: period5 }),
          });
          const behaviorResponse = await fetch('http://localhost:8000/getBehavior', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ studentID: student.studentID, class_id: period5 }),
          });
          const academicsResponse = await fetch('http://localhost:8000/getAcademics', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ studentID: student.studentID, class_id: period5 }),
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
              console.log("File Loaded for Five")
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
export function period_6StudentsFunction(period_6Students, period6) {
    // Fetch attendance data for each student
    period_6Students.forEach(async (student) => {
        try {
          const attendanceResponse = await fetch('http://localhost:8000/getAttendance', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ studentID: student.studentID, class_id: period6 }),
          });
          const behaviorResponse = await fetch('http://localhost:8000/getBehavior', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ studentID: student.studentID, class_id: period6 }),
          });
          const academicsResponse = await fetch('http://localhost:8000/getAcademics', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ studentID: student.studentID, class_id: period6 }),
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
              console.log("File Loaded for Six")
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
export function period_7StudentsFunction(period_7Students, period7) {
    // Fetch attendance data for each student
    period_7Students.forEach(async (student) => {
        try {
          const attendanceResponse = await fetch('http://localhost:8000/getAttendance', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ studentID: student.studentID, class_id: period7 }),
          });
          const behaviorResponse = await fetch('http://localhost:8000/getBehavior', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ studentID: student.studentID, class_id: period7 }),
          });
          const academicsResponse = await fetch('http://localhost:8000/getAcademics', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ studentID: student.studentID, class_id: period7 }),
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
              console.log("File Loaded for Seven")
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

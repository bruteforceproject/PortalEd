import React from 'react'

// This is for saving the data in MongoDB through attendace after each Period
async function handleCreateAttendance(studentIDValue,color,acknowledge){
    try {
      // Prepare the data to be sent in the POST request
      let date = new Date();
      date = date.toLocaleDateString();

      console.log("hca")
      const data = {
        studentID:studentIDValue,
        class_id: "",
        color: color,
        date: date,
        acknowledged: acknowledge,
      };

      // Make a POST request to the /createAttendance endpoint
      const response = await fetch('http://localhost:8000/createAttendance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // Successfully created the attendance document
        const responseData = await response.json();
        console.log('Attendance document created with ID:', responseData.documentId);
      } else {
        // Handle errors here
        console.error('Error creating attendance document:', response.statusText);
      }
    } catch (error) {
      console.error('Error creating attendance document:', error);
    }
}

export function getGreenAttendaceData(content){
    const greenBackgroundDivs = content.reduce((acc, element) => {
      // Extract red background divs from the element's children
      const greenDivs = React.Children.toArray(element.props.children).filter(
        child =>
          child.props &&
          child.props.style &&
          child.props.style.backgroundColor === '#558c3b' &&
          child.props.className === "grid5 gridall default-color"
      );
      // Concatenate redDivs to the accumulator
      return acc.concat(greenDivs);
    }, []);
    greenBackgroundDivs.map((value) =>{
      const studentIDValue = value.props.id;
      const color = "#558c3b";
      const acknowledge = true;
      handleCreateAttendance(studentIDValue,color,acknowledge);
    })
}

export function getRedYellowAttendaceData(content){
    const redYellowBackgroundDivs = content.reduce((acc, element) => {
      // Extract red background divs from the element's children
      const redYellowDivs = React.Children.toArray(element.props.children).filter(
        child =>
          child.props &&
          child.props.style &&
          (child.props.style.backgroundColor === '#f25d50' || child.props.style.backgroundColor === '#f2ca52') &&
          child.props.className === "grid5 gridall default-color"
      );
      // Concatenate redDivs to the accumulator
      return acc.concat(redYellowDivs);
    }, []);
    redYellowBackgroundDivs.map((value) =>{
      const studentIDValue = value.props.id;
      const color = value.props.style.backgroundColor;
      const acknowledge = false;
      handleCreateAttendance(studentIDValue,color, acknowledge);
    })
}


// This is for saving the data in MongoDB through academic after each Period
async function handleCreateAcademic(studentIDValue,color,acknowledge){
    try {
      // Prepare the data to be sent in the POST request
      let date = new Date();
      date = date.toLocaleDateString();

      console.log("hca")
      const data = {
        studentID:studentIDValue,
        class_id: "",
        color: color,
        date: date,
        acknowledged: acknowledge,
      };

      // Make a POST request to the /createAcademic endpoint
      const response = await fetch('http://localhost:8000/createAcademics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // Successfully created the attendance document
        const responseData = await response.json();
        console.log('Academic document created with ID:', responseData.documentId);
      } else {
        // Handle errors here
        console.error('Error creating Academic document:', response.statusText);
      }
    } catch (error) {
      console.error('Error creating Academic document:', error);
    }
}

export function getRedAcademicData(content){
    const redBackgroundDivs = content.reduce((acc, element) => {
      // Extract red background divs from the element's children
      const redDivs = React.Children.toArray(element.props.children).filter(
        child =>
          child.props &&
          child.props.style &&
          child.props.style.backgroundColor === '#f25d50' &&
          child.props.className === "grid6 gridall default-color"
      );
      // Concatenate redDivs to the accumulator
      return acc.concat(redDivs);
    }, []);
    redBackgroundDivs.map((value) =>{
      const studentIDValue = value.props.id;
      const color = "#f25d50";
      const acknowledge = false;
      handleCreateAcademic(studentIDValue,color,acknowledge);
    })
}

export function getGreenYellowAcademicData(content){
    const greenYellowBackgroundDivs = content.reduce((acc, element) => {
      // Extract red background divs from the element's children
      const greenYellowDivs = React.Children.toArray(element.props.children).filter(
        child =>
          child.props &&
          child.props.style &&
          (child.props.style.backgroundColor === '#558c3b' || child.props.style.backgroundColor === '#f2ca52') &&
          child.props.className === "grid6 gridall default-color"
      );
      // Concatenate redDivs to the accumulator
      return acc.concat(greenYellowDivs);
    }, []);
    greenYellowBackgroundDivs.map((value) =>{
      const studentIDValue = value.props.id;
      const color = value.props.style.backgroundColor;
      const acknowledge = true;
      handleCreateAcademic(studentIDValue,color, acknowledge);
    })
}


// This is for saving the data in MongoDB through Behaviour after each Period
async function handleCreateBehavior(studentIDValue,color,acknowledge){
    try {
      // Prepare the data to be sent in the POST request
      let date = new Date();
      date = date.toLocaleDateString();

      const data = {
        studentID:studentIDValue,
        class_id: "",
        color: color,
        date: date,
        acknowledged: acknowledge,
      };

      // Make a POST request to the /createAcademic endpoint
      const response = await fetch('http://localhost:8000/createBehavior', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // Successfully created the attendance document
        const responseData = await response.json();
        console.log('Behavior document created with ID:', responseData.documentId);
      } else {
        // Handle errors here
        console.error('Error creating Behavior document:', response.statusText);
      }
    } catch (error) {
      console.error('Error creating Behavior document:', error);
    }
}

export function getRedBehaviorData(content){
    const redBackgroundDivs = content.reduce((acc, element) => {
      // Extract red background divs from the element's children
      const redDivs = React.Children.toArray(element.props.children).filter(
        child =>
          child.props &&
          child.props.style &&
          child.props.style.backgroundColor === '#f25d50' &&
          child.props.className === "grid7 gridall default-color"
      );
      // Concatenate redDivs to the accumulator
      return acc.concat(redDivs);
    }, []);
    redBackgroundDivs.map((value) =>{
      const studentIDValue = value.props.id;
      const color = "#f25d50";
      const acknowledge = false;
      handleCreateBehavior(studentIDValue,color,acknowledge);
    })
}

export function getGreenYellowBehaviorData(content){
    const greenYellowBackgroundDivs = content.reduce((acc, element) => {
      // Extract red background divs from the element's children
      const greenYellowDivs = React.Children.toArray(element.props.children).filter(
        child =>
          child.props &&
          child.props.style &&
          (child.props.style.backgroundColor === '#558c3b' || child.props.style.backgroundColor === '#f2ca52') &&
          child.props.className === "grid7 gridall default-color"
      );
      // Concatenate redDivs to the accumulator
      return acc.concat(greenYellowDivs);
    }, []);
    greenYellowBackgroundDivs.map((value) =>{
      const studentIDValue = value.props.id;
      const color = value.props.style.backgroundColor;
      const acknowledge = true;
      handleCreateBehavior(studentIDValue,color, acknowledge);
    })
}





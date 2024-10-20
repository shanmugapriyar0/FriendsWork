function facultyLogin() {
    alert("Redirecting to Faculty Login Page...");
    // You can redirect to an actual login page using window.location.href = 'faculty_login.html';
}

function showAchievementChoices() {
    document.getElementById('add-achievement-section').classList.add('hidden');
    document.getElementById('achievement-choices-section').classList.remove('hidden');
}

function studentAchievement() {
    alert("Redirecting to Student Achievement Page...");
    // You can add functionality to redirect to student achievement page
}

function facultyAchievement() {
    alert("Redirecting to Faculty Achievement Page...");
    // You can add functionality to redirect to faculty achievement page
}

function goBack() {
    document.getElementById('achievement-choices-section').classList.add('hidden');
    document.getElementById('add-achievement-section').classList.remove('hidden');
}
document.getElementById("studentpage").addEventListener("click",function(){
    window.location.href ='///C:/Users/Lenovo/Desktop/frd_work/studentpage.html';
});

document.getElementById("facultypage").addEventListener("click",function(){
    window.location.href='file:///C:/Users/Lenovo/Desktop/frd_work/facultypage.html';
});
function navigateTo(page) {
    // Redirect to the specified page
    window.location.href = page;
}
/*document.getElementById("cocurricular").addEventListener("click",function(){
    window.location.href ='file:///C:/Users/Lenovo/Desktop/frd_work/cocurricular.html';
});
document.getElementById("extracurricular").addEventListener("click",function(){
    window.location.href='file:///C:/Users/Lenovo/Desktop/frd_work/extracurricular.html';
});*/


document.getElementById('achievementForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission to a server

    const name = document.getElementById('name').value;
    const regNo = document.getElementById('regNo').value;
    const department = document.getElementById('department').value;
    const batch = document.getElementById('batch').value;
    const achievement = document.getElementById('achievement').value;

    if (name && regNo && department && batch && achievement) {
        alert(`Name: ${name}\nRegister No: ${regNo}\nDepartment: ${department}\nBatch: ${batch}\nAchievement: ${achievement}`);
    } else {
        alert('Please fill out all fields.');
    }
});
// facultypage script
function showProfessionSection() {
    const profession = document.getElementById('profession').value;
    const teachingPositionSection = document.getElementById('teachingPositionSection');
    const nonTeachingRoleSection = document.getElementById('nonTeachingRoleSection');
    
    if (profession === "Teaching") {
        teachingPositionSection.style.display = "block";
        nonTeachingRoleSection.style.display = "none";
    } else if (profession === "Non-teaching") {
        nonTeachingRoleSection.style.display = "block";
        teachingPositionSection.style.display = "none";
    } else {
        teachingPositionSection.style.display = "none";
        nonTeachingRoleSection.style.display = "none";
    }
}

function submitForm() {
    // Get the values
    const name = document.getElementById('name').value;
    const department = document.getElementById('department').value;
    const profession = document.getElementById('profession').value;
    const teachingPosition = document.getElementById('teachingPosition').value;
    const nonTeachingRole = document.getElementById('nonTeachingRole').value;

    // Validate the form
    if (!name) {
        alert("Please enter your name.");
        return;
    }
    if (!department) {
        alert("Please select a department.");
        return;
    }
    if (!profession) {
        alert("Please select a profession.");
        return;
    }
    if (profession === "Teaching" && !teachingPosition) {
        alert("Please select a teaching position.");
        return;
    }
    if (profession === "Non-teaching" && !nonTeachingRole) {
        alert("Please enter your non-teaching role.");
        return;
    }

    // Display the result
    const resultDiv = document.getElementById('result');
    let resultHTML = `<h3>Form Submitted Successfully!</h3>
                      <p><strong>Name:</strong> ${name}</p>
                      <p><strong>Department:</strong> ${department}</p>
                      <p><strong>Profession:</strong> ${profession}</p>`;
    
    if (profession === "Teaching") {
        resultHTML += `<p><strong>Teaching Position:</strong> ${teachingPosition}</p>`;
    }
    
    if (profession === "Non-teaching") {
        resultHTML += `<p><strong>Non-teaching Role:</strong> ${nonTeachingRole}</p>`;
    }
    
    resultDiv.innerHTML = resultHTML;
}



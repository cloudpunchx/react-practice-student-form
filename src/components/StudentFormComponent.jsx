import React from "react";
import useStudentForm from "../hooks/useStudentForm"; // Adjust the path as necessary based on your project structure

function StudentFormComponent() {
    const [studentInputs, handleInputChange] = useStudentForm({
        firstNameInput: "",
        lastNameInput: "",
        ageInput: "",
        addressInput: "",
        homeroomInput: "",
        studentIDInput: "",
        favouriteLunchInput: "",
    });

    return (
        <div>
            <h1>High School Student Data</h1>
            <form>
                <label htmlFor="firstNameInput">First Name</label>
                <input
                    name="firstNameInput"
                    type="text"
                    onChange={handleInputChange}
                    value={studentInputs.firstNameInput}
                />

                <label htmlFor="lastNameInput">Last Name</label>
                <input
                    name="lastNameInput"
                    type="text"
                    onChange={handleInputChange}
                    value={studentInputs.lastNameInput}
                />

                <label htmlFor="ageInput">Age</label>
                <input
                    name="ageInput"
                    type="number"
                    onChange={handleInputChange}
                    value={studentInputs.ageInput}
                />

                <label htmlFor="addressInput">Address</label>
                <input
                    name="addressInput"
                    type="text"
                    onChange={handleInputChange}
                    value={studentInputs.addressInput}
                />

                <label htmlFor="homeroomInput">Homeroom Class Number</label>
                <input
                    name="homeroomInput"
                    type="number"
                    onChange={handleInputChange}
                    value={studentInputs.homeroomInput}
                />

                <label htmlFor="studentIDInput">Student ID</label>
                <input
                    name="studentIDInput"
                    type="number"
                    onChange={handleInputChange}
                    value={studentInputs.studentIDInput}
                />

                <div>
                    <h3>Favourite Lunch</h3>
                    <label htmlFor="pizza">Pizza</label>
                    <input
                        name="favouriteLunchInput"
                        type="radio"
                        value="pizza"
                        checked={studentInputs.favouriteLunchInput === "pizza"}
                        onChange={handleInputChange}
                    />
                    <label htmlFor="hashbrowns">Hashbrowns</label>
                    <input
                        name="favouriteLunchInput"
                        type="radio"
                        value="hashbrowns"
                        checked={
                            studentInputs.favouriteLunchInput === "hashbrowns"
                        }
                        onChange={handleInputChange}
                    />
                </div>
            </form>
            <div>
                <h2>Current User Input:</h2>
                <p>First Name: {studentInputs.firstNameInput}</p>
                <p>Last Name: {studentInputs.lastNameInput}</p>
                <p>Age: {studentInputs.ageInput}</p>
                <p>Address: {studentInputs.addressInput}</p>
                <p>Homeroom: {studentInputs.homeroomInput}</p>
                <p>Student ID: {studentInputs.studentIDInput}</p>
                <p>Favourite Lunch: {studentInputs.favouriteLunchInput}</p>
            </div>
        </div>
    );
}

export default StudentFormComponent;

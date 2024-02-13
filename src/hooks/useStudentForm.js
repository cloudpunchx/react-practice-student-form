import {useState} from "react";

function useStudentForm(initialValues) {
    const [studentInputs, setStudentInputs] = useState(initialValues);

    const handleInputChange = (e) => {
        const {name, value, type} = e.target;

        setStudentInputs((prevInputs) => ({
            ...prevInputs,
            [name]: type === "radio" ? value : value,
        }));
    };

    return [studentInputs, handleInputChange];
}

export default useStudentForm;

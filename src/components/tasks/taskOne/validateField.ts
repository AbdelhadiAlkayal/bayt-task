import { IField } from "./TaskOne";

export const validateField = (name: string, value: any, formData: IField) => {
  let error = "";

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const urlRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;

  switch (name) {
    case "username":
      if (!value.trim()) {
        error = "Username is required";
      }
      break;
    case "email":
      if (!emailRegex.test(value.trim())) {
        error = "Enter a valid email";
      }
      break;
    case "firstName":
      if (!value.trim()) {
        error = "First name is required";
      }
      break;
    case "website":
      if (!urlRegex.test(value.trim())) {
        error = "Enter a valid website URL";
      }
      break;
    case "password":
      if (value.length < 6) {
        error = "Password must be at least 6 characters";
      }
      break;
    case "confirmPassword":
      if (value !== formData.password) {
        error = "Passwords do not match";
      }
      break;
    case "agreePolicy":
      if (!value) {
        error = "You must agree to the privacy policy";
      }
      break;
    default:
      break;
  }

  return error;
};

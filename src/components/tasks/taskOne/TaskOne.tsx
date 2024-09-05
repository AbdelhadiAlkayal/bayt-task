import { useState, FormEvent, ChangeEvent } from "react";
import Card from "../../card/Card";
import { Button, Checkbox, Input } from "@lemonsqueezy/wedges";
import { CheckIcon } from "@iconicicons/react";
import { inputArray } from "./inputArray";

const TaskOne = () => {
  const [formData, setFormData] = useState<any>({
    username: "",
    email: "",
    firstName: "",
    website: "",
    password: "",
    confirmPassword: "",
    agreePolicy: false,
  });

  const [errors, setErrors] = useState<any>({
    username: "",
    email: "",
    firstName: "",
    website: "",
    password: "",
    confirmPassword: "",
    agreePolicy: "",
  });

  const validateField = (name: string, value: any) => {
    let error = "";

    switch (name) {
      case "username":
        if (!value.trim()) {
          error = "Username is required";
        }
        break;
      case "email":
        if (!value.includes("@")) {
          error = "Enter a valid email";
        }
        break;
      case "firstName":
        if (!value.trim()) {
          error = "First name is required";
        }
        break;
      case "website":
        if (!value.trim()) {
          error = "Website is required";
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

  const handleChange = (e: ChangeEvent<HTMLInputElement> | any) => {
    debugger;
    console.log(e.target.id);
    const { name, value, checked, type, id } = e.target as HTMLInputElement;
    const fieldValue = type || id === "checkbox" ? checked : value;

    // Update form data
    setFormData({
      ...formData,
      [name]: fieldValue,
    });

    // Clear or set the error for the specific field
    const error = validateField(name, fieldValue);
    setErrors({
      ...errors,
      [name]: error,
    });
  };

  const validateForm = () => {
    let formErrors = { ...errors };
    let isValid = true;

    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) {
        formErrors[key] = error;
        isValid = false;
      } else {
        formErrors[key] = "";
      }
    });

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // Form is valid, handle submission logic here
      console.log("Form Submitted", formData);
    }
  };

  return (
    <div className="flex flex-col gap-4 items-center">
      <h3 className=" font-semibold">{`Form Validation`}</h3>
      <Card>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          {inputArray.map((el, index) => (
            <Input
              key={el.name}
              type={el.type}
              placeholder={el.placeholder}
              label={el.label}
              name={el.name}
              // helperText={
              //   <span className="text-red-500">{`${errors.el.name}`}</span>
              // }
            />
          ))}
          <Checkbox
            id="1"
            description="I agree for privacy policy"
            helperText={
              <span className="text-red-500">{errors.agreePolicy}</span>
            }
            name="agreePolicy"
            defaultChecked={formData.agreePolicy}
            onClick={handleChange}
            required
          />
          <Button
            className=" hover:bg-[#2783fcd8]"
            after={<CheckIcon />}
            variant="primary"
            size="sm"
          >
            {`Submit`}
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default TaskOne;

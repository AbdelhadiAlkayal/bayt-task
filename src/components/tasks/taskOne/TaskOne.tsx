import { useState, FormEvent } from "react";
import Card from "../../card/Card";
import { Button, Input, Label } from "@lemonsqueezy/wedges";
import { CheckIcon } from "@iconicicons/react";
import { inputArray } from "./inputArray";
import { toast } from "react-toastify";
import { validateField } from "./validateField";

export interface IField {
  username: string;
  email: string;
  firstName: string;
  website: string;
  password: string;
  confirmPassword: string;
  agreePolicy: boolean;
}

const TaskOne = () => {
  const [formData, setFormData] = useState<IField>({
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

  const handleChange = (e: any) => {
    const { name, value, checked, type } = e.target as HTMLInputElement;
    const fieldValue = type === "checkbox" ? checked : value;

    setFormData({
      ...formData,
      [name]: fieldValue,
    });

    const error = validateField(name, fieldValue, formData);
    setErrors({
      ...errors,
      [name]: error,
    });
  };

  const validateForm = () => {
    let formErrors = { ...errors };
    let isValid = true;

    (Object.keys(formData) as (keyof IField)[]).forEach((key) => {
      const error = validateField(key, formData[key], formData);
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
      toast.success("Your Form sublimation");

      setFormData({
        username: "",
        email: "",
        firstName: "",
        website: "",
        password: "",
        confirmPassword: "",
        agreePolicy: false,
      });
    }
  };

  return (
    <div className="flex flex-col gap-4 items-center">
      <h3 className=" font-semibold">{`Form Validation`}</h3>
      <Card customClass="w-[400px]">
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          {inputArray.map((el) => (
            <Input
              onChange={handleChange}
              key={el.name}
              type={el.type}
              placeholder={el.placeholder}
              label={el.label}
              name={el.name}
              helperText={
                <span className="!text-red-500">{`${errors[el.name]}`}</span>
              }
            />
          ))}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="agreePolicy"
                onClick={handleChange}
                defaultChecked={formData.agreePolicy}
              />
              <Label required description="I agree for privacy policy" />
            </div>
            {errors.agreePolicy && (
              <span className="!text-red-500 text-[14px]">
                {errors.agreePolicy}
              </span>
            )}
          </div>

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

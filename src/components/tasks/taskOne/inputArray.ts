interface IInputArray {
  type: string;
  label: string;
  name: string;
  placeholder: string;
}

export const inputArray: IInputArray[] = [
  {
    type: "text",
    label: "Username",
    name: "username",
    placeholder: "username",
  },
  {
    type: "text",
    label: "Email",
    name: "email",
    placeholder: "email",
  },
  {
    type: "text",
    label: "First name",
    name: "firstName",
    placeholder: "first name",
  },
  {
    type: "text",
    label: "Website",
    name: "website",
    placeholder: "website",
  },

  {
    type: "password",
    label: "Password",
    name: "password",
    placeholder: "password",
  },
  {
    type: "password",
    label: "Re Password",
    name: "confirmPassword",
    placeholder: "confirm password",
  },
];

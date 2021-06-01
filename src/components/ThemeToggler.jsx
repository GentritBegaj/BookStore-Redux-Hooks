import React, { useContext } from "react";
import { Form } from "react-bootstrap";
import ThemeContext from "../contexts/theme";

export default function ThemeToggler() {
  const [theme, setTheme] = useContext(ThemeContext);
  console.log(theme);

  return (
    <Form>
      <Form.Check
        type="switch"
        id="custom-check"
        label="Dark Mode"
        onChange={() => {
          setTheme((theme) => (theme === "light" ? "dark" : "light"));
        }}
      />
    </Form>
  );
}

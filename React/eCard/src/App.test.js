import App from './App';
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

describe("ApplicationForm", () => {
  it("should render the basic fields", () => {
    render(<App />);
    expect(screen.getByLabelText("EMAIL ADDRESS*")).toBeInTheDocument();
    expect(screen.getByLabelText("Legal Business Name*")).toBeInTheDocument();
    expect(screen.getByLabelText("Business Name On Card*")).toBeInTheDocument();
    expect(screen.getByLabelText("Business Address Line 1*")).toBeInTheDocument();
    expect(screen.getByLabelText("Business Address Line 2")).toBeInTheDocument();
    expect(screen.getByTestId("primary-element")).toBeInTheDocument();
    expect(screen.getByLabelText("Business Phone Number*")).toBeInTheDocument();
    expect(screen.getByLabelText("First Name*")).toBeInTheDocument();
    expect(screen.getByLabelText("Last Name*")).toBeInTheDocument();
    expect(screen.getByLabelText("Name On Card*")).toBeInTheDocument();
    expect(screen.getByLabelText("Home Address Line 1*")).toBeInTheDocument();
    expect(screen.getByLabelText("Home Address Line 2")).toBeInTheDocument();
    expect(screen.getByTestId("secondary-element")).toBeInTheDocument();
    expect(screen.getByRole("radio", { name:"radio 1" })).toBeInTheDocument();
    expect(screen.getByRole("radio", { name:"radio 2" })).toBeInTheDocument();
    expect(screen.getByRole("checkbox",{name:"My home address is the same as my business address"})).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /submit/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /save/i })).toBeInTheDocument();
  });

  test("initial values should be empty", () => {
    render(<App />);
    //finding elements
    const emailInp = screen.getByLabelText('EMAIL ADDRESS*');
    const firstInp = screen.getByLabelText('First Name*');
    //assertions
    expect(emailInp.value).toBe("");
    expect(firstInp.value).toBe("");
  });


  //checkbox action
  test('double click of checkbox to be unchecked', () => {
    const onChange = jest.fn()
    render(<input type="checkbox" onChange={onChange} />);
    const checkbox = screen.getByRole('checkbox')
    userEvent.dblClick(checkbox)
    expect(onChange).toHaveBeenCalledTimes(2)
    expect(checkbox).not.toBeChecked()
  });


  test("should be able to type an email", () => {
    render(<App />);
    //finding elements
    const emailInp = screen.getByLabelText('EMAIL ADDRESS*');
    userEvent.type(emailInp, "test@gmail.com");
    //assertions
    expect(emailInp.value).toBe("test@gmail.com");
  });

});


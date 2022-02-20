import React from "react";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import Header from "../Header";

const mockHeader = ()=>(    <Header />);
//mocking useNavigate
const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

//Test suite which will contain all the tests for Header
describe("Testing Header", () => {
  test("check if the  Header component is rendered successfully", () => {
    render(mockHeader());
    expect(screen.getByText("Endpoints Manager")).toBeInTheDocument();
  });

  test("check if Header component has failed to render", () => {
    render(mockHeader());
    expect(screen.queryByText("Endpoints Manager1")).not.toBeInTheDocument();
  });

  test("matches the snapshot to check if the component renders correctly", () => {
    const tree = renderer
      .create((mockHeader()))
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

import React from "react";

import { useSelector, useDispatch } from "react-redux";

import Home from ".";
import tasks from "../../fixtures/tasks";
import { render } from "@testing-library/react";

describe("Home", () => {
  const dispatch = jest.fn();
  const _useDispatch = useDispatch as jest.MockedFunction<typeof useDispatch>,
    _useSelector = useSelector as jest.MockedFunction<typeof useSelector>;

  _useDispatch.mockImplementation(() => dispatch);
  _useSelector.mockImplementation((selector) =>
    selector({
      Reducer: { tasks },
    })
  );

  it("renders tasks", () => {
    const { container } = render(<Home />);

    expect(container).toHaveTextContent("title1");
  });
});

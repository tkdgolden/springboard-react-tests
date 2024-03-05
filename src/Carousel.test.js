import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";
import TEST_IMAGES from "./_testCommon.js";

import * as matchers from '@testing-library/jest-dom/matchers'

expect.extend(matchers)

describe("Carousel", () => {

  // smoke test
  it("renders", () => {
    render(<Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />);
  })

  // snapshot test
  it("matches snapshot", function () {
    const { asFragment } = render(<Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />);
    expect(asFragment()).toMatchSnapshot();
  });

  // starter test
  it("works when you click on the right arrow", function () {
    const { container } = render(
      <Carousel
        photos={TEST_IMAGES}
        title="images for testing"
      />
    );
    // expect the first image to show, but not the second
    expect(
      container.querySelector('img[alt="testing image 1"]')
    ).toBeInTheDocument();
    expect(
      container.querySelector('img[alt="testing image 2"]')
    ).not.toBeInTheDocument();

    // move forward in the carousel
    const rightArrow = container.querySelector(".bi-arrow-right-circle");
    fireEvent.click(rightArrow);

    // expect the second image to show, but not the first
    expect(
      container.querySelector('img[alt="testing image 1"]')
    ).not.toBeInTheDocument();
    expect(
      container.querySelector('img[alt="testing image 2"]')
    ).toBeInTheDocument();
  });
  
  // left arrow
  it("works when you click on the right arrow", function () {
    const { container } = render(
      <Carousel
        photos={TEST_IMAGES}
        title="images for testing"
      />
    );
    // move forward in the carousel
    const rightArrow = container.querySelector(".bi-arrow-right-circle");
    fireEvent.click(rightArrow);

    // expect the second image to show, but not the first
    expect(
      container.querySelector('img[alt="testing image 2"]')
    ).toBeInTheDocument();
    expect(
      container.querySelector('img[alt="testing image 1"]')
    ).not.toBeInTheDocument();

    // move forward in the carousel
    const leftArrow = container.querySelector(".bi-arrow-left-circle");
    fireEvent.click(leftArrow);

    // expect the first image to show, but not the second
    expect(
      container.querySelector('img[alt="testing image 2"]')
    ).not.toBeInTheDocument();
    expect(
      container.querySelector('img[alt="testing image 1"]')
    ).toBeInTheDocument();
  });
})


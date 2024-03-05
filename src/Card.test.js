import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";
import TEST_IMAGES from "./_testCommon.js";

describe("Card", () => {

    // smoke test
    it("renders", () => {
        const caption = "Photo by Richard Pasquarella on Unsplash";
        const src = "./image1.jpg";
        const currCardIdx = 2;
        const total = 3;
        render(<Card
            caption={caption}
            src={src}
            currNum={currCardIdx + 1}
            totalNum={total}
        />);
    })

    // snapshot test
    it("matches snapshot", function () {
        const caption = "Photo by Richard Pasquarella on Unsplash";
        const src = "./image1.jpg";
        const currCardIdx = 2;
        const total = 3;
        const { asFragment } = render(<Card
            caption={caption}
            src={src}
            currNum={currCardIdx + 1}
            totalNum={total}
        />);
        expect(asFragment()).toMatchSnapshot();
    });
});
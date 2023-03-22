import { it, describe } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import Charts from "../Charts";

describe("Charts componenets", () => {
    it("render names"), async() => {
        render(<Charts />)
    await waitFor(() => {
        screen.getByRole('img', {name: 'back'})
    })
    }
})
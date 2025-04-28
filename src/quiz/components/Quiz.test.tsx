import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { Quiz } from "./Quiz";
import "@testing-library/jest-dom";
import { questionsTest } from "../../shared/data/flashcards-content.ts";

describe("Quiz", () => {
    it("displays first question", () => {
        render(<Quiz questions={questionsTest} />);

        const question = screen.getByText(/q1/i);
        expect(question).toBeInTheDocument();

        expect(screen.getByText(/a1/i)).toBeInTheDocument();
        expect(screen.getByText(/a2/i)).toBeInTheDocument();
        expect(screen.getByText(/a3/i)).toBeInTheDocument();
    });

    it("selects an answer", async () => {
        const user = userEvent.setup({});
        render(<Quiz questions={questionsTest} />);

        const answers = screen.getAllByRole("button");
        await user.click(answers[0]);

        expect(answers[0]).toHaveClass("bg-green-100");
        expect(answers[1]).toHaveClass("bg-gray-100");
        expect(answers[2]).toHaveClass("bg-gray-100");
    });
});

import { render, screen } from "@testing-library/react";
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
});

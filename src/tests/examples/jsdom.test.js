import { JSDOM } from "jsdom";

describe("JSDOM Tests", () => {
  it("should manipulate the DOM", () => {
    // Create a new JSDOM instance
    const dom = new JSDOM(
      `<!DOCTYPE html><html><body><div id="test">Hello, World!</div></body></html>`,
    );

    // Access the document object
    const document = dom.window.document;

    // Find the div element
    const div = document.getElementById("test");

    // Check the initial text content
    expect(div.textContent).toBe("Hello, World!");

    // Change the text content
    div.textContent = "Hello, JSDOM!";

    // Verify the change
    expect(div.textContent).toBe("Hello, JSDOM!");
  });
});
